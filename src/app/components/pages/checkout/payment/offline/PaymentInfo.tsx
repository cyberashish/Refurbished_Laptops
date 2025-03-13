"use client"
 
import { ProductContext } from '@/app/context/products/ProductContext'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import OrderPlacedDialog from '../../order/OrderPlacedDialog'

const PaymentInfo = () => {
    const { setDeliveryCharge , setTotalPrice , totalPrice , deliveryCharge , setPaymentMethod} = useContext(ProductContext);
    const handleDeliveryCharges = (charge:number) => {
        if( charge === 0){
            setTotalPrice(totalPrice - deliveryCharge);
            setDeliveryCharge(0)
        }else{
          setTotalPrice(totalPrice + charge);
          setDeliveryCharge(charge)
        }
    }

  useEffect(() => {
      localStorage.setItem("totalPrice" , `${totalPrice}`);
  },[totalPrice]);

  useEffect(() => {
     if(!deliveryCharge){
      setPaymentMethod("Online");
     }else{
      setPaymentMethod("COD");
     }
  },[deliveryCharge])

  return (
    <div className="pt-11">
    <h3 className="text-lg text-dark font-semibold mb-6">
      Payment Mode
    </h3>
    <ul className="w-full flex flex-col">
      <li className="inline-flex items-center gap-x-2 p-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
       <div className="flex justify-between items-center w-full">
        <div className="relative flex items-start w-full">
          <div className="flex items-center h-5">
            <input
              id="hs-list-group-item-radio-1"
              name="hs-list-group-item-radio"
              type="radio"
              value={0}
              onChange={(e) => {
                handleDeliveryCharges(Number(e.target.value));
              }}
              className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown "
              checked={deliveryCharge == 0 ? true : false}
            />
          </div>
          <label
            htmlFor="hs-list-group-item-radio-1"
            className="ms-3 block w-full font-normal text-sm text-dark"
          >
            Free Shipping (Pay Online)
          </label>
        </div>
        <span className="text-sm font-semibold text-dark" >Free</span>
       </div>
      </li>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white">
       <div className="flex justify-between items-center w-full">
       <div className="relative flex items-start w-full">
          <div className="flex items-center h-5">
            <input
              id="hs-list-group-item-radio-3"
              name="hs-list-group-item-radio"
              type="radio"
              value={60}
              checked={deliveryCharge !== 0 ? true : false}
              onChange={(e) => {
                handleDeliveryCharges(Number(e.target.value));
              }}
              className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown"
            />
          </div>
          <label
            htmlFor="hs-list-group-item-radio-3"
            className="ms-3 gap-0 w-full flex flex-col text-sm text-gray-600 dark:text-neutral-500"
          >
            <span>Cash on Delivery</span>
             <p className="text-xs text-gray-600 font-normal" >Save upto Rs.60 on Prepaid orders</p>
          </label>
        </div>
        <span className="text-sm font-semibold text-dark" >₹60.00</span>
       </div>
      </li>
    </ul>
    <div className="flex justify-between items-center mt-6 flex-wrap lg:gap-0 gap-3">
            <Link href="/" className="flex items-center hover:text-secondary group">
              <Icon
                icon="prime:chevron-left"
                className="text-lightbrown text-xl shrink-0"
              />
              <p className="text-lightbrown group-hover:text-secondary">Return to cart</p>
            </Link>
            {
              deliveryCharge === 0 ? <Link href="/checkout/payment/online/init" >
              <button  className="bg-secondary h-fit hover:bg-secondary/60 text-[15px] font-semibold py-3.5 px-7 flex items-center gap-1 rounded-md text-white">
                Complete Purchase
              </button></Link> :  <OrderPlacedDialog/>
            }
           
          </div>
          <div className="py-3 pb-10 border-t mt-14 border-bordercolor">
            <p className="text-xs text-gray-600 hover:text-lightbrown">
              <Link href="/">Subscription policy</Link>
            </p>
          </div>
  </div>
  )
}

export default PaymentInfo
