"use client"
import auth_bg from "@/assets/images/backgrounds/login.svg"
import AuthForm from "../authforms/AuthForm";
import logo from "@/assets/images/logos/logo.png";
import Image from "next/image";
import Link from "next/link";

const AuthLogin = () => {
  return (
    <div className="w-full flex justify-center h-screen">
      <Link href="/" className=" w-full fixed top-0 block backdrop-blur-sm py-4 px-6" > <Image src={logo} alt="image" className="w-auto h-10" /></Link>
      <div className="lg:w-8/12 h-full bg-body lg:block hidden">
        <div className="flex w-full justify-center items-center h-full">
          <div className="lg:w-6/12 -full" >
            <Image src={auth_bg} alt="auth_background" width={100} height={100} style={{width:"100%" , height:"auto"}} />
          </div>
        </div>
      </div>
      <div className="lg:w-4/12 md:p-0 p-6 md:w-6/12 w-full h-full bg-white md:mt-0 mt-0">
        <AuthForm/>
      </div>
    </div>
  );
};

export default AuthLogin;
