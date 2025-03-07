import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
 
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import { Product } from '../../home/refurbished-laptops/ProductCard';
import Image from 'next/image';
import BasicImageSkeleton from '../skeleton/BasicImageSkeleton';
import BasicThumbSkeleton from '../skeleton/BasicThumbSkeleton';


const NewProductSlider = ({productSlug}:{productSlug:string}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [product , setProduct] = useState<Product>();
  const [isProductLoading , setIsProductLoading] = useState(true)

  const handleProduct = async () => {
    try{
      const response = await fetch(`/api/products/${productSlug}`);
      const result = await response.json();
      setProduct(result);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
      handleProduct();
  },[])
  useEffect(() => {
      console.log(isProductLoading)
  },[isProductLoading])

  return (
    <div className='sticky top-28'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000000',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-size' : '0px'
        } as React.CSSProperties}
        spaceBetween={40}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        initialSlide={1}
        grabCursor={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {isProductLoading && <BasicImageSkeleton/>}
        {
          product && product?.carouselImages?.map((item, index) => (
            <SwiperSlide key={index} className='!h-auto my-8'>
              <Image className='w-full h-auto lg:px-32 px-20' src={item} unoptimized width={100} height={100} style={{width:"100%" , height:"auto"}} alt={`Slide ${index + 1}`} onLoad={() => setIsProductLoading(false)} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
        spaceBetween={30}
        slidesPerView={5}
        freeMode={true}
        grabCursor={true}
        initialSlide={1}
        watchSlidesProgress={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper lg:px-0 !px-6"
      >
        {isProductLoading && <BasicThumbSkeleton/>}
        {
          product && product?.carouselImages?.map((item, index) => (
            <SwiperSlide key={index} className='p-3 rounded-md border border-border'>
              <Image style={{width:"100%" , height:"auto"}} width={100} height={100}  src={item} alt={`Thumbnail ${index + 1}`} onLoad={() => setIsProductLoading(false)}   />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default NewProductSlider;
