"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect} from 'react';
import logo from "@/assets/images/logos/logo.png";
import ShippingAddress from './manage-address/ShippingAddress';
import PaymentInfo from './PaymentInfo';
import { UserContext } from '@/app/context/users/UserContext';


const PaymentMode = () => {

  const {activeShippingAddress , setActiveShippingAddres , userShippingAddress} = useContext(UserContext);

  useEffect(() => {
     if(!activeShippingAddress.street && userShippingAddress.length){
       setActiveShippingAddres(userShippingAddress[0]);
     }
  },[userShippingAddress])

  return (
    <div className="lg:w-7/12 w-full bg-white lg:pe-[56px] pe-6 lg:!px-16 px-6 lg:pt-14 pt-8">
    <Link href="/" ><Image alt="logo" src={logo} className="max-w-full mx-auto"  width={200} height={200}/></Link>
    <h5 className="text-xl font-semibold text-primary text-center mt-1">
     Manage Your Addresses
    </h5>
    <div className="w-full mt-14">
       <ShippingAddress/>
        <PaymentInfo/>
    </div>

  </div>   
  )
}

export default PaymentMode

