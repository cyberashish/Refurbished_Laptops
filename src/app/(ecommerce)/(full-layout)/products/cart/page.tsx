"use client";

import { useSession } from "next-auth/react";
import { ProductSkeleton } from "@/app/components/pages/product-detail/skeleton/ProductSkeleton";
import LoggedOutCart from "@/app/components/pages/product-cart/cart/LoggedOutCart";
import OrderSummary from "@/app/components/pages/product-cart/order-summary/OrderSummary";
import LoggedInCart from "@/app/components/pages/product-cart/cart/LoggedInCart";
import { useContext, useEffect } from "react";
import { ProductContext } from "@/app/context/products/ProductContext";



const Page = () => {
  const { data: session, status } = useSession();
  const {setTotalPrice , setActiveCouponCode} = useContext(ProductContext);

  useEffect(() => {
    setTotalPrice(0);
    setActiveCouponCode("ENTER COUPON")
  },[])

  if(status === "loading") {
    return (
      <div className="container-sm">
        <ProductSkeleton/>
      </div>
    )
  }
  else{
    return (
      <div className="w-full container-sm p-6">
        <h4 className="text-[22px] font-semibold text-dark pt-4 lg:mb-7 mb-2">Your Cart</h4>
        <div className="flex w-full justify-between gap-6 lg:flex-nowrap flex-wrap">
      <div className="lg:w-9/12 w-full">
        <div className="flex flex-col gap-6">
       {session?.user?.email ? <LoggedInCart /> : <LoggedOutCart/>}
        </div>
      </div>
      <div className="lg:w-3/12 w-full">
        <OrderSummary/>
      </div>
     </div>
        
      </div>
    );
  }
};

export default Page;
