"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import CouponDialog from "./CouponDialog";
import { toast } from 'react-toastify';
import { ProductContext } from "@/app/context/products/ProductContext";

let initialTotalPrice = 0;

export const CouponInfo = () => {

  let {totalPrice , setTotalPrice,allCoupons,activeCouponCode,setActiveCouponCode,usedCoupons,setUsedCoupons} = useContext(ProductContext);


  let [counter , setCounter] = useState(0);

  useEffect(() => {
    if(totalPrice){
      console.log(totalPrice,"Bhaag ke jaayegga kaha?")
      console.log(counter);
      if(counter < 2){
        console.log(totalPrice , "dekha")
        initialTotalPrice = totalPrice;
      }
    }
    handleTotalPrice();
    SaveCoupon();
  },[totalPrice , activeCouponCode])
  
 
   const handleCoupon = (activeCouponCode:string) => {
       if(usedCoupons.length){
        let isValidCouponCode = allCoupons.find((item) => item.code === activeCouponCode);
        if(isValidCouponCode){
          if(usedCoupons[0].activeCoupon === activeCouponCode){
            toast.error("Coupon code already applied")
         }else{     
          let usedCoupon = {activeCoupon:activeCouponCode,usedCount:1,discount:isValidCouponCode.discount};
          let discountedAmount = (usedCoupon.discount/100)*initialTotalPrice;
          console.log(initialTotalPrice,"dekha");
          setTotalPrice((initialTotalPrice) - discountedAmount);
           setUsedCoupons([usedCoupon]);
           toast.success(`Coupon code applied successfully`,{
            position:"top-right"
          });
         }
        }else{
          toast.error("Not a valid coupon code" , {
            position:"top-right"
          })
        }
 
       }else{
          let isValidCouponCode = allCoupons.find((item) => item.code === activeCouponCode);
          setCounter(2);
          if(isValidCouponCode){
            let usedCoupon = {activeCoupon:activeCouponCode,usedCount:1,discount:isValidCouponCode.discount};
            usedCoupons.push(usedCoupon);
            let discountedAmount = (usedCoupon.discount/100)*totalPrice;
            setTotalPrice(totalPrice - discountedAmount);
            toast.success(`Coupon code applied successfully`,{
              position:"top-right"
            });
            setUsedCoupons(usedCoupons);
            // localStorage.setItem("couponCode" , `${activeCouponCode}`)
          }else{
            toast.error("Not a valid coupon code" , {
              position:"top-right"
            })
          }
       }
   }

   const handleTotalPrice = () => {
    localStorage.setItem("totalPrice" , `${totalPrice}`)
   }

   const SaveCoupon = () => {
    localStorage.setItem("couponCode" , `${activeCouponCode}`)
   }


  return (
    <div className="flex flex-col gap-0.5 mb-3">
      <div className="relative parent border border-border bg-white rounded-lg lg:block hidden lg:order-2 order-2">
        <Icon
          icon="ph:seal-percent-fill"
          className="text-2xl text-secondary absolute start-3.5 top-1/2 -translate-y-1/2"
        />
        <Input
          type="email"
          value={activeCouponCode}
          onChange={(e) => setActiveCouponCode(e.target.value)}
          placeholder="ENTER COUPON CODE"
          className="child lg:min-w-[560px] min-w-auto  px-12 rounded-full h-11 border-none focus-visible:ring-0 shadow-none placeholder:text-[13px]"
        />
        <Button onClick={() => handleCoupon(activeCouponCode)} className="text-sm text-white bg-primary absolute end-3.5 top-1/2 -translate-y-1/2 disabled:opacity-50 hover:bg-primary/90 cursor-pointer">
          Apply
     
        </Button>
      </div>
      {/* Coupon details */}
      <div className="flex items-center justify-between order-2 flex-wrap">
        <p className="text-[13px] font-medium text-primary">
         {`${allCoupons.length} coupons available`}
        </p>
         <span className="bg-primary/10 py-1 font-semibold px-1.5 rounded-md text-primary text-[10px] flex items-center gap-1">
          <Icon icon="ic:outline-local-offer" className="text-sm" />
           {activeCouponCode}
         </span>
         <CouponDialog handleCoupon = {(activeCouponCode:string) => handleCoupon(activeCouponCode)} />
      </div>
  
    </div>
  );
};

