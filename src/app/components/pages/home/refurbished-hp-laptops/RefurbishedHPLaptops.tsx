import { Button } from "@/app/components/ui/button"
import NewProductSlider from "../refurbished-laptops/NewProductSlider"
import RefurbishedHPSlider from "./RefurbishedHPSlider"
import Link from "next/link"



const RefurbishedHPLaptops = () => {
  return (
    <div className="max-w-7xl mx-auto py-8" >
      <div className="flex flex-col gap-6 ">
        <div>
        <div className=" flex justify-center">
        <span className="text-sm w-fit relative text-secondary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-secondary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-secondary font-semibold">
          Laptops
          </span>
        </div>
         <h3 className="text-[28px] font-semibold text-dark text-center">Refurbished HP Laptops</h3>
        </div>
           {/* <ProductSlider/> */}
           <RefurbishedHPSlider/>
           <Link href="/products/all" className="block w-fit mx-auto" >
           <Button variant="primary" className="fit-content mx-auto font-semibold px-6" >View All</Button>
           </Link>
      </div>
    </div>
  )
}

export default RefurbishedHPLaptops
