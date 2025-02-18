import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

type Product = {
  id: string;
  brand: string;
  category: string;
  image: string[];
  title: string;
  rating: number;
  pricing: {
    actualPrice: string;
    discountedPrice: string;
  };
  discountPercentage: number;
  stock: {
    quantity: number;
    isAvailable: boolean;
  };
  brandColor: string;
  specifications: {
    processor: string;
    ram: string;
    storage: string;
    graphicsCard: string;
    display: {
      size: string;
      resolution: string;
      refreshRate: string;
    };
    battery: string;
    weight: string;
    operatingSystem: string;
    connectivity: string[];
    ports: string[];
    warranty: {
      period: string;
      coverage: string;
    };
  };
};


const ProductCard = ({item}:{item:Product}) => {
  return (
    <div className="group cursor-pointer">
      <div className=" rounded-xl bg-gray-300 relative h-[286px]">
        <Image
          src={item.image[0] }
          unoptimized
          alt="product_img"
          width={100}
          className="absolute top-1/2 -translate-y-1/2  start-1/2 -translate-x-1/2 px-12 opacity-100 group-hover:opacity-0 transition-opacity duration-700"
          height={100}
          style={{ width: "100%", height: "auto" }}
        />
        <Image
          src={item.image[1] }
          unoptimized
          alt="product_img"
          width={100}
          height={100}
          className="absolute top-1/2 -translate-y-1/2  start-1/2 -translate-x-1/2 px-12 group-hover:opacity-100 opacity-0 transition-opacity duration-700"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="border-b border-border pb-4">
        <h3 className="text-base font-bold text-dark leading-6 mt-5">
          {item.title}
        </h3>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
            <h6 className="text-sm font-medium text-secondary">
              {`In Stock (${item.stock.quantity} Units)`}
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
          <h5 className="text-lg font-bold">{`₹${item.pricing.discountedPrice}`}</h5>
          <div className="flex items-center gap-2">
            <h6 className="text-sm font-medium line-through">{`₹${item.pricing.actualPrice}`}</h6>
            <p className="text-xs">(Save ₹9,099)</p>
            <button className="py-1 px-2 text-dark font-bold rounded-md border border-border text-sm ">
              {`${item.discountPercentage}% Off`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
