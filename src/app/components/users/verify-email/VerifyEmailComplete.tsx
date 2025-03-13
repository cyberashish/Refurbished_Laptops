"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const VerifyEmailComplete = ({token}:{token:string}) => {

    const [message , setMessage] = useState<string>("");

    const handleEmailVerification = async () => {
       const response =  await fetch("/api/users/verify-email" , {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({verificationToken:token})
        });
        const result = await response.json();
        if(result.success){
            setMessage(result.msg)
        }else{
          setMessage(result.msg)
        }
    }

    useEffect(() => {
       handleEmailVerification()
    },[])
  return (
  <div className=" flex min-h-[70vh] bg-[url(https://cdn.pixabay.com/photo/2020/07/22/12/28/laptop-5428881_1280.jpg)] bg-cover bg-no-repeat items-center justify-center">
       <div className='text-center container-sm'>
         <div className="w-fit p-3 backdrop-blur-md rounded-full">
         {
        message ? message === "Email verification is failed" ? <h3 className="text-lg font-semibold text-error text-center">{message}</h3> : <h3 className="text-lg font-semibold text-primary text-center">{message}</h3> : <h4 className='text-lg font-medium text-primary text-center' >Loading...</h4>
       }
       {message === "Email verification is failed" ? <Link href="/" className='py-2.5 px-3.5 bg-secondary hover:bg-secondary/90 font-medium block rounded-md text-white my-3' >Back to Home</Link> : <Link href="/auth/login" className='py-2.5 px-3.5 bg-secondary hover:bg-secondary/90 font-medium block rounded-md text-white my-3' >Back to SignIn</Link>}
         </div>
    </div>
  </div>
  )
}

export default VerifyEmailComplete
