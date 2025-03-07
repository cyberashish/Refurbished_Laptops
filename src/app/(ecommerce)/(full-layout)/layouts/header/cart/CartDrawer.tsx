
import { ProductSkeleton } from "@/app/components/pages/product-detail/skeleton/ProductSkeleton";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/app/components/ui/sheet"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useSession } from "next-auth/react";
import LoggedInCart from "./auth-based-cart/LoggedInCart";
import LoggedOutCart from "./auth-based-cart/LoggedOutCart";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "@/app/context/products/ProductContext";

const CartDrawer = () => {
    const { data: session, status } = useSession();
    const {persistCartItems} = useContext(ProductContext);
  return (
<Sheet>
  <SheetTrigger asChild>
  <div className="after:w-10 after:h-10 after:rounded-full relative after:absolute cursor-pointer hover:after:bg-primary/10 after:top-1/2 after:-translate-y-1/2 after:start-1/2 after:-translate-x-1/2 group" >
      <Icon icon="solar:cart-4-outline" className="text-2xl group-hover:text-primary  rounded-full text-muted " />
      {persistCartItems.length ? (<div className="w-[18px] h-[18px] bg-secondary text-white flex items-center justify-center text-xs rounded-full absolute top-0">{
        persistCartItems.length
      }</div>): null}
      </div>
  </SheetTrigger>
  <SheetContent autoFocus={false} >
    <SheetHeader>
      <SheetTitle>Your cart items</SheetTitle>
      <SimpleBar className="h-[calc(100vh_-_120px)]" >
     {
          status === "loading" ? <div className="container-sm"> <ProductSkeleton/> </div> : (
                  <div className="flex w-full justify-between gap-6 lg:flex-nowrap flex-wrap pt-6">
                <div className="w-full">
                  <div className="flex flex-col gap-6">
                 {session?.user?.email ? <LoggedInCart /> : <LoggedOutCart/>}
                  </div>
                </div>
               </div>
          )
     }
     </SimpleBar>
     <SheetClose asChild >
     <Link href="/products/cart" className="block w-full" >
     <Button className="bg-transparent w-full p-2 hover:bg-primary hover:text-white h-fit border-primary rounded-md text-primary text-base font-semibold border" >View Cart Items</Button></Link>
     </SheetClose>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default CartDrawer
