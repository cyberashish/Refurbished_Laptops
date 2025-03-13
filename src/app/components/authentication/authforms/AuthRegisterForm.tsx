"use client"

import { Icon } from "@iconify/react";
import { Button } from "../../ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import bcrypt from "bcryptjs";
import {v4 as uuidv4} from "uuid";
import { Loader2 } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";


const AuthRegisterForm = () => {


  const [formInfo , setFormInfo] = useState<any>();
  const [isEmailSent , setIsEmailSent] = useState<boolean>(false);
  const [loading , setLoading] = useState<boolean>(false);

  const handleForm = (e:any) => {
    console.log(e.target.value);
     setFormInfo({...formInfo ,[e.target.name]:e.target.value });
  }


  const handleSubmit = async () => {

    setLoading(true);
    const hashedPassword = await bcrypt.hash(formInfo.password,10);
    const verificationToken = uuidv4();
    const tokenExpiry = new Date(Date.now() + 15 * 60 * 1000).toDateString();
    const userData = {...formInfo , password:hashedPassword, verificationToken:verificationToken , verificationTokenExpiry:tokenExpiry};

    const response = await fetch("/api/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userData)
    });
    const user = await response.json();

    if(user.success){
      try{ 
         const emailResponse = await fetch("/api/send/email" , {
          method:"POST",
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({userEmail:formInfo.email , firstName:user.fullname , verificationToken:user.verificationToken})
         });
         const result = await emailResponse.json();
         console.log(result);
         setIsEmailSent(true);
         setTimeout(() => {setIsEmailSent(false)},4000)
      }catch(error){
        console.log('Failed to deliver email')
      }
      
    }else{
      toast.error(user.msg, {
        position: 'top-right',
      });
    }
    setLoading(false);
  }

  // const handleTestEmail = async () => {
  //    try{
  //       const emailResponse = await fetch("/api/send/email" , {
  //         method: 'POST',
  //         headers: {'Content-Type':'application/json'},
  //         body: JSON.stringify({userEmail:formInfo.email,firstName,verificationToken})
  //       });
  //       const result = await emailResponse.json();
  //       console.log(result);
  //    }catch(error){
  //     console.log("Error while delivering the email")
  //    }
  // }


  const signInHandler = () => {
    signIn('google',{callbackUrl:'/'})
    }
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {isEmailSent ? (<h5 className="border border-secondary p-2.5 text-sm text-secondary mx-6 rounded-md mb-4 relative z-50">
        An Email has been sent to your email address. Please click the link in the mail to continue
      </h5>) : null }
      <div className="flex w-full justify-center">
        <div className="lg:w-10/12 w-full">
          <h4 className="text-2xl font-semibold leading-none text-center" >
            Welcome to RentoPc
          </h4>
          <p className="text-sm text-muted text-center">
            Your one shop for laptop needs
          </p>
          <div className="flex items-center gap-3 mt-8 justify-center flex-wrap">
            <button className="px-11 shadow py-2.5 border border-border rounded-full flex items-center justify-center gap-2 group hover:border-primary cursor-pointer transition-all lg:w-fit w-full" onClick={signInHandler} >
              <Icon icon="flat-color-icons:google" className="text-xl" />
              <p className="text-base text-dark dark:text-white group-hover:text-primary">
                Google
              </p>
            </button>
          </div>
          <div className="relative">
          <hr className="my-8 border-border" />
           <p className="absolute top-1/2 start-1/2 bg-white -translate-y-1/2 -translate-x-1/2 px-2 text-base text-dark">or sign up with</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            // handleTestEmail();
          }}>
          <div className="max-w-full mb-4">
            <label
              htmlFor="input-label-username"
              className="block text-sm text-dark font-medium mb-1 dark:text-white"
            >
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              required
              id="input-label-username"
              onChange={(event:any) => handleForm(event)}
              className="py-2.5 px-4 text-dark block w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-offset-transparent focus-visible:ring-transparent focus-visible:shadow-none border-border rounded-lg text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="Rakkt Ranjan"
            />
          </div>
          <div className="max-w-full mb-4">
            <label
              htmlFor="input-label"
              className="block text-sm text-dark font-medium mb-1 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              required
              onChange={(event:any) => handleForm(event)}
              name="email"
              id="input-label"
              className="py-2.5 px-4 text-dark block w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-offset-transparent focus-visible:ring-transparent focus-visible:shadow-none border-border rounded-lg text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="you@site.com"
            />
          </div>
          <div className="max-w-full mb-4">
            <label
              htmlFor="input-label-password"
              className="block text-sm text-dark font-medium mb-1 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              required
              onChange={(event:any) => handleForm(event)}
              name="password"
              id="input-label-password"
              className="py-2.5 text-dark px-4 block w-full border-border rounded-lg focus-visible:outline-none text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="✱✱✱✱✱✱"
            />
          </div>
          <Button type="submit" disabled={loading ? true : false} className="bg-primary text-white hover:bg-primary/90 w-full mt-6 text-sm h-fit py-2.5" >
           <Loader2 className={`animate-spin ${loading ? "block" : "hidden"}`}  />
            Signup Now
     
            </Button>
          </form>


          <div className="mt-1.5 flex gap-2 items-center justify-center">
            <h5 className="text-base text-dark dark:text-white font-medium">
              Already have an account?
            </h5>
            <Link href="/auth/login" className="text-base text-primary font-medium hover:text-primary/90" >
              SignIn
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthRegisterForm;
