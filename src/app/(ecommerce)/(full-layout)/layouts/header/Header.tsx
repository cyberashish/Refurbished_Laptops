"use client"
import Image from "next/image";
import logo from "@/assets/images/logos/logo.png";
import { Input } from "@/app/components/ui/input";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Menu from "./menu/Menu";
import Link from "next/link";
import ProfileDropdown from "./profile/ProfileDropdown";
import CartDrawer from "./cart/CartDrawer";




const Header = () => {
  const [search, setSearch] = useState<string>("");
  const [scroll , setScroll] = useState("sticky");

 



  useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY>20){
           setScroll("fixed")
        }else{
          setScroll("sticky")
        }
      }
      window.addEventListener("scroll",handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  
  return (
    <div className={`top-0 z-10 bg-white w-full fixed ${scroll === "fixed" ? "shadow-lg " : null}`} >
   <div className="flex items-center justify-between lg:py-3 py-4 px-6">
    <Link href="/" className="lg:order-1 order-2 block" > <Image src={logo} alt="image" className="w-auto h-10" /></Link>
     <div className="relative parent border border-border rounded-full lg:block hidden lg:order-2 order-2">
      <Icon icon="meteor-icons:search" className="text-xl text-muted absolute start-3.5 top-1/2 -translate-y-1/2" />
     <Input type="email" value={search} onChange={(e) => setSearch(e.target.value) } placeholder="What are you looking for" className="child lg:min-w-[560px] min-w-auto  px-12 rounded-full h-11 border-none focus-visible:ring-2 shadow-none placeholder:text-[13px]" />
     <Icon icon="solar:trash-bin-trash-linear" onClick={() => setSearch("")} className="text-xl absolute end-3.5 top-1/2 -translate-y-1/2 text-error hover:text-erroremphasis cursor-pointer" />
     </div>
     <Icon icon="material-symbols:menu-rounded" className="text-2xl lg:hidden block  order-1"  />
     <div className="flex items-center gap-4  order-3">
     <CartDrawer/>

      <ProfileDropdown/>
      {/* <div onClick={() => router.push("/products/cart")} className="after:w-10 after:h-10 after:rounded-full relative after:absolute cursor-pointer hover:after:bg-primary/10 after:top-1/2 after:-translate-y-1/2 after:start-1/2 after:-translate-x-1/2 group" >
      <Icon icon="ep:location" className="text-2xl group-hover:text-primary cursor-pointer rounded-full text-muted" />
      </div> */}
     </div>
   </div>
   <Menu/>
   </div>
  )
}

export default Header
