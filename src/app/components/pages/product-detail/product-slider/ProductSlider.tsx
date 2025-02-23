"use client"

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { NextResponse } from "next/server";
import { Product } from "../../home/refurbished-laptops/ProductCard";
import BasicImageSkeleton from "../skeleton/BasicImageSkeleton";



const ProductSlider = ({productId}:{productId:string}) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  // Use useRef with the correct type
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);
  const [loading , setLoading] = useState<boolean>(true);
  const [product , setProduct] = useState<Product>()

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

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


  const settings = {

    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className="slider-container product-detail-slider sticky top-[130px] pt-8">

      <Slider asNavFor={nav2 as Slider} arrows={false} ref={sliderRef1}>
       {
         product && product?.carouselImages?.map((item,index) => {
          return (
            <div key={index} className="px-3 rounded-xl outline-0">
                  <div>
                    {loading ? <BasicImageSkeleton/> : null}
                  <Image src={item} alt="product_image" className="py-0 lg:px-28 px-0 bg-background rounded-md" width={100} unoptimized height={100} style={{width:"100%",height:"auto"}} onLoadingComplete={() => setLoading(false) }  />
                  </div>
          </div>
          )
        })
       }
      </Slider>


      <Slider
        asNavFor={nav1 as Slider}
        ref={sliderRef2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
        
        className="mt-4 small-slider lg:px-12 px-0"

      >
       {
        product && product?.carouselImages?.map((item,index) => {
          return (
            <div className="px-4" key={index}>
            <Image src={item} alt="product_image" className="p-4 border border-border rounded-xl overflow-hidden" width={100} unoptimized height={100} style={{width:"auto",height:"auto"}}  />
            </div>
          )
        })
       }
      </Slider>
    </div>
  );
};

export default ProductSlider;
