"use client";

import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard, { Product } from "./ProductCard";
import { useRouter } from "next/navigation";

function ProductSlider() {


  const [laptops, setLaptops] = useState<Product[]>();

  const handleProduct = async () => {
    try{
       const response = await fetch("http://localhost:3000/api/products");
       const result = await response.json();
       setLaptops(result);
    }catch(error){
      console.log("Failed to fetch details",error);
    }
  }

  useEffect(() => {
    handleProduct();
  },[])

  const [dragging , setDragging] = useState(false);

 
  const handleBeforeChange = useCallback(()=>{
       console.log("HandleBeforeChange");
       setDragging(true);
  },[setDragging]);
 
  const handleAfterChange = useCallback(()=>{
         console.log("HandleAfterChange");
         setDragging(false);
  },[setDragging])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    slidesToScroll: 1,
    className: "center",
    centerPadding: "60px",
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: false,
          centerPadding: "60px",
        }
      }
    ]
  };

  const router = useRouter();
 
  const handleOnItemClick = useCallback((event:any,id:string)=>{
       
        if(dragging){
         event.stopPropagation();
        }
        else{
          router.push(`/products/product-detail/${id}`)
        }
  },[dragging,router])


  return (
    <div className="slider-container product-slider">
      <Slider {...settings} >
        {
          laptops && laptops.map((item,index) => {
            return (
              <div className="lg:px-4 px-6" key={index} >
          <ProductCard item={item} onClickCapture={(event:any)=>{
            handleOnItemClick(event,item?.id)
          }} />
        </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default ProductSlider;
