"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"

interface ClientTestimonial {
  img:string,
  client: string,
  clientPosition: string,
  review: string
}

const TestimonialCard = ({img,client,clientPosition , review,}:ClientTestimonial) => {
  return (
    <>
      <div className=" p-8 gap-2 shadow-lg overflow-hidden">
          <div className="flex items-center gap-0.5 mb-4">
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
            <Icon icon="noto:star" className="text-lg" />
          </div>
          <p className="text-sm leading-5 font-medium text-bodytext  text-start">{review}</p>
          <div className="flex gap-4 items-center mt-5">
             <Image src={img} alt="user_img" className="rounded-full" width={50} height={50}  />
             <div className="flex flex-col gap-0 text-start">
                <h5 className="font-bold text-sm leading-1">{client}</h5>
                <p className="text-xs text-muted">{clientPosition}</p>
             </div>
          </div>
      </div>
    </>
  )
}

export default TestimonialCard
