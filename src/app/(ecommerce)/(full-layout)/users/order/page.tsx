
"use client";
import { ProductSkeleton } from "@/app/components/pages/product-detail/skeleton/ProductSkeleton";
import AllOrders from "@/app/components/users/orders/AllOrders";
import { Icon } from "@iconify/react/dist/iconify.js"
import { useSession } from "next-auth/react";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="container-sm">
        <ProductSkeleton />
      </div>
    );
  }

  if (!session) return null;

  return (
    <>
      <Image src='https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/banner/feb-2025/24-02-25/ausu_desk.jpg' alt="banner_image" unoptimized width={100} height={100}  style={{width:"100%",height:"300px"}} className="object-cover" />
       <div className="max-w-5xl mx-auto px-6">
       <div className="flex flex-col items-center my-16">
        <h6 className="text-sm font-medium text-dark uppercase">welcome</h6>
         <h3 className="text-[26px] font-semibold text-primary leading-none mt-1">Your Orders</h3>
         <div className="relative before:absolute before:w-10 before:h-[1px] before:-start-7 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:bg-secondary after:absolute  after:w-10 after:h-[1px] after:-end-[68px] after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:bg-secondary">
         <Icon icon="system-uicons:boxes" className="text-3xl shrink-0 text-secondary mt-0.5" />
         </div>
      </div>
      <AllOrders/>
       </div>
    </>
  );
};

export default Page;




