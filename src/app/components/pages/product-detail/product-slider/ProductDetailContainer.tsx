"use client"

import React, { useEffect, useState } from 'react'
import ProductSliderDetail from './ProductSliderDetail'
import Wishlist from '../wishlist/Wishlist'
import { Product } from '../../home/refurbished-laptops/ProductCard'
import ProductFaq from '../faq/ProductFaq'
import NewProductSlider from './NewProductSlider'



const ProductDetailContainer = ({productSlug}:{productSlug:string}) => {

    const [_product , setProduct] = useState<Product>();


    const handleProduct = async () => {
        try{
          const response = await fetch(`/api/products/${productSlug}`);
          const result = await response.json();
          console.log(result);
          setProduct(result);
        }catch(error){
          console.log(error)
        }
      }
    
      useEffect(() => {
          handleProduct();
      },[])

  return (
    <div className="max-w-7xl mx-auto ">
    <div className="flex w-full lg:gap-16 gap-4 lg:flex-nowrap flex-wrap">
    <div className="lg:w-6/12 w-full">
    <NewProductSlider productSlug={productSlug}  />
   </div>
   <div className="lg:w-6/12 w-full lg:px-0 px-6">
     <ProductSliderDetail productSlug={productSlug} />
   </div>
    </div>
    <ProductFaq productSlug={productSlug} />
    <Wishlist/>
   {/* <CartButton/> */}
 </div>
  )
}

export default ProductDetailContainer
