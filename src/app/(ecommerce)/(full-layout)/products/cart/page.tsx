"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ProductCart from "@/app/components/pages/product-cart/cart/ProductCart";
import { ProductSkeleton } from "@/app/components/pages/product-detail/skeleton/ProductSkeleton";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // 🔹 Redirect to login if user is not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  // 🔹 Show skeleton while session is loading
  if (status === "loading") {
    return (
      <div className="container-sm">
        <ProductSkeleton />
      </div>
    );
  }

  // 🔹 Prevent rendering if redirect is in progress
  if (!session) return null;

  return (
    <div className="w-full container-sm p-6">
      <h4 className="text-[22px] font-semibold text-dark pt-4 lg:mb-7 mb-2">Your Cart</h4>
      <ProductCart />
    </div>
  );
};

export default Page;
