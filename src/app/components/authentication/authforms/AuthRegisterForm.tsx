import { Icon } from "@iconify/react";
import { Button } from "../../ui/button";
import { signIn } from "next-auth/react";
import {  useState } from "react";
import { useRouter } from "next/navigation";


const AuthRegisterForm = () => {


  const [formInfo , setFormInfo] = useState<any>();
  const router = useRouter();

  const handleForm = (e:any) => {
    console.log(e.target.value);
     setFormInfo({...formInfo ,[e.target.name]:e.target.value });
  }


  const handleSubmit = async () => {
    const response = await fetch("/api/products",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formInfo)
    });
    const result = await response.json();
 
    if (result.success) {
      // Automatically log in the user after successful signup
      const result = await signIn("credentials", {
        email:formInfo.email,
        password: formInfo.password,
        redirect: false, // Prevents redirect, so we can handle it manually
      });

      if (!result?.error) {
        router.push("/products/cart"); // Redirect user after login
      } else {
        console.error("Login failed", result.error);
      }
    } else {
      console.error("Signup failed", result.error);
    }
  }




  const signInHandler = () => {
    signIn('google',{callbackUrl:'/products/cart'})
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
            <div className="px-9 py-2.5 border border-border rounded-lg flex items-center justify-center gap-2 group hover:border-primary cursor-pointer transition-all lg:w-fit w-full" onClick={signInHandler} >
              <Icon icon="flat-color-icons:google" className="text-2xl" />
              <p className="text-base text-dark dark:text-white group-hover:text-primary">
                Google
              </p>
            </div>
          </div>
          <div className="relative">
          <hr className="my-8 border-border" />
           <p className="absolute top-1/2 start-1/2 bg-white -translate-y-1/2 -translate-x-1/2 px-2 text-base text-dark">or sign up with</p>
          </div>
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
              onChange={(event:any) => handleForm(event)}
              name="password"
              id="input-label-password"
              className="py-2.5 text-dark px-4 block w-full border-border rounded-lg focus-visible:outline-none text-sm focus:border-primary focus:ring-primary focus:ring-0 border focus:ring-offset-0"
              placeholder="Enter your password"
            />
          </div>

           <Button onClick={handleSubmit} className="bg-primary text-white hover:bg-primary/90 w-full mt-6 text-sm h-fit py-2" >Signup Now</Button>
          <div className="mt-1.5 flex gap-2 items-center justify-center">
            <h5 className="text-base text-dark dark:text-white font-medium">
              Already have an account?
            </h5>
            <button
              
              className="text-base text-primary font-medium hover:text-primary/90"
            >
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRegisterForm;
