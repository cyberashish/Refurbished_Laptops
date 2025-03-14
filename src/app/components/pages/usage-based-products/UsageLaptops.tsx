"use client"

import { ProductContext } from "@/app/context/products/ProductContext"
import { useContext, useEffect, useState } from "react"
import ProductCard, { Product } from "../home/refurbished-laptops/ProductCard";
import { useRouter } from "next/navigation";
import { toSentenceCase } from "@/app/utils";


const UsageLaptops = ({slug}:{slug:string}) => {
   const {allProducts} = useContext(ProductContext);
   const router = useRouter();

   const [usageBasedProducts , setUsageBasedProducts] = useState(allProducts);
  
   const handleOnItemClick = (titleSlug:string) => {
    router.push(`/products/${titleSlug}`);
   }

   useEffect(() => {
        if(allProducts){
          if(slug === "basic"){
            const filteredProducts = allProducts.filter((laptop:Product) => {
                let currentPrice = Number(laptop.pricing.discountedPrice.replaceAll("," , ""));
                return currentPrice <= 40000
            });
            setUsageBasedProducts(filteredProducts)
          }else if(slug==="gaming"){
            const filteredProducts = allProducts.filter((laptop:Product) => {
                let currentPrice = Number(laptop.pricing.discountedPrice.replaceAll("," , ""));
                return currentPrice <= 200000 && currentPrice >= 90000
            });
            setUsageBasedProducts(filteredProducts)
          }else{
            const filteredProducts = allProducts.filter((laptop:Product) => {
                let currentPrice = Number(laptop.pricing.discountedPrice.replaceAll("," , ""));
                return currentPrice <= 90000 && currentPrice >= 40000
            });
            setUsageBasedProducts(filteredProducts)
          }
        }
   },[allProducts])

  return (
    <div className="max-w-7xl mx-auto py-8" >
      <div className="flex flex-col gap-6 ">
           <div className="lg:px-0 px-6">
         <div className=" flex justify-center">
        <span className="text-sm w-fit relative text-secondary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-secondary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-secondary font-semibold">
          Laptops
          </span>
        </div>
        <h3 className="text-[28px] font-semibold text-dark text-center">{`Our All ${toSentenceCase(slug)} Laptops`}</h3>
           </div>
           <div className="grid grid-cols-12 gap-6">
                 {
                 usageBasedProducts && usageBasedProducts.map((laptop) => {
                    return (
                      <div key={laptop.id} className="lg:col-span-4 col-span-12">
                      <ProductCard item={laptop} onClickCapture={(event:any)=>{
                        handleOnItemClick(laptop?.titleSlug)
                      }} />
                      </div>
                    )
                  })
                 }
            </div>
      </div>
    </div>
  )
}

export default UsageLaptops
