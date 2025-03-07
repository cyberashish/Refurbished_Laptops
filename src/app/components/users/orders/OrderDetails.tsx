"use client"
import OrderDetailItem from "./OrderDetailItem";
import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "@/app/context/users/UserContext";
import { formatNumber, formatTimestampToDate } from "@/app/utils";
import {  useSearchParams } from "next/navigation";
import { ProductSkeleton } from "../../pages/product-detail/skeleton/ProductSkeleton";

const OrderDetails = () => {

  const location = useSearchParams();

  let orderId = location.get("order");
  const {userOrders, userId,setUserOrders} = useContext(UserContext);
  const [currentOrder , setCurrentOrder] = useState<any>();
  const [isOrderItemLoading , setIsOrderItemLoading] = useState(true);

  const handleOrders = async () => {
    try{
       if(userId){
         const ordersResponse = await fetch("/api/users/order/products" , {
           method:"POST",
           headers:{'Content-Type':'application/json'},
           body: JSON.stringify({userId})
         });
         const ordersResult = await ordersResponse.json();
         setUserOrders(ordersResult.data);
         setIsOrderItemLoading(false)
       }else{
         console.log("Failed to fetch orders due to invalid user");
       }
    }catch(error){
     console.log("Failed to fetch Orders" , error);
    }
 }

 useEffect(() => {
   handleOrders();
 },[userId])

  useEffect(() => {
    if(userOrders){
      console.log(userOrders);
      const newOrder = userOrders.find((item) => item.id === orderId);
      console.log(newOrder,orderId)
      setCurrentOrder(newOrder);
    }
  },[userOrders])
  return ( 
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <p className="text-sm text-dark font-semibold">
              {`Order placed ${formatTimestampToDate(currentOrder?.createdAt)}`}
            </p>
            <p className="text-sm text-dark font-semibold">
              {`Order Id : ${currentOrder?.id}`}
            </p>
          </div>
          <h4 className="text-primary font-semibold text-lg">Invoice</h4>
        </div>
        <div className="border-2 border-border bg-white rounded-lg p-4">
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-4 col-span-12">
              <h3 className="font-semibold text-dark mb-1.5">
                Shipping Address
              </h3>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium">{`${currentOrder?.shippingAddress.firstName} ${currentOrder?.shippingAddress.lastName}`}</p>
                <p className="text-sm font-medium">{`${currentOrder?.shippingAddress.flat} , ${currentOrder?.shippingAddress.street}`}</p>
                <p className="text-sm font-medium">{`${currentOrder?.shippingAddress.city} , ${currentOrder?.shippingAddress.state}`}</p>
                <p className="text-sm font-medium">{`${currentOrder?.shippingAddress.country}`}</p>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <h3 className="font-semibold text-dark mb-1.5">
                Payment Methods
              </h3>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium">Pay on delivery</p>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <h3 className="font-semibold text-dark mb-1.5">Order Summary</h3>
              <div className="flex items-center gap-10 mb-0.5">
                <p className="text-sm font-medium">Item(s) Subtotal:</p>
                <p className="text-sm font-medium">{`₹${formatNumber((currentOrder?.totalAmount - 60))}`}</p>
              </div>
              <div className="flex items-center gap-[91px]">
                <p className="text-sm font-medium">Shipping:</p>
                <p className="text-sm font-medium">{currentOrder?.paymentMethod === "COD" ? `₹60`:'0'} </p>
              </div>
              <div className="flex items-center mt-5 gap-[75px]">
                <p className="text-sm text-dark font-semibold">Grand Total:</p>
                <p className="text-sm font-medium">{`₹${formatNumber((currentOrder?.totalAmount ))}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-6">
        {
          isOrderItemLoading ? <ProductSkeleton/> : currentOrder.items.length == 0 ? <h1 className="text-xl font-semibold text-dark my-6" >No Order Item Found</h1> : (
            currentOrder.items.map((order:any) => {
              return (
                <OrderDetailItem order={order} key={order.id} />
              )
            })
          )
        }
      </div>
    </>
  );
};

export default OrderDetails;
