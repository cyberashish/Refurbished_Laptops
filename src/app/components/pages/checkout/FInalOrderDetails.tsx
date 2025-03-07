"use client"

import MiniOrderItem from "../../users/orders/MiniOrderItem";
import { useContext, useEffect } from "react";
import { ProductContext } from "@/app/context/products/ProductContext";
import { ProductSkeleton } from "../product-detail/skeleton/ProductSkeleton";
import { formatNumber } from "@/app/utils";


const FinalOrderDetails = () => {
  const {persistCartItems,isCartItemsLoading,totalPrice, setTotalPrice,deliveryCharge,activeCouponCode} = useContext(ProductContext);
  const taxvalue = 161.35;

  
  useEffect(() => {
      if(totalPrice === 0){
        setTotalPrice(Number(localStorage.getItem('totalPrice')));
      }
  },[totalPrice])

  
  return (
      <div className="lg:w-5/12 w-full border-s border-border lg:ps-[56px] ps-6 lg:px-0 px-6 lg:pt-14 pt-12">
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
          <div className="flex flex-col gap-3 py-5 border-b border-bordercolor">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                Subtotal
              </span>
              <p className="text-sm text-dark font-semibold">{`₹${formatNumber(totalPrice - taxvalue)}`}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                Shipping Charges
              </span>
              <span className="text-xs font-normal text-gray-600">
                {`₹${deliveryCharge}`}
              </span> 
            </div>
            {activeCouponCode === "ENTER COUPON" ? null : (
              <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                Applied Coupon
              </span>
              <span className="text-xs bg-primary/10 text-primary rounded-md py-1 px-3 font-semibold">
                {`${activeCouponCode}`}
              </span> 
            </div>
            )}
          </div>
          <div className="flex justify-between items-center py-5 flex-wrap">
            <div className="flex flex-col gap-0">
              <span className="font-semibold text-gray-700 text-base">Total</span>
              <p className="text-xs text-gray-600 font-normal">
                {`Including ₹${taxvalue} in taxes`}
              </p>
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

export default FinalOrderDetails;

