import React, { useEffect, useState } from 'react'

const VerifyEmail = ({token}:{token:string}) => {

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
    <div>
             {
        message ? <h3 className="text-lg font-semibold text-primary text-center">{message}</h3> : <h4>Loading...</h4>
       }
    </div>
  )
}

export default VerifyEmail
