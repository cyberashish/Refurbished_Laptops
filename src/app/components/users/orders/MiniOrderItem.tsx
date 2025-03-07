import React from 'react'
import Image from 'next/image';
import { formatNumber } from '@/app/utils';

const MiniOrderItem = ({prodImage,title,price,quantity}:any) => {
  return (
    <div className="flex justify-between items-center flex-wrap">
    <div className="flex gap-4 items-center flex-wrap">
      <div className="img-wrapper w-16 h-16 bg-white rounded-md  relative">
        <Image src={prodImage} className="max-w-full w-full h-full rounded-md" alt="product" width={100} height={100} style={{width:"100%" , height:"auto"}} />
        <div className="absolute -top-2.5 -end-2 w-5 h-5 flex justify-center items-center rounded-full bg-gray-500 text-white text-xs font-medium">
          {quantity}
        </div>
      </div>
       <h3 className="text-grayemphasis text-sm font-semibold max-w-60 truncate" >{title}</h3>
    </div>
    <h3 className="text-grayemphasis text-sm font-semibold" >{`₹${formatNumber(Number((price.replaceAll(",","")))*quantity)}`}</h3>
  </div>
  )
}

export default MiniOrderItem
