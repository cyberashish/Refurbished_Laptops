"use client"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog';
import { Button } from '../../ui/button';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Loader2 } from 'lucide-react';
import { useContext, useState } from 'react';
import { ProductContext } from '@/app/context/products/ProductContext';
import { UserContext } from '@/app/context/users/UserContext';

const DeleteWishlistItemDialog = ({wishlistItemId}:{wishlistItemId:string}) => {
    const [isItemDeleting , setIsItemDeleting] = useState(false);
    const {setWishListItems} = useContext(ProductContext);
    const {userId} = useContext(UserContext);

    const getWishlistItems = async () => {
        try{
          const wishlistItemsResponse  = await fetch("/api/users/wishlist/all-items",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId})
          });
          const {data} = await wishlistItemsResponse.json();
          setWishListItems(data);
        }catch(error){ 
          console.log("Failed to fetch all wishlist items",error);
        }
    }

    const handleDeleteItem = async (wishlistItemId:string) => {
        try{
            const wishListItemResponse = await fetch("/api/users/wishlist" , {
             method:"DELETE",
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify({wishlistItemId})
            });
            await wishListItemResponse.json();
            getWishlistItems();
        }catch(error){
          console.log("Failed to delete wishlist item",error);
        }
   }
  return (
    <Dialog >
    <DialogTrigger asChild>
      <Button 
        className="px-3.5 py-1.5 border bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      >
        Remove{" "}
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-sm" >
      <DialogHeader>
         <Icon icon="cuida:alert-outline" className="text-6xl mb-5 text-red-500 mx-auto" />
        <DialogTitle className="text-center leading-normal" >Are you absolutely sure want to delete this item?</DialogTitle>
        <DialogDescription asChild>
          <div className="flex items-center justify-center gap-2 pt-3">
          <Button onClick={() => { 
            setIsItemDeleting(true);
            handleDeleteItem(wishlistItemId)
          }} disabled = {isItemDeleting} className="px-3.5 py-1.5  bg-red-500  text-white hover:bg-red-600 hover:text-white" >
          <Loader2 className={`animate-spin ${isItemDeleting ? "block" : "hidden"} text-sm`}  />
           Remove
          </Button>
          <DialogClose asChild>
          <Button className="px-3.5 py-1.5 border bg-transparent border-primary text-primary hover:bg-primary hover:text-white" >
           Cancel
          </Button>
          </DialogClose>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default DeleteWishlistItemDialog
