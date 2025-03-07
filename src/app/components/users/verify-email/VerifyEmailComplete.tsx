"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const VerifyEmailComplete = () => {
    const searchParams = useSearchParams();
    const token =  searchParams.get("token");
    console.log("my dad",token);
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
        }
    }

    useEffect(() => {
       handleEmailVerification()
    },[])
  return (
  <div className="container-sm flex min-h-[70vh] items-center justify-center">
       <div className='text-center'>
        {
        message ? <h3 className="text-lg font-semibold text-primary text-center">{message}</h3> : <h4 className='text-lg font-medium text-primary text-center' >Loading...</h4>
       }
       <Link href="/auth/login" className='py-2.5 px-3.5 bg-secondary font-medium block rounded-md text-white my-3' >Back to SignIn</Link>
    </div>
  </div>
  )
}

export default VerifyEmailComplete
