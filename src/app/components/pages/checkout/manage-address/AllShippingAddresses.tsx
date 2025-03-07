"use client"

import React, { useContext } from 'react'
import AddressBlock from './AddressBlock'
import { UserContext } from '@/app/context/users/UserContext';
import AddressBlockSkeleton from '../../product-detail/skeleton/AddressBlockSkeleton';

const AllShippingAddresses = () => {
    const {userShippingAddress , isUserShippingAddressLoading} = useContext(UserContext);
  return (
    <div className='flex flex-col gap-2' >
      {
        isUserShippingAddressLoading ? <AddressBlockSkeleton/> : 
            userShippingAddress.length === 0 ? <h2 className='text-xl font-semibold' >No address found</h2> : userShippingAddress.map((item:any) => {
                return (
                    <AddressBlock addressInfo={{...item}} key={item.id} />
                )
            })
        
      }
    </div>
  )
}

export default AllShippingAddresses
