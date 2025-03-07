
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '@/app/context/products/ProductContext';
import { CartItemsSkeleton } from '@/app/components/pages/product-detail/skeleton/ProductSkeleton';
import CartDrawerItem from '../CartDrawerItem';

const LoggedOutCart = () => {

    const [isCartItemLoading , setIsCartItemLoading] = useState(true);
    const {persistCartItems , setPersistCartItems} = useContext(ProductContext);
    const {allProducts} = useContext(ProductContext)

    const handleLocalStorage = async () => {
       const persistCartItems = localStorage.getItem("cart");
       console.log(persistCartItems);

       if(persistCartItems){
        const cartItems =  JSON.parse(persistCartItems);
        const reservedItem:any = [];
          allProducts.forEach((laptop:any) => {
             cartItems?.forEach((item:any) => {
              console.log("loggedout");
                if(laptop.id === item.productId){
                  reservedItem.push({...laptop,quantity:item.quantity})
                }
             })
        });
        setPersistCartItems(reservedItem);
        setIsCartItemLoading(false)
       }
      

    }
 
    useEffect(() => {
        handleLocalStorage();
    },[allProducts])

  return (
    <>
       {
        isCartItemLoading ? <div className='flex flex-col gap-2' >
            <CartItemsSkeleton/>
        </div> : (
            persistCartItems.length === 0 ? <h3 className='text-2xl font-semibold text-primary text-center' >Not cart Items Found</h3> :  persistCartItems?.map((item:any , index) => {
              return <div key={index}>
                <CartDrawerItem cartItemId={item.id} quantity={item.quantity} title={item.title} image={item.image}  pricing={item.pricing} discountPercentage={item.discountPercentage}  />
              </div>
          })
        )
       }
    </>
  )
}

export default LoggedOutCart
