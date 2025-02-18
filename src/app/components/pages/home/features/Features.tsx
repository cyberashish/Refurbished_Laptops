import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import {v4 as uuidv4} from "uuid";

const Features = () => {
    const FeatureItems = [
        {
            id: uuidv4(),
            icon: "lucide:smile",
            title: "15000 +",
            subtitle: "PRODUCTS SOLD"
        },
        {
            id: uuidv4(),
            icon: "ph:truck",
            title: "20000 +",
            subtitle: "PINCODES DELIVERED"
        },
        {
            id: uuidv4(),
            icon: "ion:earth-outline",
            title: "28523660 Kg",
            subtitle: "CO2 REDUCED"
        },
        {
            id: uuidv4(),
            icon: "fluent:chat-24-regular",
            title: "4.6",
            subtitle: "GOOGLE RATING (2.3K Reviews)"
        },
    ]
  return (
    <div>
      <div className="container-sm py-6">
         <div className="flex items-center flex-wrap justify-between xl:gap-0 gap-6">
            {
                FeatureItems.map((item) => {
                    return (
                        <div key={item.id} className="flex items-center gap-3 px-8 lg:first:border-s-0 lg:border-s border-s-none border-border" >
                        <div className="flex items-center justify-center h-12 w-12 rounded-circle border rounded-full border-primary">
                        <Icon icon={item.icon} className='text-4xl shrink-0 text-primary' />
                        </div>
                        <div className="flex flex-col">
                            {item.title !== "4.6" ? <h2 className="text-2xl font-semibold">{item.title}</h2> : <div className='flex items-center gap-1' >
                             <h2 className="text-2xl font-semibold">{item.title}</h2> <div className="flex items-center">
                                {
                                    [1,2,3,4,5].map((_item,index) => {
                                        return (<Icon key={index} icon="noto:star" className='text-base' />)
                                    })
                                }
                             </div>
                                </div>}
                            <p className="text-xs">{item.subtitle}</p>
                        </div>
                      </div>
                    )
                })
            }
         </div>
      </div>
    </div>
  )
}

export default Features
