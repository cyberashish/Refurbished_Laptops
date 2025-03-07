
import React, { useContext, useEffect, useState } from 'react' 
import ProductCartCard from './ProductCartCard';
import { CartItemsSkeleton } from '../../product-detail/skeleton/ProductSkeleton';
import { ProductContext } from '@/app/context/products/ProductContext';


const LoggedInCart = () => {

    const [isCartItemLoading , setIsCartItemLoading] = useState(true);
    const {persistCartItems , isCartItemsLoading} = useContext(ProductContext);
    
    useEffect(() => {
      if(!isCartItemsLoading){
        setIsCartItemLoading(false);
      }
    },[persistCartItems])

  return (
    <>
       {
        isCartItemLoading ? <div className='flex flex-col gap-2' >
            <CartItemsSkeleton/>
        </div> : (
            persistCartItems.length === 0 ? <h3 className='text-2xl font-semibold text-primary text-center' >Not cart Items Found</h3> :  persistCartItems?.map((item:any , index) => {
              return <div key={index}>
                <ProductCartCard laptopId={item.laptop.id} cartItemId={item.id} quantity={item.quantity} title={item.laptop.title} image={item.laptop.image}  pricing={item.laptop.pricing} discountPercentage={item.laptop.discountPercentage}  />
              </div>
          })
        )
       }
    </>
  )
}

export default LoggedInCart
