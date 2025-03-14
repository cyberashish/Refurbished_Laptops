import { Button } from "@/app/components/ui/button"
import NewProductSlider from "./NewProductSlider"
import Link from "next/link"



const DailyRefurbishedLaptops = () => {
  return (
    <div className="max-w-7xl mx-auto py-8" >
      <div className="flex flex-col gap-6 ">
           <div className="lg:px-0 px-6">
         <div className=" flex justify-center">
        <span className="text-sm w-fit relative text-secondary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-secondary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-secondary font-semibold">
          Refurbished
          </span>
        </div>
        <h3 className="text-[28px] font-semibold text-dark text-center">Refurbished Laptops</h3>
           </div>
           <NewProductSlider/>
           
           <Link href="/products/all" className="w-fit block mx-auto" >
           <Button variant="primary" className=" font-semibold px-6" >View All</Button>
           </Link>
      </div>
    </div>
  )
}

export default DailyRefurbishedLaptops
