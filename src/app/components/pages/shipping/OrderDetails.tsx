"use client"

import MiniOrderItem from "../../users/orders/MiniOrderItem"; 
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/app/context/products/ProductContext";
import { ProductSkeleton } from "../product-detail/skeleton/ProductSkeleton";
import { formatNumber } from "@/app/utils";
import { CouponInfo } from "./coupons/CouponInfo";

const OrderDetails = () => {
  const {persistCartItems,isCartItemsLoading,totalPrice,setTotalPrice } = useContext(ProductContext);
  let accumulatedDiscountedPrice = 0;
  const [hasrrun , setHasrun] = useState(false);

  useEffect(() => {
      if(hasrrun){
        if(persistCartItems){
           persistCartItems?.forEach((item:any) => {
             accumulatedDiscountedPrice = accumulatedDiscountedPrice + (Number(item?.laptop.pricing?.discountedPrice?.replaceAll(",",""))*item.quantity);
         });
           const productPricesAfterTaxation = accumulatedDiscountedPrice;
           console.log(productPricesAfterTaxation,"bahega",totalPrice,"jai shree ram",hasrrun)
           setTotalPrice(productPricesAfterTaxation);
         }
      }else{
        console.log("jai shree krishna",hasrrun)
      };
      setHasrun(true)
  },[hasrrun,persistCartItems])
  
  return (
      <div className="lg:w-5/12 w-full border-s border-border lg:ps-[56px] ps-6 lg:px-0 px-6 pt-14 ">
        <div className="max-w-[415px] sticky top-32">
            <div className="prodct-wrapper flex flex-col gap-4 mb-6">
              {
                isCartItemsLoading ? <ProductSkeleton/> : (
                  persistCartItems.map((item:any) => {
                    return (
                      <MiniOrderItem
                      key={item.id}
                      prodImage={item.laptop.image[0]}
                      title={item.laptop.title}
                      price={item.laptop.pricing.discountedPrice}
                      quantity={item.quantity}
                    />
                    )
                  })
                )
              }
            </div>
          <CouponInfo  />
          <div className="flex flex-col gap-3 py-5 border-b border-bordercolor">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                Subtotal
              </span>
              <p className="text-sm text-dark font-semibold">{`₹${formatNumber(totalPrice)}`}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                Shipping
              </span>
              <span className="text-xs font-normal text-gray-600">
                Calculated at next step
              </span> 
            </div>
          </div>
          <div className="flex justify-between items-center py-5 flex-wrap lg:gap-0 gap-3">
            <div className="flex flex-col gap-0">
              <span className="font-semibold text-gray-700 text-base">Total</span>
              {/* <p className="text-xs text-gray-600 font-normal">
                {`Including ₹${taxes} in taxes`}
              </p> */}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 font-normal">INR</span>
              <h3 className="text-2xl font-semibold text-dark">{`₹${formatNumber(totalPrice)}`}</h3>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OrderDetails;
