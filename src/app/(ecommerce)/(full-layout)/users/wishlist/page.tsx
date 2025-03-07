"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ProductSkeleton } from "@/app/components/pages/product-detail/skeleton/ProductSkeleton";
import Image from "next/image";
import MyWishlist from "@/app/components/pages/wishlist/MyWishlist";

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
      <Image
        src="https://www.vijaysales.com/content/dam/vijaysaleswebsite/in/en/static-pages/homepage/images/banner/feb-2025/24-02-25/ausu_desk.jpg"
        alt="banner_image"
        unoptimized
        width={100}
        height={100}
        style={{ width: "100%", height: "300px" }}
        className="object-cover"
      />
      <div className="container-sm mx-auto">
        <div className="max-w-6xl mx-auto px-6">
          <MyWishlist />
        </div>
      </div>
    </>
  );
};

export default Page;
