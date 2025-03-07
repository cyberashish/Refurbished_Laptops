
import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { formatTimestampToDate } from "@/app/utils";



const OrderItem = ({order}:any) => {
  return (
    <div className=" border border-border bg-white rounded-md shadow lg:flex-nowrap flex-wrap lg:pb-0 pb-6" >
      <div className="flex items-center lg:flex-nowrap flex-wrap justify-between px-5 py-3 lg:gap-0 gap-4 bg-gray-200">
          <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
          <div className="flex flex-col gap-0">
            <h3 className="text-[13px] font-semibold text-muted">ORDER PLACED</h3>
            <p className="text-[13px] font-medium text-muted">{`${formatTimestampToDate(order?.createdAt)}`}</p>
         </div>
         <div className="flex flex-col gap-0">
            <h3 className="text-[13px] font-semibold text-muted">Total</h3>
            <p className="text-[13px] font-medium text-muted">{`₹${order.totalAmount}`}</p>
         </div>
         <div className="flex flex-col gap-0">
            <h3 className="text-[13px] font-semibold text-muted">Ship to</h3>
            <p className="text-[13px] font-medium text-primary">{`${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`}</p>
         </div>
          </div>
         <div className="flex flex-col gap-0">
            <h3 className="text-sm font-semibold text-muted">{`OrderId ${order.id}`}</h3>
            <Link href={`/users/order/detail?order=${order.id}`} className="text-[13px] font-medium text-primary hover:text-primary/90">View Order Details</Link>
         </div>
      </div>
        <div className="flex items-center lg:gap-4 gap-0 w-full lg:flex-nowrap flex-wrap px-4">
        <div className="lg:w-2/12 w-full"  >
        <Image src={order.items[0].laptop.image[0]} alt="product_image" width={100} height={100} style={{width:"100%" , height:"auto"}} unoptimized />
        <div className="w-8 h-8 bg-secondary absolute top-2 start-5 text-hite flex items-center rounded-full text-white">9</div>
        </div>
          <div className="flex flex-col lg:w-10/12 w-full">
            <h3 className="text-lg font-semibold leading-none text-yellow-500">{order.status}</h3>
              <div className="my-1 mb-3">
              <h3 className="text-sm font-medium text-dark">{`${order.items[0].laptop.title}`}</h3>
              </div>
            <div className="flex items-center gap-2.5">
                <Link href={`/users/order/detail?order=${order.id}`} >
                <Button className="px-3.5 py-1 text-sm border bg-transparent border-primary text-primary hover:bg-primary hover:text-white" >View details</Button></Link>
                <Button className="px-3.5 py-1 text-sm border bg-secondary border-secondary text-white hover:bg-secondary/90 hover:text-white" >Write product experience</Button>
            </div>
          </div>
       </div>
    </div>
  )
}

export default OrderItem