import Image from "next/image";
import Link from "next/link";
import {v4 as uuidv4} from "uuid";


const ShopByUsage = () => {
  const usageTypes = [
    {
       id: uuidv4(),
       type: "BASIC",
       feature: "4 GB Ram, 500 GB HDD & more",
       price: "18,000",
       img: "https://www.gorefurbo.com/cdn/shop/products/HP1030G3X360.jpg",
    },
    {
       id: uuidv4(),
       type: "GAMING",
       feature: "Core i7, Graphic Card , 240 GB",
       price: "1,09,000",
       img: "https://www.gorefurbo.com/cdn/shop/products/HPPavilionGaming3500U.png?v=1673616111&width=360"
    },
    {
       id: uuidv4(),
       type: "BUSINESS",
       feature: "Core i5, 8 GB Ram & More",
       price: "50,500",
       img: "https://www.gorefurbo.com/cdn/shop/files/hp-pavilion-x360-laptop-_myshop-pk-3.jpg?v=1691759163&width=360"
    },
  ]
  return (
    <div className="container-sm py-8 px-6" >
      <div className="flex flex-col gap-4">
         <div>
         <div className=" flex justify-center">
        <span className="text-sm w-fit relative text-secondary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-secondary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-secondary font-semibold">
          Shopping
          </span>
        </div>
         <h3 className="text-[28px] font-semibold text-dark text-center">Shop By Usage</h3>
         </div>
         <div className="flex justify-center w-full gap-6 flex-wrap">
            {
              usageTypes.map((item) => {
                return (
                  <Link key={item.id} href={`/products/usage/${item.type.toLocaleLowerCase()}`} className="p-2 block lg:w-3/12 w-full" >
                  <div>
                  <div className="py-8 px-8 shadow bg-white rounded-md hover:-translate-y-1 transition-all cursor-pointer duration-300 ease-in-out hover:shadow-md">
                  <Image src={item.img} alt="laptop" unoptimized width={100} height={100} style={{ width: "100%", height: "auto" }} className="rounded-md" />
                   <h3 className="text-xl font-semibold text-center pt-3 text-primary">{item.type}</h3>
                   <hr className="border-border border-b my-2"  />
                    <p className="text-sm font-semibold text-center">{item.feature}</p>
                    <h3 className="text-lg font-semibold text-dark my-1 text-center">{`Starting from ₹${item.price}`}</h3>
                  </div>
                 </div>
                 </Link>
                )
              })
            }
         </div>
      </div>
    </div>
  )
}

export default ShopByUsage
