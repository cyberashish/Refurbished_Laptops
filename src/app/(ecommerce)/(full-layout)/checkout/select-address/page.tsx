


"use client";
import { useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ProductSkeleton } from "@/app/components/pages/product-detail/skeleton/ProductSkeleton";
import ShippingDetails from "@/app/components/pages/shipping/ShippingDetails";
import { ProductContext } from "@/app/context/products/ProductContext";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const {setTotalPrice , setActiveCouponCode} = useContext(ProductContext);

  useEffect(() => {
    setTotalPrice(0);
    setActiveCouponCode("ENTER COUPON")
  },[])

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
     <ShippingDetails/>
  );
};

export default Page;



