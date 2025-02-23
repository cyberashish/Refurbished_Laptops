"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { Product } from "../../home/refurbished-laptops/ProductCard";
import { NewProductSkeleton } from "../skeleton/ProductSkeleton";


const ProductSliderDetail = ({productId}:{productId:string}) => {


    const [product , setProduct] = useState<Product>();

   const handleScroll = async () => {
    try{
      const response = await fetch(`/api/products/${productId}`);
      const result = await response.json();
      setProduct(result);
    } catch(error){
      console.log("Failed to fetch product data",error);
    }
   };

   useEffect(() => {
     handleScroll();
   })



   if(product){
    
    const  actualPriceValue = product.pricing.actualPrice;
    const discountedPrice = (product.discountPercentage/100)*(+actualPriceValue) || 3000;

    const LaptopFeatures = [
      {
        id: uuidv4(),
        type: "RAM",
        amount: product.specifications.ram.capacity,
      },
  
      {
        id: uuidv4(),
        type: "Brand Color",
        amount: product.brandColor,
      },
      {
        id: uuidv4(),
        type: "SSD Capacity",
        amount: product.specifications.storage.ssdCapacity,
      },
      {
        id: uuidv4(),
        type: "Display Size(In Inches)",
        amount: product.specifications.display.sizeInInches,
      },
      {
        id: uuidv4(),
        type: "GPU Model",
        amount: product.specifications.gpu.model,
      },
      
  ]


    return (
      <div className="pt-8">
         <h4 className="text-xl font-bold">{product.title}</h4>
         <span className="py-1.5 px-4 bg-secondary/10 font-bold rounded-full text-xs text-secondary my-2 inline-block">{`${product.discountPercentage}% Upto ${discountedPrice} Off`}</span>
         <div className="flex items-center gap-2 mb-2.5">
          <div className="flex items-center gap-0.5">
              <span className="text-sm font-medium text-secondary leading-none relative top-[1px]">5</span>
              <Icon icon="material-symbols:star-rounded" className="text-lg text-secondary" />
          </div>
          <p className="text-[13px] font-medium text-secondary">(1 Rating)</p>
         </div>
          <div className="flex items-center gap-12 pb-1 border-b border-border">
              <div className="flex flex-col gap-0">
                  <h2 className="text-2xl font-semibold text-dark">{`₹${product.pricing.discountedPrice}`}</h2>
                  <span className="text-xs font-semibold text-bodytext">(Incl. all Taxes)</span>
              </div>
              <div className="text-sm font-semibold text-dark px-1.5 py-1 border rounded-md border-border relative before:absolute before:w-6 before:h-[1px] before:top-1/2 before:-translate-y-1/2 before:bg-border before:-start-6 after:absolute after:w-6 after:h-[1px] after:top-1/2 after:-translate-y-1/2 after:-end-6 after:bg-border">OR</div>
              <div className="flex flex-col gap-0">
                  <p className="text-lg font-semibold text-dark">₹2,636/mo*</p>
                  <span className="text-xs font-semibold text-secondary underline cursor-pointer hover:text-secondary/80">EMI Options</span>
              </div>
          </div>
          <div className="flex items-center gap-3 py-3">
          <p className="text-sm font-semibold line-through" >{`MRP: ₹${product.pricing.actualPrice}`}</p>
          <p className="text-dark font-semibold text-sm">{`Save ₹${discountedPrice}`}</p>
          <p className="text-dark font-semibold text-sm">{`${product.discountPercentage}% Off`}</p>
          </div>
          <div className="flex flex-col gap-4">
              {
                  LaptopFeatures.map((item) => {
                      return (
                          <div key={item.id} className="flex flex-col gap-1.5">
                          <h4 className="text-[13px] font-semibold text-dark">{item.type}</h4>
                          <div className="px-3 py-1 border border-secondary font-medium rounded-md bg-secondary text-white w-fit text-[13px]">{item.amount}</div>
                          </div>
                      )
                  })
              }
          </div>
          <h3 className="text-base font-semibold text-dark mt-4">Super Savings (2 OFFERS)</h3>
          <hr className="border border-dark my-1" />
           <div className="grid grid-cols-12 gap-6">
            <div className="border border-border rounded-md lg:col-span-5 col-span-12 mt-3">
              <div className="flex items-center px- py-1 border-b border-border">
                <Image src={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1639137723/Croma%20Assets/CMS/Bank%20Offer%20Logo/icici_sposdz.png"} alt="bank" width={30} height={30} className="rounded-full" />
                <p className="text-xs font-semibold text-dark">ICICI Bank</p>
              </div>
               <div className="p-3">
               <p className=" text-xs text-muted font-medium">
              10% Upto Rs 3000 instant discount on ICICI Bank Credit Card with cart value above Rs 10,000/-post clicking...
              </p>
              <span className="underline font-semibold text-xs mt-2 inline-block cursor-pointer hover:text-primary text-dark">View more</span>
               </div>
            </div>
            <div className="border border-border rounded-md lg:col-span-5 col-span-12 mt-3">
              <div className="flex items-center px- py-1 border-b border-border">
                <Image src={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1639137723/Croma%20Assets/CMS/Bank%20Offer%20Logo/icici_sposdz.png"} alt="bank" width={30} height={30} className="rounded-full" />
                <p className="text-xs font-semibold text-dark">ICICI Bank</p>
              </div>
               <div className="p-3">
               <p className=" text-xs text-muted font-medium">
               Instant discount of 10% up to Rs 3500 on ICICI Bank Credit Card EMI for cart values above Rs 15,000/-.  The discounted....
              </p>
              <span className="underline font-semibold text-xs mt-2 inline-block cursor-pointer hover:text-primary text-dark">View more</span>
               </div>
            </div>
           </div>
          <div className="px-2 py-3 bg-gray-200 flex gap-1 my-3.5 rounded-md">
            <Icon icon="mdi:location" className="text-lg text-dark" />
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-dark">Delivery at: <span className="text-secondary hover:text-secondary/80 cursor-pointer font-medium">Rajkot, 815301</span> </p>
              <p className="text-[11px] font-medium leading-none">Will be delivered by 24 February 2025.</p>
            </div>
          </div>
          <div className="py-4 px-6 border-2 border-border rounded-md">
            <h4 className="text-[15px] font-semibold mb-2">Key Features</h4>
             <ul className="list-outside list-disc px-3 marker:text-dark text-muted text-sm font-medium">
               <li >{`Display: ${product.specifications.display.sizeInCms} cms (${product.specifications.display.sizeInInches} inches), ${product.specifications.display.additionalSpecifications}`}</li>
               <li >{`Memory: ${product.specifications.ram.capacity} ${product.specifications.ram.type} RAM, ${product.specifications.storage.ssdCapacity} SSD ROM`}</li>
               <li >{`Processor: ${product.specifications.processor.brand} ${product.specifications.processor.type} ${product.specifications.processor.generation}`}</li>
               <li >{`OS: ${product.specifications.os.type} ${product.specifications.os.name}`}</li>
               <li >{`Graphics: ${product.specifications.gpu.processorType} ${product.specifications.gpu.brand}`}</li>
               <li >Included Software: MS Office Home & Student 2021</li>
               <li >Narrow Border Display, Portable Laptop</li>
               <li >Warranty: 1 year Onsite</li>
             </ul>

  
          </div>
      </div>
    )
   }else{
    return <NewProductSkeleton/>
   }
}

export default ProductSliderDetail
