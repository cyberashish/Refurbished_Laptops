
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../ui/button"

const OrderDetailItem = ({order}:any) => {
  return (
    <>
    <div className="flex bg-white rounded-md p-3 shadow-md items-center lg:gap-4 gap-0 w-full lg:flex-nowrap flex-wrap px-4">
        <div className="lg:w-2/12 w-full"  >
        <Image src={order.laptop.image[0]} alt="product_image" width={100} height={100} style={{width:"100%" , height:"auto"}} unoptimized />
        <div className="w-8 h-8 bg-secondary absolute top-2 start-5 flex items-center rounded-full text-white">9</div>
        </div>
          <div className="flex flex-col lg:w-10/12 w-full">
              <div className="my-1 mb-3">
              <h3 className="text-lg font-semibold text-dark">{order.laptop.title}</h3>
              <h5 className="text-xs font-medium">Qty: {`${order.quantity}`}</h5>
              <p className="text-sm font-medium">{`₹${order.price}`}</p>
              </div>
            <div className="flex items-center gap-2.5">
                <Link href={`/products/${order.laptop.titleSlug}`} >
                <Button className="px-3.5 py-1 text-sm border bg-transparent border-primary text-primary hover:bg-primary hover:text-white" >View Product</Button></Link>
                <Button className="px-3.5 py-1 text-sm border bg-primary border-primary text-white hover:bg-primary/90 hover:text-white" >Write product experience</Button>
            </div>
          </div>
       </div>
    </>
  )
}

export default OrderDetailItem