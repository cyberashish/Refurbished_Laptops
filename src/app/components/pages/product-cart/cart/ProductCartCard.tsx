import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Button } from "../../../ui/button";
import { useContext, useState } from "react";
import { ProductContext } from "@/app/context/products/ProductContext";
import { toast } from "sonner"
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import { UserContext } from "@/app/context/users/UserContext";
import AuthLoginDialog from "@/app/components/authentication/auth/AuthLoginDialog";

export interface productCartType {
  image: any;
  title: string;
  pricing: any;
  discountPercentage: any;
  cartItemId: string,
  quantity:number,
  laptopId?:string
}

const ProductCartCard = ({
  image,
  title,
  pricing,
  discountPercentage,
  cartItemId,
  quantity,
  laptopId
}: productCartType) => {
  const actualPrice = pricing?.actualPrice.replaceAll(",", "");
  const discountendPrice = (Number(discountPercentage) / 100) * Number(actualPrice);

    const [isLoading , setIsLoading] = useState(false);
    const { removeCartItem , updateCartQuantity} = useContext(ProductContext);
    const {userId} = useContext(UserContext);
    const {data:session} = useSession();
    const [isOpen , setIsOpen] = useState(false)



  const handleWishlist = async () => {
    if(!session){
      alert("Please login to create your wishlist");
    }else{
         try{
            const wishlistResponse = await fetch("/api/users/wishlist",{
              method:"POST",
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify({userId, laptopId})
            });
            const wishlistResult = await wishlistResponse.json();
            if(wishlistResult.error){
              toast(`${wishlistResult.error}`,{
                position:"top-right",
                style: {background:"hsl(var(--error))" , color:"#ffffff" , borderColor:"#ffffff00" , fontSize:"16px"}
              })
            }else{
              toast(`Item added to wishlist!`,{
                position:"top-right",
                style: {background:"#69d269" , color:"#ffffff" , borderColor:"#ffffff00" , fontSize:"16px"}
              })
            }
         }catch(error){
             console.log("Failed to create wishlist item", error);
             toast("Failed to add item to wishlist!")
         }
    }
  };
 
  const handleQuantity = async (operation:string) => {
    setIsLoading(true);
     if(operation === "decrement"){
      if(+quantity > 1){
        await updateCartQuantity(cartItemId,"decrement")
       }
     }else{
      await updateCartQuantity(cartItemId,"increment")
     };
     setIsLoading(false);
  }


 

  return (
    <div className="flex items-center justify-between gap-10 p-4 bg-white rounded-md shadow lg:flex-nowrap flex-wrap">
      <div className="flex items-center lg:gap-4 gap-0 lg:w-10/12 w-full lg:flex-nowrap flex-wrap">
        <div className="lg:w-3/12 w-full">
          <Image
            src={image[1]}
            alt="product_image"
            width={100}
            height={100}
            style={{ width: "100%", height: "auto" }}
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-3 lg:w-9/12 w-full">
          <h3 className="text-lg font-semibold text-dark">{title}</h3>
          <div className="flex items-center gap-0.5">
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
          </div>
          <p className="text-sm text-muted">
            Standard Delivery by 24 February 2025 | Free
          </p>
        <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
         <div className="flex items-center gap-2.5 lg:flex-nowrap flex-wrap">
            {
              session ? <Button
              onClick={handleWishlist}
              className="px-3.5 py-1.5 border bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
            >
              Move to Wishlist
            </Button> : <AuthLoginDialog/>
            }
            <div>
              <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                  <Button 
                  onClick={() => setIsOpen(true)}
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
                      <Button onClick={ async () => {
                        setIsLoading(true);
                       await removeCartItem(cartItemId);
                       setIsOpen(false);
                       setIsLoading(false);
                       
                      }} disabled={isLoading} className="px-3.5 py-1.5  bg-red-500  text-white hover:bg-red-600 hover:text-white" >
                      <Loader2 className={`animate-spin ${isLoading ? "block" : "hidden"} text-sm`}  />
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
            </div>
          </div>
          <div className="flex items-center gap-3">
              <button disabled={isLoading} onClick={() => handleQuantity("decrement")} className="p-1 px-1.5 hover:border-primary border border-border text-base font-semibold rounded-md">
                 {!session?<Icon icon="ic:round-minus" className="text-xl text-dark" />:(
                        isLoading ? <Loader2 className={`animate-spin ${isLoading ? "block" : "hidden"}`}  /> :<Icon icon="ic:round-minus" className="text-xl text-dark" />
                 )}
              </button>
              <div className="p-1 px-1.5 text-base font-semibold min-w-8 flex items-center justify-center">
                {quantity}
              </div>
              <button disabled={isLoading} onClick={() => handleQuantity("increment")} className="p-1 px-1.5 hover:border-primary border border-border text-base font-semibold rounded-md">
              {!session?<Icon icon="ic:round-plus" className="text-xl text-dark" />:(
                        isLoading ? <Loader2 className={`animate-spin ${isLoading ? "block" : "hidden"}`}  /> :<Icon icon="ic:round-plus" className="text-xl text-dark" />
                 )}
              </button>
            </div>
        </div>
        </div>
      </div>
      <div className="lg:w-2/12 w-full lg:text-end text-start">
        <h2 className="text-[22px] font-bold">{`₹${pricing.discountedPrice}`}</h2>
        <p className="text-xs text-muted my-0.5 font-medium">
          (Incl. all Taxes)
        </p>
        <hr className="border border-border my-2" />
        <p className="text-sm text-dark font-medium line-through">{`MRP ₹${pricing.actualPrice}`}</p>
        <p className="text-[11px] font-medium">{`(Save ₹${discountendPrice.toFixed(
          2
        )})`}</p>
        <hr className="border border-border my-2" />
        <h3 className="text-lg font-bold">₹2636/mo*</h3>
        <p className="text-secondary hover:text-seconday/80 text-xs hover:underline cursor-pointer">
          EMI Options
        </p>
      </div>
    </div>
  );
};

export default ProductCartCard;
