"use client"

import { Button } from "../../../ui/button"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


const CartButton = () => {

     const [isScroll , setScroll] = useState(false);

     const handleScroll = () => {
        if(window.scrollY>0){
          setScroll(true)
        }else{
            setScroll(false)
        }
      }

    useEffect(() => {
      window.addEventListener("scroll" , handleScroll);
      return () => {
       window.removeEventListener("scroll" , handleScroll)
      }
    },[])

   const router = useRouter();

  return (
    <div className={`fixed bottom-0 start-0 bg-white w-full shadow-md py-2.5 px-5 ${isScroll?" lg:hidden block" : "hidden"}`} >
        <div className="md:flex items-center lg:justify-between justify-center block">
            {/* <div className="lg:flex hidden items-center gap-2">
                <Image src={'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858615/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_0_cdu0nd.png?tr=w-640'} alt="my-image" width={50} height={50} className="rounded-xl" />
                <div className="flex flex-col gap-0">
                <h5 className="text-sm font-semibold text-dark">Dell Latitude 5420 | Intel i7-11th Gen | 14&quot; FHD Touchscreen | Win 11</h5>
                <h5 className="text-sm font-semibold text-dark">₹55,990.00</h5>
                </div>
            </div> */}
            <div className="flex justify-center items-center gap-2.5">
                <Button className="bg-primary hover:bg-primary/80 lg:w-fit w-full" >Buy Now</Button>
                <Button onClick={() => router.push("/products/cart")} className="bg-transparent border lg:w-fit w-full border-secondary text-secondary hover:bg-secondary hover:text-white" >Add to Cart</Button>
            </div>
        </div>
    </div>
  )
}

export default CartButton
