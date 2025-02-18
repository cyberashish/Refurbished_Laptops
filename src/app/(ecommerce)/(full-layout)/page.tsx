import Features from "@/app/components/pages/home/features/Features"
import HeroSection from "@/app/components/pages/home/hero-section/HeroSection"
import ShopByUsage from "@/app/components/pages/home/usage/ShopByUsage"
import DailyRefurbishedLaptops from "@/app/components/pages/home/refurbished-laptops/DailyRefurbishedLaptops"
import BlogSection from "@/app/components/pages/home/blogs/BlogSection"
import RefurbishedHPLaptops from "@/app/components/pages/home/refurbished-hp-laptops/RefurbishedHPLaptops"
import Faq from "@/app/components/pages/home/faq/Faq"
import TestimonialSection from "@/app/components/pages/home/testimonial/TestimonialSection"



 
const page = () => {
  return (
     <>
       <HeroSection/>
       <Features/>
       <ShopByUsage/>
       <DailyRefurbishedLaptops/>
       <BlogSection/>
       <RefurbishedHPLaptops/>
       <Faq/>
       <TestimonialSection/>
     </>
  )
}

export default page



