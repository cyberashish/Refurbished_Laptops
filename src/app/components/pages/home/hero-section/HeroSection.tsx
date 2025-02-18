"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images


const SliderImages = [
    {
      key:"slider1",
      img: "https://newjaisa.com/cdn/shop/files/indians_most_trusted_banner-01_3.jpg?v=1739617730&width=3840",
    },
    {
      key:"slider2",
      img:"https://newjaisa.com/cdn/shop/files/revised_clearance_sale_banner-01_1.jpg?v=1739617730&width=3840",
    },
    {
      key:"slider3",
      img:"https://newjaisa.com/cdn/shop/files/air-1.jpg?v=1739355565&width=3840",
    },
    {
      key:"slider4",
      img:"https://newjaisa.com/cdn/shop/files/pro-2020.jpg?v=1739355565&width=3840",
    },
    {
      key:"slider5",
      img:"https://newjaisa.com/cdn/shop/files/1_929fbbbc-d45e-4363-b0be-bcedd30a5f95.jpg?v=1725969607&width=3840",
    },
    {
      key:"slider6",
      img:"https://newjaisa.com/cdn/shop/files/WhatsApp_Image_2024-09-11_at_6.14.16_PM.jpg?v=1726059419&width=3840",
    },
]


// import required modules
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='lg:mt-[113px] mt-[50px]' >
      <Swiper
        spaceBetween={30}
        style={{
          "--swiper-pagination-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-color": "#ffffff60",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }as React.CSSProperties}
        effect={'fade'}
        navigation={false}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper lg:h-auto h-[calc(100vh_-_150px)]"
      >
        {
          SliderImages.map((item)=>{
            return (
              <SwiperSlide key={item.key}>
              <Image src={item.img} alt="banner_img" className='!lg:object-contain !object-cover' unoptimized priority width={100} height={100} style={{width:"100%" , height:"100%"}} />
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
