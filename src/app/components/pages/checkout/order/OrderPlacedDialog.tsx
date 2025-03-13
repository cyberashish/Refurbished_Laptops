"use client"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/app/components/ui/alert-dialog";
import { ProductContext } from "@/app/context/products/ProductContext";
import { UserContext } from "@/app/context/users/UserContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const OrderPlacedDialog = () => {

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const {totalPrice, paymentMethod , persistCartItems , setPersistCartItems , setTotalPrice , setUsedCoupons, setTaxes , setActiveCouponCode} = useContext(ProductContext)
  const {userId, activeShippingAddress} = useContext(UserContext);
  const [isLoading , setIsLoading] = useState(false);

  const handleOrder = async () => {
       setIsLoading(true);
       try{
         const orderResponse = await fetch("/api/users/order",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({userId,totalAmount:totalPrice,paymentMethod,shippingAddress:activeShippingAddress,items:persistCartItems})
         });
         const userOrder = await orderResponse.json();
         console.log(userOrder);

        // Clear all cart items
         
        try{
          const deletedCartItemsResponse = await fetch("/api/users/cart/delete/all" , {
            method:"DELETE",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId})
          });
        const data =  await deletedCartItemsResponse.json();
        console.log(data);
        setPersistCartItems([]);
        localStorage.setItem('totalPrice',"");
        localStorage.setItem('couponCode',"");
        setTotalPrice(0);
        setTaxes(0);
        }catch(error){
          console.log("failed to clear all cart-items",error)
        }
         setOpen(true);
         setIsLoading(false);
         setActiveCouponCode("ENTER COUPON");
         setUsedCoupons([])
         setTimeout(() => {
          router.push("/users/order")
         }, 1000);
       }catch(error){
        console.log("failed to place order!" , error)
       }
  }

  return (
    <>
      <button disabled={isLoading} onClick={handleOrder} className="bg-secondary h-fit hover:bg-secondary/90 text-[15px] font-semibold py-3.5 px-7 flex items-center gap-1 rounded-md text-white">
              Complete Purchase
              <Loader2 className={`animate-spin ${isLoading ? 'block' : 'hidden'}`} />
      </button>
      {/* Successfully placed order */}
<AlertDialog open={open} onOpenChange={setOpen}>
  <AlertDialogContent className="p-0">
  <AlertDialogCancel onClick={() => setOpen(false)} className="text-lg h-8 w-8 bg-white shadow flex items-center justify-center !p-0 absolute end-5 top-2.5">
            <Icon icon="material-symbols:close-rounded" className="text-2xl text-dark shrink-0" />
</AlertDialogCancel>
    <AlertDialogHeader>
      <AlertDialogTitle className="invisible hidden" >Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription asChild>
       <div>
       <Image src="https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-14876.jpg?t=st=1741213171~exp=1741216771~hmac=993210bdecdd39920288d38bd911765af52ca3cfa93f0eac7bf74779f06bb553&w=900" alt="image" width={100} height={100} style={{width:"100%" , height:"auto"}} className="px-28" />
        <div className="pb-6 px-20" >
        <h5 className="text-xl text-secondary font-semibold text-center">Order Placed Successfully!</h5>
       <p className="text-sm font-medium text-center" >Thank you for your purchase. Your order has been confirmed.</p>
        </div>
       </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
  </AlertDialogContent>
</AlertDialog>

    </>
  )
}

export default OrderPlacedDialog
