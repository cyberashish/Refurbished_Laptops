"use client"

import React, { useContext, useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useSession } from 'next-auth/react'
import { ProductContext } from '@/app/context/products/ProductContext'
import { formatNumber } from '@/app/utils'
import Link from 'next/link'
import ContinuePurchaseAuthDIalog from './ContinuePurchaseAuthDIalog'

const OrderSummary = () => {
  const {persistCartItems} = useContext(ProductContext);
  const {data:session} = useSession();
  console.log(persistCartItems,"mine");
  let accumulatedOriginalPrice = 0;
  let accumulatedDiscountedPrice = 0;
  const [originalPrice , setOriginalPrice] = useState("");
  const [discountedPrice , setDiscountedPrice] = useState("");

  if(!session){
    persistCartItems?.forEach((item:any) => {
      accumulatedOriginalPrice = (accumulatedOriginalPrice + Number(item?.pricing?.actualPrice?.replaceAll(",","")))*item.quantity;
      accumulatedDiscountedPrice = (accumulatedDiscountedPrice + Number(item?.pricing?.discountedPrice?.replaceAll(",","")))*item.quantity;
 });



  }else{
    persistCartItems?.forEach((item:any) => {
         accumulatedOriginalPrice = (accumulatedOriginalPrice + (Number(item?.laptop?.pricing?.actualPrice?.replaceAll(",","")))*item.quantity);
         console.log(accumulatedDiscountedPrice , item.laptop.pricing?.discountedPrice)
         accumulatedDiscountedPrice = accumulatedDiscountedPrice + (Number(item?.laptop?.pricing?.discountedPrice?.replaceAll(",","")))*item.quantity;
    });
  }

  useEffect(() => {
    setOriginalPrice(formatNumber(accumulatedOriginalPrice));
    setDiscountedPrice(formatNumber(accumulatedDiscountedPrice));
  },[persistCartItems])

  return (
    <div className='flex flex-col gap-6 p-6 rounded-md bg-white sticky top-36'>
       <h4 className="text-xl text-dark font-semibold">{`Order Summary ( ${persistCartItems?.length} items )`}</h4>
       <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-dark">Original Price</p>
            <p className="text-sm text-dark">{`₹${originalPrice}`}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-dark">Discount</p>
            <p className="text-sm text-secondary">{`₹${formatNumber(Number(originalPrice.replaceAll(",","")) - Number(discountedPrice.replaceAll(",","")))}`}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-dark">Total</p>
            <p className="text-sm text-dark">{`₹${discountedPrice}`}</p>
          </div>
       </div>
       {session ? <Link href="/checkout/select-address" className='py-2.5 block font-medium text-sm text-center px-3 rounded-md bg-primary hover:bg-primary/80 text-white h-fit' >Continue Purchase</Link> : <ContinuePurchaseAuthDIalog/> }
       <div className="flex items-center gap-1.5">
         <div className="h-5 w-5 bg-seconday text-white bg-pink-500 flex items-center justify-center rounded-full">
             <Icon icon="solar:tag-price-bold" className='text-sm' />
          </div>
          <p className="text-xs text-dark">1 Bank offers available during Payment</p>
       </div>
    </div>
  )
}

export default OrderSummary
