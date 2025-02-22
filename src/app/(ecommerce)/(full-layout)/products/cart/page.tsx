import ProductCart from '@/app/components/pages/product-cart/ProductCart'
import React from 'react'

const page = () => {
  return (
    <div className='w-full container-sm p-6'>
       <h4 className="text-[22px] font-semibold text-dark pt-4 lg:mb-7 mb-2">Your Cart</h4>
       <ProductCart/>
    </div>
  )
}

export default page
