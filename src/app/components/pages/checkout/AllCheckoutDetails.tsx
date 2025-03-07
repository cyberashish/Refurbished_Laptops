import React from 'react'
import PaymentMode from './PaymentMode'
import FinalOrderDetails from './FInalOrderDetails'

const AllCheckoutDetails = () => {
  return (
    <div className="w-full flex lg:flex-nowrap flex-wrap">
     <PaymentMode/>
     <FinalOrderDetails/>
  </div>
  )
}

export default AllCheckoutDetails
