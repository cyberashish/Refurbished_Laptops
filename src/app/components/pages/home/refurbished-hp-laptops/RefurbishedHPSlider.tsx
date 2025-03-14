"use client";

import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouter } from "next/navigation";
import ProductCard, { Product } from "../refurbished-laptops/ProductCard";




function RefurbishedHPSlider() {
  const [laptops, setLaptops] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/products`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      const OnlyHpLaptops = result.filter((laptop:Product) => {
        return laptop.brand === "HP"
      })
      setLaptops(OnlyHpLaptops);
    } catch (error) {
      setError("Failed to fetch details. Please try again.");
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const [dragging, setDragging] = useState(false);

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, []);
  
  const handleAfterChange = useCallback(() => {
    setTimeout(() => setDragging(false), 50); // Slight delay for smoother experience
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    className: "center",
    centerPadding: "60px",
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2, arrows: false } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 2, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: false, centerPadding: "60px" } }
    ]
  };

  const router = useRouter();

  

  const handleOnItemClick = useCallback(
    (event: React.MouseEvent, id: string, titleSlug: string) => {
      if (dragging) {
        event.preventDefault(); // Prevent the click event when dragging
        return;
      }
      router.push(`/products/${titleSlug}`);
    },
    [dragging, router]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="slider-container product-slider">
      <Slider {...settings}>
        {laptops?.map((laptop,index) => (
                 <div className="lg:px-4 px-6" key={index} >
                 <ProductCard item={laptop} onClickCapture={(event:any)=>{
                   handleOnItemClick(event,laptop?.id,laptop?.titleSlug)
                 }} />
               </div>
        ))}
      </Slider>
    </div>
  );
}

export default RefurbishedHPSlider;
