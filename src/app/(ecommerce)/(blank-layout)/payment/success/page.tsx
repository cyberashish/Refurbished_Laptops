"use client";

import { ProductContext } from "@/app/context/products/ProductContext";
import { UserContext } from "@/app/context/users/UserContext";
import payment from "@/assets/images/payments/success_payment.jpg"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Page = () => {

  const { setPersistCartItems , setTotalPrice , setUsedCoupons, setTaxes , setActiveCouponCode} = useContext(ProductContext)
  const {userId} = useContext(UserContext);

  const router = useRouter();

  const handleCartReset = async () => {

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
     setActiveCouponCode("ENTER COUPON");
     setUsedCoupons([])
     }catch(error){
       console.log("failed to clear all cart-items",error)
     }
   
     router.push("/users/order");


    }

  return (
    <div className='w-full h-screen bg-white flex items-center justify-center' >
         <div className="lg:w-1/4 w-full flex flex-col justify-center">
             <Image src={payment} alt="images"  />
             <h3 className="text-lg text-center font-semibold text-secondary">Your payment has been successfully Completed!</h3>
            <button onClick={handleCartReset} className='py-2.5 mt-4 px-8 rounded-full font-medium text-base bg-secondary text-white hover:bg-secondary/90' >Go to your Orders</button>
         </div>
    </div>
  )
}

export default Page
