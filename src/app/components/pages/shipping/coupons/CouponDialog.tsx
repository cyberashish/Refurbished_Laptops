"use client"

import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useContext } from "react";
import { ProductContext } from "@/app/context/products/ProductContext";

const CouponDialog = ({handleCoupon}:any) => {
  const {allCoupons , setActiveCouponCode} = useContext(ProductContext);
  console.log(allCoupons,"ref")
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button asChild className="flex !p-0 items-center group bg-transparent shadow-none hover:bg-transparent hover:text-primary/90 cursor-pointer">
          <div>
          <p className=" text-[13px] text-primary group-hover:text-primary/90">
              View all coupons
            </p>
            <Icon
              icon="prime:chevron-right"
              className="text-primary text-lg shrink-0 group-hover:text-primary/90"
            />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-start leading-normal">
            Offers & Benefits
          </DialogTitle>
          <DialogDescription asChild>
             <div className="pt-4">
             <h3 className="text-base font-semibold mb-3.5">Available Offers</h3>
            <div className="flex flex-col gap-2">
              {
                allCoupons && allCoupons?.map((item) => {
                  return (
                    <DialogClose asChild key={item.id}>
                    <div className="flex items-start justify-between mb-2 last:mb-0">
                       <div className="flex flex-col gap-1">
                           <div className="flex gap-2.5 items-center">
                               <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                               <Icon icon='ph:seal-percent' className=" text-muted shrink-0 text-xl" />
                               </div>
                               <div className="py-1 px-2 border-2 rounded-md border-dashed border-border text-sm font-semibold text-muted">{item.code}</div>
                           </div>
                           <p className="text-xs font-medium text-secondary mt-0.5">{`You save ${item.discount}%`}</p>

                       </div>
                       <button className="text-sm uppercase font-semibold text-primary hover:text-primary/90" onClick={() => {
                        setActiveCouponCode(item.code)
                        handleCoupon(item.code)
                       }} >apply</button>
                    </div>
                 </DialogClose>
                  )
                })
              }
            </div>
             </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CouponDialog;
