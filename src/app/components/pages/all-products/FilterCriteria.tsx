import { ProductContext } from "@/app/context/products/ProductContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function FilterCriteria({
  filteredProducts,
  setFilterProducts,
}: any) {
  const { allProducts } = useContext(ProductContext);
  const [activeBrand, setActiveBrand] = useState("All");
  const [sortType, setSortType] = useState("HighToLow");

  useEffect(() => {
    if (allProducts) {
      if (filteredProducts?.length === 0) {
        const modifiedProducts = allProducts?.sort(
          (laptopA: any, laptopB: any) => {
            const laptopAPrice = Number(
              laptopA.pricing.discountedPrice.split(",").join("")
            );
            const laptopBPrice = Number(
              laptopB.pricing.discountedPrice.split(",").join("")
            );
            return laptopBPrice - laptopAPrice;
          }
        );
        setFilterProducts([...modifiedProducts]);
      }
    }
  }, [ allProducts]);

  const allBrandsInfo = [
    {
      id: uuidv4(),
      brand: "All",
      icon: "icon-park-outline:data-all",
    },
    {
      id: uuidv4(),
      brand: "Dell",
      icon: "simple-icons:dell",
    },
    {
      id: uuidv4(),
      brand: "Lenevo",
      icon: "fluent:laptop-20-regular",
    },
    {
      id: uuidv4(),
      brand: "HP",
      icon: "simple-icons:hp",
    },
    {
      id: uuidv4(),
      brand: "Acer",
      icon: "simple-icons:acer",
    },
    {
      id: uuidv4(),
      brand: "Asus",
      icon: "simple-icons:asus",
    },
  ];
  const allBrands = useMemo(() => allBrandsInfo, []);

  function handleBrandFilter(brand: string) {
    if (brand === "All") {
      setFilterProducts(allProducts);
      setSortType(sortType)
    } else {
      const filteredData = allProducts.filter(
        (item: any) => item.brand === brand
      );
      if(sortType === "HighToLow"){
        const modifiedProducts = filteredData?.sort((laptopA:any , laptopB:any) => {
          const laptopAPrice = Number(laptopA.pricing.discountedPrice.split(",").join(""));
          const laptopBPrice = Number(laptopB.pricing.discountedPrice.split(",").join(""));
          return (laptopBPrice - laptopAPrice);
        });
        setFilterProducts([...modifiedProducts]);
      }else{
        const modifiedProducts = filteredData?.sort((laptopA:any , laptopB:any) => {
          const laptopAPrice = Number(laptopA.pricing.discountedPrice.split(",").join(""));
          const laptopBPrice = Number(laptopB.pricing.discountedPrice.split(",").join(""));
          return (laptopAPrice - laptopBPrice);
        });
        console.log(modifiedProducts);
        setFilterProducts([...modifiedProducts]);
      }
    }
    setActiveBrand(brand);
  }

  useEffect(() => {
      if(filteredProducts?.length !== 0){
        if(sortType === "HighToLow"){
          const modifiedProducts = filteredProducts?.sort((laptopA:any , laptopB:any) => {
            const laptopAPrice = Number(laptopA.pricing.discountedPrice.split(",").join(""));
            const laptopBPrice = Number(laptopB.pricing.discountedPrice.split(",").join(""));
            return (laptopBPrice - laptopAPrice);
          });
          setFilterProducts([...modifiedProducts]);
        }else{
          const modifiedProducts = filteredProducts?.sort((laptopA:any , laptopB:any) => {
            const laptopAPrice = Number(laptopA.pricing.discountedPrice.split(",").join(""));
            const laptopBPrice = Number(laptopB.pricing.discountedPrice.split(",").join(""));
            return (laptopAPrice - laptopBPrice);
          });
          console.log(modifiedProducts);
          setFilterProducts([...modifiedProducts]);
        }
      }

  },[sortType])

  return (
    <>
      <h3 className="text-base font-semibold text-dark text-start">Filter by Brand</h3>
      <div className="flex flex-col gap-2 mt-4">
        {allBrands.map((item) => (
          <button
            onClick={() => handleBrandFilter(item.brand)}
            key={item.id}
            className={`py-2 px-4 rounded-md text-[15px] font-semibold hover:text-primary hover:bg-primary/20 text-dark flex items-center gap-2 ${
              activeBrand === item.brand ? "bg-primary/20 text-primary" : null
            }`}
          >
            <Icon icon={item.icon} width={19} height={19} />
            {item.brand}
          </button>
        ))}
      </div>
      <h3 className="text-base mt-6 font-semibold text-dark mb-3 text-start">Sort By</h3>
      <button
        onClick={() => setSortType("HighToLow")}
        className={`py-2 px-4 rounded-md text-[15px] font-semibold hover:text-primary hover:bg-primary/20 text-dark flex items-center gap-2 ${
          sortType === "HighToLow" ? "bg-primary/20 text-primary" : null
        }`}
      >
        <Icon icon={"iconoir:sort-up"} width={19} height={19} />
        Price: High-Low
      </button>
      <button
        onClick={() => setSortType("LowToHigh")}
        className={`py-2 px-4 mt-2 rounded-md text-[15px] font-semibold hover:text-primary hover:bg-primary/20 text-dark flex items-center gap-2 ${
          sortType === "LowToHigh" ? "bg-primary/20 text-primary" : null
        }`}
      >
        <Icon icon={"iconoir:sort-up"} width={19} height={19} />
        Price: Low-High
      </button>
    </>
  );
}
