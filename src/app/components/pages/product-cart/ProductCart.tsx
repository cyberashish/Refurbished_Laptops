import React from 'react'
import ProductCartCard from './ProductCartCard'
import OrderSummary from './OrderSummary'
import CouponCode from './CouponCode'

const ProductCart = () => {
  return (
     <div className="flex w-full justify-between gap-6 lg:flex-nowrap flex-wrap">
      <div className="lg:w-9/12 w-full">
        <CouponCode/>
        <div className="flex flex-col gap-6">
        <ProductCartCard/>
       <ProductCartCard/>
       <ProductCartCard/>
       <ProductCartCard/>
        </div>
      </div>
      <div className="lg:w-3/12 w-full">
        <OrderSummary/>
      </div>
     </div>
  )
}

export default ProductCart
