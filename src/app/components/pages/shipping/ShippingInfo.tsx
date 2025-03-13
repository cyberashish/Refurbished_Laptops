import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import logo from "@/assets/images/logos/logo.png";
import AllUserShippingAddresses from '../../users/address/AllUserShippingAddresses';
import AddAddressDialog from '../../users/address/AddAdressDialog';
import { Icon } from '@iconify/react/dist/iconify.js';
import { UserContext } from '@/app/context/users/UserContext';


const ShippingInfo = () => {
  const {userShippingAddress} = useContext(UserContext);
  return (
    <div className="lg:w-7/12 w-full bg-white lg:pe-[56px] pe-6 lg:!px-16 px-6 pt-14">
    <Link href="/" ><Image alt="logo" src={logo} className="max-w-full mx-auto"  width={200} height={200}/></Link>
    <h5 className="text-xl font-semibold text-primary text-center mt-1">
     Manage Your Addresses
    </h5>
    <div className="w-full mt-14">
      <h4 className=" text-xl font-semibold my-8 mb-5">
        Shipping Address
      </h4>
      {/* Address Blocks */}
      <AllUserShippingAddresses/>
      {/* Add new address */}
      <AddAddressDialog/>
      {
        userShippingAddress.length > 0 ? (
          <div className="flex justify-between items-center my-6 flex-wrap lg:gap-0 gap-4">
                  <Link href="/products/cart" className="flex items-center group">
                    <Icon
                      icon="prime:chevron-left"
                      className="text-muted text-xl shrink-0 group-hover:text-secondary" 
                    />
                    <p className="text-muted group-hover:text-secondary">Return to cart</p>
                  </Link>
          <Link href="/checkout/payment" >
          <button type='submit' className="bg-secondary hover:bg-secondary/90 text-[15px] font-semibold py-3.5 px-7 rounded-md text-white">
                    Continue to shipping
                  </button></Link>
      </div>
        ) : null
      }
    </div>

  </div>   
  )
}

export default ShippingInfo


