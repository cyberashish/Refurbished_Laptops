"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const Testimonials = [
    {
      id: uuidv4(),
      img: "https://getpaisa.com/_next/image?url=%2Fimages1%2Ftestimonial%2Fimage-1.png&w=64&q=75",
      review:
        "Buying a refurbished laptop was never this easy! With just a few clicks, I got a high-quality device at a great price. The customer service was helpful, and the warranty gives peace of mind.",
      client: "Anuj Mehta",
      clientPosition: "HR Manager",
    },
    {
      id: uuidv4(),
      img: "https://getpaisa.com/_next/image?url=%2Fimages1%2Ftestimonial%2Fimage-2.png&w=64&q=75",
      review:
        "Buying a refurbished laptop was never this easy! With just a few clicks, I got a high-quality device at a great price. The customer service was helpful, and the warranty gives peace of mind.",
      client: "Rahul Sharma",
      clientPosition: "Graphics Designer",
    },
    {
      id: uuidv4(),
      img: "https://getpaisa.com/_next/image?url=%2Fimages1%2Ftestimonial%2Fimage-3.png&w=64&q=75",
      review:
        "Buying a refurbished laptop was never this easy! With just a few clicks, I got a high-quality device at a great price. The customer service was helpful, and the warranty gives peace of mind.",
      client: "Arjun Patel",
      clientPosition: "Business",
    },
    {
      id: uuidv4(),
      img: "https://getpaisa.com/_next/image?url=%2Fimages1%2Ftestimonial%2Fimage-1.png&w=64&q=75",
      review:
        "Buying a refurbished laptop was never this easy! With just a few clicks, I got a high-quality device at a great price. The customer service was helpful, and the warranty gives peace of mind.",
      client: "Anuj Mehta",
      clientPosition: "HR Manager",
    },
    {
      id: uuidv4(),
      img: "https://getpaisa.com/_next/image?url=%2Fimages1%2Ftestimonial%2Fimage-2.png&w=64&q=75",
      review:
        "Buying a refurbished laptop was never this easy! With just a few clicks, I got a high-quality device at a great price. The customer service was helpful, and the warranty gives peace of mind.",
      client: "Rahul Sharma",
      clientPosition: "Graphics Designer",
    },
  ];

  return (
    <>
      <div className="container-sm py-8 px-6">
        <div className="flex justify-center items-center">
          <span className="text-sm relative text-secondary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-secondary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-secondary font-medium">
            Testimonial
          </span>
        </div>
        <h2 className="text-[28px] mb-6 font-semibold text-dark text-center">
          Our Clients Say!!!
        </h2>
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          spaceBetween={50}
          grabCursor={true}
          slidesPerView={3}
          draggable={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper testimonial-swiper"
        >
          {Testimonials.map((item) => {
            return (
              <SwiperSlide className="rounded-2xl overflow-hidden shadow-lg" key={item.id} >
                <TestimonialCard
                  img={item.img}
                  review={item.review}
                  client={item.client}
                  clientPosition={item.clientPosition}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
