"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import DeleteWishlistItemDialog from "./DeleteWishlistItemDialog";

interface WishlistType {
   images : string[],
   title: string,
   titleSlug: string,
   quantity: string,
   pricing: {discountedPrice:string , actualPrice:string},
   discountPercentage: number,
   wishlistItemId:string
}



const WishlistCard = ({images,title,titleSlug,quantity,pricing,discountPercentage,wishlistItemId}:WishlistType) => {

  const router = useRouter();



 
  const handleWishlist = () => {
      router.push(`/products/${titleSlug}`)
  }

  return (
    <div className="group cursor-pointer lg:w-4/12 md:w-6/12 w-full" >
      <div className=" rounded-xl bg-gray-300 relative h-[280px]"  onClick={handleWishlist}>
        <Image
          src={images[0]}
          unoptimized
          alt="product_img"
          width={100}
          className="absolute top-1/2 -translate-y-1/2  start-1/2 -translate-x-1/2 px-12 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
          height={100}

          style={{ width: "100%", height: "auto" }}
        />
        <Image
          src={images[1] }
          unoptimized
          alt="product_img"
          width={100}
          height={100}
          className="absolute top-1/2 -translate-y-1/2  start-1/2 -translate-x-1/2 px-12 group-hover:opacity-100 opacity-0 transition-opacity duration-700"
          style={{ width: "100%", height: "auto" }}
        />
        <Icon icon="mdi:heart" className="text-secondary text-3xl absolute top-4 start-4" />
      </div>
      <div className="border-b border-border pb-4">
        <h3 className="text-base font-bold text-dark leading-6 mt-5">
          {title}
        </h3>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <h6 className="text-sm font-medium text-secondary">
              {`In Stock (${quantity} Units)`}
            </h6>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <span className="text-base text-dark">5</span>
            <Icon
              icon={"material-symbols:star"}
              className="text-base text-secondary"
            />
            <span className="text-base text-dark">(1)</span>
          </div>
        </div>
        <div className="flex items-center gap-3.5 flex-wrap">
          <h5 className="text-lg font-bold">{`₹${pricing.discountedPrice}`}</h5>
          <div className="flex items-center gap-2">
            <h6 className="text-sm font-medium line-through">{`₹${pricing.actualPrice}`}</h6>
            <p className="text-xs">(Save ₹9,099)</p>
            <button className="py-1 px-2 text-dark font-bold rounded-md border border-border text-sm ">
              {`${discountPercentage}% Off`}
            </button>
          </div>
        </div>
        <div className="my-3">
        <DeleteWishlistItemDialog wishlistItemId={wishlistItemId} />
        </div>
      </div>

    </div>
  );
};

export default WishlistCard;
