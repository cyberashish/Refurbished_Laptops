import React, { useContext, useEffect, useState } from 'react';
import OrderItem from './OrderItem';
import { UserContext } from '@/app/context/users/UserContext';
import { ProductSkeleton } from '../../pages/product-detail/skeleton/ProductSkeleton';

const AllOrders = () => {

  const {userId , userOrders , setUserOrders} = useContext(UserContext);
 
  const [isUserOrdersLoading , setIsUserOrdersLoading] = useState(true);

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
          setIsUserOrdersLoading(false);
        }else{
          console.log("Failed to fetch orders due to invalid user");
          setIsUserOrdersLoading(false);
        }
     }catch(error){
      console.log("Failed to fetch Orders" , error);
      setIsUserOrdersLoading(false);
     }
  }

  useEffect(() => {
    handleOrders();
  },[userId])

  return (
    <div className='flex flex-col gap-6 mb-12' >
      {isUserOrdersLoading ? <ProductSkeleton/> : userOrders.length === 0 ? <h1 className='text-xl font-semibold text-dark text-center my-6' >No Orders found</h1> : (
        userOrders.map((order:any) => {
          return (
             <OrderItem order={order} key={order.id} />
          )
        })
      )}
    </div>
  )
}

export default AllOrders
