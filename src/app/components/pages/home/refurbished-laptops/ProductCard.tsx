"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";


export type Dimensions = {
  height: number;
  width: number;
  depth: number;
  weightUnit: number;
};

export type Pricing = {
  actualPrice: string;
  discountedPrice: string;
};

export type Stock = {
  quantity: number;
  isAvailable: boolean;
};

export type Processor = {
  brand: string;
  type: string;
  generation: string;
  variant: string;
  cores: string;
  baseSpeed: number;
  turboSpeed: number;
};

export type RAM = {
  type: string;
  capacity: string;
  frequency: number;
  configuration: string;
};

export type Storage = {
  type: string;
  hddCapacity: string;
  ssdCapacity: string;
};

export type GPU = {
  brand: string;
  model: string;
  processorType: string;
};

export type Display = {
  sizeInInches: number;
  sizeInCms: number;
  type: string;
  resolution: string;
  aspectRatio: string;
  touchScreen: boolean;
  refreshRate: number;
  additionalSpecifications: string;
};

export type BatteryLife = {
  usageTime: number;
  standbyTime: number;
};

export type Charging = {
  fastCharging: boolean;
  wattage: number;
  portType: string;
  chargingTime: number;
};

export type Camera = {
  type: string;
  resolution: string;
  features: string[];
};

export type OS = {
  type: string;
  name: string;
  architecture: string;
};

export type Connectivity = {
  bluetoothSupported: boolean;
  bluetoothVersion: string;
  bluetoothFeatures: string[];
  wifiSupported: boolean;
  wifiSpecifications: string;
};

export type Ports = {
  auxPortType: string;
  usbPorts: string[];
  usbTypesSupported: string[];
  hdmi: {
    count: number;
    type: string;
  };
  externalCardSupported: string;
};

export type Warranty = {
  period: string;
  coverage: string;
};

export type Specifications = {
  processor: Processor;
  ram: RAM;
  storage: Storage;
  gpu: GPU;
  display: Display;
  batteryLife: BatteryLife;
  charging: Charging;
  additionalFeatures: string[];
  camera: Camera;
  os: OS;
  connectivity: Connectivity;
  ports: Ports;
  warranty: Warranty;
};

export type Product = {
  id: string;
  brand: string;
  modelSeries: string;
  modelNumber: string;
  dimensions: Dimensions;
  bodyMaterial: string[];
  category: string;
  image: string[];
  title: string;
  titleSlug: string;
  rating: number;
  pricing: Pricing;
  discountPercentage: number;
  stock: Stock;
  brandColor: string;
  specifications: Specifications;
  carouselImages: string[];
};




const ProductCard = ({item,onClickCapture}:{item:Product , onClickCapture:(event:any) => void}) => {

  return (
    <div className="group cursor-pointer" onClick={onClickCapture}>
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
