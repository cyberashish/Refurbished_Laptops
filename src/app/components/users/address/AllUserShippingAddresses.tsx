"use client"

import React, { useContext } from 'react'
import AddressBlock from './AddressBlock'
import AddressBlockSkeleton from '../../pages/product-detail/skeleton/AddressBlockSkeleton';
import { UserContext } from '@/app/context/users/UserContext';

const AllUserShippingAddresses = () => {
    const {userShippingAddress , isUserShippingAddressLoading} = useContext(UserContext);
  return (
    <>
      {
        isUserShippingAddressLoading ? <AddressBlockSkeleton/> : 
            userShippingAddress.length === 0 ? null : userShippingAddress.map((item:any) => {
                return (
                    <AddressBlock addressInfo={{...item}} key={item.id} />
                )
            })
        
      }
    </>
  )
}

export default AllUserShippingAddresses
