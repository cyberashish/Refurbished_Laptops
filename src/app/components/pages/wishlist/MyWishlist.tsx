import React, { useContext, useEffect, useState } from 'react'
import WishlistCard from './WishlistCard';
import { UserContext } from '@/app/context/users/UserContext';
import { ProductContext } from '@/app/context/products/ProductContext';
import WishlistSkeleton from '../product-detail/skeleton/WishlistSkeleton';

const MyWishlist = () => {

  const [isWishlistItemLoading , setWishListItemLoading] = useState(true);
  const {userId} = useContext(UserContext);
  const {allWishListItems , setWishListItems} = useContext(ProductContext);

   const getWishlistItems = async () => {
        try{
          const wishlistItemsResponse  = await fetch("/api/users/wishlist/all-items",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId})
          });
          const {data} = await wishlistItemsResponse.json();
          setWishListItems(data);
          setWishListItemLoading(false);
        }catch(error){ 
          console.log("Failed to fetch all wishlist items",error);
          setWishListItemLoading(false);
        }
    }

    useEffect(() => {
       if(userId){
        getWishlistItems();
       }
    },[userId])
  return (
    <>
       <div className="my-10">
       <p className="text-[13px] font-medium text-center">Enjoy your all wishlist item</p>
          <div className=" flex justify-center mb-10">
            <span className="text-2xl w-fit relative text-primary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-primary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-primary font-semibold">
              My Wishlist
            </span>
          </div>
       </div>
       <div className="w-full flex justify-center gap-6 mb-6 lg:flex-nowrap flex-wrap">
       {
        isWishlistItemLoading ? <WishlistSkeleton/> : (
          allWishListItems.length === 0 ?  <h2 className='text-2xl text-center font-semibold text-dark my-6' >No Wishlist item found</h2> : (
            allWishListItems.map((item:any) => {
              return (
                <WishlistCard  
                key={item.id}
                 images = {item.laptop.image}
                 title = {item.laptop.title}
                 titleSlug = {item.laptop.titleSlug}
                  pricing = {item.laptop.pricing}
                 quantity = {item.laptop.stock.quantity}
                 discountPercentage = {item.laptop.discountPercentage}
                 wishlistItemId={item.id}
                 />
              )
            })
          )
        )
       }
       </div>
    </>
  )
}

export default MyWishlist
