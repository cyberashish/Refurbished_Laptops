import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const CouponCode = () => {
  return (
    <div className='flex items-center justify-between p-5 rounded-md bg-white mb-6 cursor-pointer'>
       <div className="flex items-center gap-3">
         <Icon icon="mdi:coupon-outline" className='text-dark text-3xl' />
         <h3 className="text-lg font-semibold">Apply Coupon</h3>
       </div>
       <Icon icon="fluent:chevron-right-28-filled" className='text-xl text-dark' />
    </div>
  )
}

export default CouponCode
