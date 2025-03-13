"use client"
import { Button } from "@/app/components/ui/button"
import FinalOrderDetails from "../offline/FInalOrderDetails"
import PaymentMode from "../offline/PaymentMode"
import { cashfree } from "@/app/components/payment_gateways/cashfree/Utils"
import { useState } from "react"
import PaymentDetails from "./PaymentDetails"


const OnlinePaymentDetails = () => {



  return (
    <div className="w-full flex lg:flex-nowrap flex-wrap">
     {/* <PaymentMode/> */}
     <PaymentDetails/>
     <FinalOrderDetails/>
     {/* <Button onClick={handlePayment} >Test Payment</Button>
     <Button onClick={() => handlePaisa(sessionId)} >Test Paisa</Button> */}
  </div>
  )
}

export default OnlinePaymentDetails
