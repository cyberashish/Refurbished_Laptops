"use client"

import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { Loader2 } from "lucide-react";


const AuthForm = () => {

  interface formInfoType {
    email?: string,
    password?: string
  }

  const [formInfo , setFormInfo] = useState<formInfoType>();
  const router = useRouter();
  const [loading , setLoading] = useState(false);

  const handleForm = (event:any) => {
     setFormInfo({...formInfo , [event.target.name] : event.target.value})
  }
  
  const signInHandler = () => {
    signIn('google',{callbackUrl:'/'})
    }

    const handleCredentials = async () => {
      setLoading(true)
     const result = await signIn('credentials',{
         email: formInfo?.email,
         password: formInfo?.password,
         redirect: false
      });
      console.log(result);
      if(!result?.error){
        router.push("/")
      }
      else{
       setLoading(false);
       toast.error("User not found" , {
        position:"top-right"
       })
      }
    }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex w-full justify-center">
        <div className="lg:w-10/12 w-full">
          <h4 className="text-2xl font-semibold leading-none text-center">
            Welcome to RentoPc
          </h4>
          <p className="text-sm text-muted text-center">
            Your one shop for laptop needs
          </p>
          <div className="flex items-center gap-3 mt-8 justify-center flex-wrap">
            <button onClick={signInHandler} className="px-11 shadow py-2.5 border border-border rounded-full flex items-center justify-center gap-2 group hover:border-primary cursor-pointer transition-all lg:w-fit w-full" >
              <Icon icon="flat-color-icons:google" className="text-2xl" />
              <p className="text-base text-dark dark:text-white group-hover:text-primary">
                Google
              </p>
            </button>
          </div>
          <div className="relative">
          <hr className="my-8 border-border" />
           <p className="absolute top-1/2 start-1/2 bg-white -translate-y-1/2 -translate-x-1/2 px-2 text-base text-dark">or sign in with</p>
          </div>
          <form onSubmit={(e) => {
             e.preventDefault();
             handleCredentials();
          }} >
          <div className="max-w-full mb-4">
            <label
              htmlFor="input-label"
              className="block text-sm text-dark font-medium mb-1 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="input-label"
              name="email"
              required
              onChange={(e:any) => handleForm(e)}
              className="py-2.5 px-4 text-dark block w-full focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-offset-transparent focus-visible:ring-transparent focus-visible:shadow-none border-border rounded-lg text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="you@site.com"
            />
          </div>
          <div className="max-w-full">
            <label
              htmlFor="input-label-password"
              className="block text-sm text-dark font-medium mb-1 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              onChange={handleForm}
              id="input-label-password"
              className="py-2.5 text-dark px-4 block w-full border-border rounded-lg focus-visible:outline-none text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="✱✱✱✱✱✱"
            />
          </div>
          <div className="flex items-center justify-between my-4 flex-wrap">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hs-default-checkbox"
                checked
                readOnly
                className="styled-checkbox"
              />
              <label
                htmlFor="hs-default-checkbox"
                className="text-sm text-muted ms-1 cursor-pointer"
              >
                Remember this device
              </label>
            </div>

            <Link
               href="/"
              className="text-sm text-primary hover:text-primary/90"
            > 
              Forget password?
            </Link>
          </div>
           <Button type="submit" disabled={loading ? true : false}  className="bg-primary text-white hover:bg-primary/90 w-full mt-6 text-base h-fit py-2" >
           <Loader2 className={`animate-spin ${loading ? "block" : "hidden"}`}  />
            Login Now</Button>
            </form>
          <div className="mt-1.5 flex gap-2 items-center justify-center">
            <h5 className="text-base text-dark dark:text-white font-medium">
              New to RentoPc?
            </h5>
            <Link
              href="/auth/register"
              className="text-base text-primary font-medium hover:text-primary/90"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AuthForm;
