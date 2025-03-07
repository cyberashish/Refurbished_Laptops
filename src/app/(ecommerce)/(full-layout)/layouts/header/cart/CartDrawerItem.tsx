"use client"

import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { formatNumber } from '@/app/utils';
import { productCartType } from '@/app/components/pages/product-cart/cart/ProductCartCard';
import { ProductContext } from '@/app/context/products/ProductContext';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/app/components/ui/dialog";
import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@/app/components/ui/button';
import { Loader2 } from 'lucide-react';


const CartDrawerItem = ({  image, title, pricing, cartItemId, quantity}:productCartType) => {
  
    const {removeCartItem } = useContext(ProductContext);
    const [isOpen , setIsOpen] = useState(false);
    const [isLoading , setIsLoading] = useState(false);

    return (
    <div className="flex justify-between items-center">
    <div className="flex gap-4 items-center">
      <div className="img-wrapper w-16 h-16 bg-white rounded-md  relative">
        <Image src={image[0]} className="max-w-full w-full h-full rounded-md" alt="product" width={100} height={100} style={{width:"100%" , height:"auto"}} />
        <div className="absolute -top-2.5 -end-2 w-5 h-5 flex justify-center items-center rounded-full bg-gray-500 text-white text-xs font-medium">
          {quantity}
        </div>
      </div>
       <div className="flex flex-col gap-2">
       <h3 className="text-grayemphasis text-sm font-semibold max-w-60 truncate" >{title}</h3>
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
       <h3 className="text-foreground leading-none line-through text-[13px] font-medium max-w-60 truncate" >{`₹${formatNumber(Number(pricing.actualPrice.replaceAll(",","")))}`}</h3>
       <h3 className="text-foreground leading-none text-[13px] font-medium max-w-60 truncate" >{`₹${formatNumber(Number(pricing.discountedPrice.replaceAll(",","")))}`}</h3>
       </div>
         <button>
         <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                  <div className='relative' onClick={() => setIsOpen(true)}>
                    <Icon icon="tabler:trash" className='text-lg text-red-500 hover:text-red-600' />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-sm" >
                  <DialogHeader>
                     <Icon icon="cuida:alert-outline" className="text-6xl mb-5 text-red-500 mx-auto" />
                    <DialogTitle className="text-center leading-normal" >Are you absolutely sure want to delete this item?</DialogTitle>
                    <DialogDescription asChild>
                      <div className="flex items-center justify-center gap-2 pt-3">
                      <Button onClick={ async () => {
                        setIsLoading(true)
                       await removeCartItem(cartItemId);
                       setIsOpen(false);
                       
                      }} disabled={isLoading} className="px-3.5 py-1.5  bg-red-500  text-white hover:bg-red-600 hover:text-white" >
                      <Loader2 className={`animate-spin ${isLoading ? "block" : "hidden"} text-sm`}  />
                       Remove
                      </Button>
                      <DialogClose asChild>
                      <Button className="px-3.5 py-1.5 border bg-transparent border-primary text-primary hover:bg-primary hover:text-white" >
                       Cancel
                      </Button>
                      </DialogClose>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
        
         </button>
        </div>
       </div>
    </div>
     <div className="flex flex-col gap-1">
     {/* <h3 className="text-grayemphasis text-sm font-semibold" >{`₹${formatNumber(Number((pricing.pricing.replaceAll(",","")))*quantity)}`}</h3>
     <h3 className="text-grayemphasis text-sm font-semibold" >{`₹${formatNumber(Number((pricing.pricing.replaceAll(",","")))*quantity)}`}</h3> */}
     </div>
  </div>
  )
}

export default CartDrawerItem
