

import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import payment from "@/assets/images/payments/payment.png"
import upi from "@/assets/images/payments/upi.svg"
import mastercard from "@/assets/images/payments/mastercard.svg"
import visa from "@/assets/images/payments/visa.svg"
import rupay from "@/assets/images/payments/rupay.png"
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import { cashfree } from '@/app/components/payment_gateways/cashfree/Utils';
import { ProductContext } from '@/app/context/products/ProductContext';
import { useSession } from 'next-auth/react';

const PaymentMethods = () => {
    const [paymentGateway , setPaymentGateway] = useState("cashfree");

    const [sessionId , setSessionId] = useState("");
    const [orderId , setOrderId] = useState("");
    const [customerName , setCustomerName] = useState("");
    const [customerEmail , setCustomerEmail] = useState("");

    const {totalPrice} = useContext(ProductContext);
    const {data:session} = useSession();
  
  
    const handlePayment = async () => {
      console.log(process.env.NEXT_PUBLIC_NEXTAUTH_URL);
        try{
          if(customerName && customerEmail){
            const paymentResponse = await fetch("/api/payment-gateway/cash-free/create-order",{
              method:"POST",
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({customerName,customerEmail,amount:totalPrice})
            });
            const paymentResult = await paymentResponse.json();
            console.log(paymentResult);
            setSessionId(paymentResult.payment_session_id);
            setOrderId(paymentResult.order_id);
          }else{
            console.log("Customer name and Customer email is required")
          }
        }catch(error){
          console.log(error);
        }
    }
  
    const handleOrderStatus = (sessionId:string)=>{
      let checkoutOptions = {
          paymentSessionId: sessionId,
          returnUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/payment-gateway/cash-free/check-status/${orderId}`,
          
      }   
      cashfree.checkout(checkoutOptions).then(function(result:any){
          if(result.error){
              alert(result.error.message);
          }
          if(result.redirect){
              console.log("Redirection")
              console.log(result);
          }
      });
  }

  useEffect(() => {
    if(session){
     if(session.user?.email && session.user?.name){
      setCustomerEmail(session.user.email);
      setCustomerName(session.user.name);
     }
    }
  },[session]);

  useEffect(() => {
     if(sessionId){
      handleOrderStatus(sessionId);
     }
  },[sessionId])

  return (
    <div className="pt-11">
    <h3 className="text-lg text-dark font-semibold mb-6">
      Payment Methods
    </h3>
    <ul className="w-full flex flex-col">
      <li className="inline-flex items-center gap-x-2 p-4 text-sm font-medium bg-white border border-bordercolor text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-white">
       <div className="flex justify-between items-center w-full">
        <div className="relative w-full justify-between flex items-start">
          <div className="flex items-center h-5">
            <input
              id="hs-list-group-item-radio-1"
              name="hs-list-group-item-radio"
              type="radio"
              value="cashfree"
              onChange={(e)=>{
                  console.log(e.target.value);
                  setPaymentGateway(e.target.value);
              }}
              className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown "
              defaultChecked={true}
            />
          </div>
          <label
            htmlFor="hs-list-group-item-radio-1"
            className="ms-3 block w-full font-semibold text-sm text-dark"
          >
            Cashfree Payment
            <p className="font-semibold" >(UPI,Cards,Wallets,NetBanking)</p>
          </label>
          <div className="flex ml-auto items-center self-center gap-1 min-w-60">
              <Image src={upi} alt='upi' width={45} className="shrink-0 inline-block" />
              <Image src={visa} alt='upi' width={30} className="shrink-0 inline-block" />
              <Image src={mastercard} alt='upi' width={20} className="shrink-0 inline-block" />
              <Image src={rupay} alt='upi' width={45} className="shrink-0 inline-block" />
              <span className="text-xs font-normal text-gray-600 whitespace-nowrap" >and more...</span>
          </div>
        </div>
       </div>
      </li>
      <div className={`wrapper py-6 w-full bg-[#fafafa] flex justify-center items-center border-s border-b border-e border-border rounded-md`}>
         <div>
         <Image src={payment} alt="image" className="w-fit block mx-auto" />
         <p className="text-sm font-normal text-dark px-28 text-center" >{
          `After clicking “Complete order”, you will be redirected to ${paymentGateway} Payment (UPI,Cards,Wallets,NetBanking) to complete your purchase securely.`
         }</p>
         </div>
         
      </div>
      {/* <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg border-bordercolor">
       <div className="flex justify-between items-center w-full">
       <div className="relative flex items-start w-full">
          <div className="flex items-center h-5">
            <input
              id="hs-list-group-item-radio-3"
              name="hs-list-group-item-radio"
              type="radio"
              value="razorpay"
              onChange={(e)=>{
                  console.log(e.target.value);
                  setPaymentGateway(e.target.value);
              }}
              className="border-gray-200 w-[18px] h-[18px] rounded-full disabled:opacity-50 focus:ring-lightbrown ring-lightbrown text-lightbrown checked:bg-lightbrown checked:border-lightbrown"
            />
          </div>
          <label
            htmlFor="hs-list-group-item-radio-3"
            className="ms-3 block w-full font-semibold text-sm text-dark max-w-[250px]"
          >
               Razorpay Secure (UPI, Cards, Wallets, NetBanking)
          </label>
          <div className="flex ml-auto items-center self-center gap-1">
              <Image src={upi} alt='upi' width={45} className="shrink-0 inline-block" />
              <Image src={visa} alt='upi' width={30} className="shrink-0 inline-block" />
              <Image src={mastercard} alt='upi' width={20} className="shrink-0 inline-block" />
              <Image src={rupay} alt='upi' width={45} className="shrink-0 inline-block" />
              <span className="text-xs font-normal text-gray-600" >and more...</span>
          </div>
        </div>
       </div>
      </li> */}
    </ul>
    <div className="flex justify-between items-center mt-6">
            <div className="flex items-center">
              <Icon
                icon="prime:chevron-left"
                className="text-lightbrown text-xl shrink-0"
              />
              <Link href="/products/cart" className="hover:text-secondary">Return to cart</Link>
            </div>
            <button onClick={handlePayment} className="bg-secondary hover:bg-secondary/90 text-[15px] font-semibold py-3.5 px-7 rounded-md text-white">
              Complete Order
            </button>
          </div>
          <div className="py-3 pb-10 border-t mt-14 border-bordercolor">
            <p className="text-xs text-gray-600 hover:text-lightbrown">
              <Link href="/">Subscription policy</Link>
            </p>
          </div>
  </div>
  )
}

export default PaymentMethods
