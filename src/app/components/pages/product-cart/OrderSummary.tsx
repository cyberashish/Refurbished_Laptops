import React from 'react'
import { Button } from '../../ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'

const OrderSummary = () => {
  return (
    <div className='flex flex-col gap-6 p-6 rounded-md bg-white sticky top-36'>
       <h4 className="text-xl text-dark font-semibold">Order Summary ( 2 items )</h4>
       <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-dark">Original Price</p>
            <p className="text-sm text-dark">₹111,980.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-dark">Total</p>
            <p className="text-sm text-dark">₹111,980.00</p>
          </div>
       </div>
       <Button className='py-1.5 px-3 rounded-md bg-primary hover:bg-primary/80 text-white' >Checkout</Button>
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
