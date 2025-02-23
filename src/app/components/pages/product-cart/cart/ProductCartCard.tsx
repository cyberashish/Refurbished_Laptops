import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"
import { Button } from "../../../ui/button"


const ProductCartCard = () => {
  return (
    <div className="flex items-center justify-between gap-10 p-4 bg-white rounded-md shadow lg:flex-nowrap flex-wrap" >
       <div className="flex items-center lg:gap-4 gap-0 lg:w-10/12 w-full lg:flex-nowrap flex-wrap">
        <div className="lg:w-3/12 w-full"  >
        <Image src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858615/Croma%20Assets/Computers%20Peripherals/Laptop/Images/306647_0_cdu0nd.png?tr=w-400" alt="product_image" width={100} height={100} style={{width:"100%" , height:"auto"}} unoptimized />
        </div>
          <div className="flex flex-col gap-3 lg:w-9/12 w-full">
            <h3 className="text-lg font-semibold text-dark">Dell Latitude 5420 | Intel i7-11th Gen | 14&quot; FHD Touchscreen | Win 11</h3>
            <div className="flex items-center gap-0.5">
                <Icon icon="noto:star" className="text-lg" />
                <Icon icon="noto:star" className="text-lg" />
                <Icon icon="noto:star" className="text-lg" />
                <Icon icon="noto:star" className="text-lg" />
                <Icon icon="noto:star" className="text-lg" />
            </div>
            <p className="text-sm text-muted">Standard Delivery by 24 February 2025 | Free</p>
            <div className="flex items-center gap-2.5">
                <Button className="px-3.5 py-1.5 border bg-transparent border-primary text-primary hover:bg-primary hover:text-white" >Move to Wishlist</Button>
                <Button className="px-3.5 py-1.5 border bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white" >Remove</Button>
            </div>
          </div>
       </div>
       <div className="lg:w-2/12 w-full lg:text-end text-start" >
        <h2 className="text-[22px] font-bold">₹55,990.00</h2>
         <p className="text-xs text-muted my-0.5 font-medium">(Incl. all Taxes)</p>
        <hr className="border border-border my-2" />
        <p className="text-sm text-dark font-medium line-through">MRP ₹65,089.00</p>
         <p className="text-[11px] font-medium" >(Save ₹9,099.00)</p>
         <hr className="border border-border my-2" />
         <h3 className="text-lg font-bold">₹2636/mo*</h3>
         <p className="text-secondary hover:text-seconday/80 text-xs hover:underline cursor-pointer">EMI Options</p>
       </div>
    </div>
  )
}

export default ProductCartCard
