"use client"
import FinalOrderDetails from "../offline/FInalOrderDetails"
import { useContext, useEffect, useState } from "react"
import PaymentDetails from "./PaymentDetails"
import { UserContext } from "@/app/context/users/UserContext"


const OnlinePaymentDetails = ({sessionId}:{sessionId:string}) => {

  const {setUserSessionId} = useContext(UserContext);

  useEffect(() =>{
    if(sessionId){
      setUserSessionId(sessionId);
    }
  },[sessionId])

  return (
    <div className="w-full flex lg:flex-nowrap flex-wrap">
     <PaymentDetails/>
     <FinalOrderDetails/>
  </div>
  )
}

export default OnlinePaymentDetails
