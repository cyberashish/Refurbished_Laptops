"use client"

import React, { useEffect, useState } from 'react'
import ProductSlider from './ProductSlider'
import ProductSliderDetail from './ProductSliderDetail'
import Wishlist from '../wishlist/Wishlist'
import CartButton from '../micro-components/CartButton'
import { Product } from '../../home/refurbished-laptops/ProductCard'
import { NextResponse } from 'next/server'
import { ProductSkeleton } from '../skeleton/ProductSkeleton'
import ProductFaq from '../faq/ProductFaq'



const ProductDetailContainer = ({productId}:{productId:string}) => {

    const [product , setProduct] = useState<Product>()

    const handleProduct = async () => {
        try{
          const response = await fetch(`/api/products/${productId}`);
          const result = await response.json();
          setProduct(result);
        }catch(error){
          NextResponse.json(error)
        }
      }
    
      useEffect(() => {
          handleProduct();
      })
  return (
    <div className="max-w-7xl mx-auto ">
    <div className="flex w-full lg:gap-16 gap-4 lg:flex-nowrap flex-wrap">
    <div className="lg:w-6/12 w-full">
      {
        !product ? <ProductSkeleton/> : (
            <ProductSlider productId={productId} />
        )
      }
   </div>
   <div className="lg:w-6/12 w-full lg:px-0 px-6">
     <ProductSliderDetail productId={productId} />
   </div>
    </div>
    <ProductFaq productId={productId} />
    {/* <ProductFaqDetail productId={productId} /> */}
    <Wishlist/>
   <CartButton/>
 </div>
  )
}

export default ProductDetailContainer
