"use client"

import { useEffect, useState } from "react";
import { Product } from "../../home/refurbished-laptops/ProductCard";
import {v4 as uuidv4} from "uuid";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../ui/button";

export default function ProductFaq({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product>();

  const handleProduct = async () => {
    try {
      const response = await fetch(`/api/products/${productId}`);
      const result = await response.json();
      setProduct(result);
    } catch (error) {
      console.log("Failed to fetch product",error);
    }
  };

  useEffect(() => {
    handleProduct();
  });

   const Specs = [
    {
        id: uuidv4(),
        title:"LAPTOP CATEGORY",
        features: [
            {
              id: uuidv4(),
              title:"Laptop Type",
              subtitle:"Thin and Light"
            },
            {
              id: uuidv4(),
              title:"Suitable For",
              subtitle:"Everyday Use | Home | Office Use | Work"
            },
            {
              id: uuidv4(),
              title:"Launch Year",
              subtitle:"2023"
            },
        ]
    },
    {
        id: uuidv4(),
        title:"Manufacturer Details",
        features: [
            {
              id: uuidv4(),
              title:"Brand",
              subtitle: product?.brand
            },
            {    
              id: uuidv4(),
              title:"Model Series",
              subtitle: product?.modelSeries
            },
            {
              id: uuidv4(),
              title:"Model Number",
              subtitle: product?.modelNumber
            },
        ]
    },
    {
        id: uuidv4(),
        title:"Product Dimensions (Open)",
        features: [
            {
              id: uuidv4(),
              title:"Dimensions In CM (WxDxH)",
              subtitle: `${product?.dimensions.width} x ${product?.dimensions.height} x ${product?.dimensions.depth}`
            },
            {
              id: uuidv4(),
              title:"Product Weight",
              subtitle: `${product?.dimensions.weightUnit} kg`
            },
            {
              id: uuidv4(),
              title:"Dimensions In Inches (WxDxH)",
              subtitle: `${product?.dimensions.width} x ${product?.dimensions.height} x ${product?.dimensions.depth}`
            },
        ]
    },
   ]

    return (
      <div className="container-sm py-8 px-6 mt-8">
        <div className="flex flex-col gap-6">
          <div>
            <div className=" flex justify-center">
              <span className="text-sm w-fit relative text-secondary after:absolute after:-right-12 after:top-1/2 after:-translate-y-1/2 after:w-10 after:h-[1px] after:bg-secondary before:absolute before:top-1/2 before:-left-12 before:-translate-y-1/2 before:w-10 before:h-[1px] before:bg-secondary font-semibold">
                Product FAQs
              </span>
            </div>
            <h3 className="text-[28px] font-semibold text-dark text-center">
              Laptop Specification
            </h3>
          </div>
          <div className="w-full flex justify-center">
            <div className="hs-accordion-group w-full">
              {/* First Question Starts */}
              <div
                className="hs-accordion hs-accordion-active:border-border shadow mb-4 bg-transparent border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                id="hs-active-bordered-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400 active text-xl"
                  aria-expanded="false"
                  aria-controls="hs-basic-active-bordered-collapse-one"
                >
                  Specifications
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-one"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-active-bordered-heading-one"
                >
                    <div className="p-6">
                {
                    Specs.map((item) => {
                        return (
                            <div className="flex flex-col gap-3 mb-4 last:mb-0 last:pb-0 pb-4 border-b border-border last:border-0" key={item.id}>
                            <h3 className="text-xl font-bold text-dark">
                              {item.title}
                            </h3>
                            <div className="lg:flex items-center lg:gap-0 block justify-between">
                              {item.features.map((item) => {
                                return (
                                    <div key={item.id} className="flex flex-col lg:mb-0 mb-2 last:mb-0 text-start lg:last:text-end last:text-start">
                                    <p className="text-base font-semibold text-dark">
                                      {item.title}
                                    </p>
                                    <p className="text-base font-medium text-dark">
                                      {item.subtitle}
                                    </p>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                    })
                }
                </div>
                </div>
              </div>
              {/* Second Question Starts */}
              <div
                className="hs-accordion hs-accordion-active:border-border shadow mb-4 active bg-transparent border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                id="hs-active-bordered-heading-two"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400 text-xl"
                  aria-expanded="true"
                  aria-controls="hs-basic-active-bordered-collapse-two"
                >
                  Overview
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-two"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-active-bordered-heading-two"
                >
                  <div className="p-6">
                    <div className="mb-8">
                    <h3 className="text-lg font-semibold text-dark">Experience Seamless Performance</h3>
                    <p className="mt-3 text-sm text-dark font-medium">The DELL Inspiron 3530 laptop is equipped with a powerful 13th Gen Intel Corei5-1334U Processor, ensuring smooth and efficient performance for all your computing needs. Whether you&apos;re browsing the web, streaming content, or multitasking with various applications, this laptop delivers exceptional speed and responsiveness.</p>
                    </div>
                    <div className="mb-0">
                    <h3 className="text-lg font-semibold text-dark">Enjoy Enhanced Productivity</h3>
                    <p className="mt-3 text-sm text-dark font-medium">With Windows 11 Home OS and preinstalled MS Office 2021, the DELL Inspiron 3530 laptop offers a user-friendly interface and a suite of productivity tools to help you accomplish tasks with ease. From creating documents and spreadsheets to organizing your emails and presentations, you&apos;ll have everything you need to stay productive and organized.</p>
                    </div>

                  </div>
                </div>
              </div>
              {/* Third Question Starts */}
              <div
                className="hs-accordion hs-accordion-active:border-border shadow mb-4 bg-transparent border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent"
                id="hs-active-bordered-heading-four"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-primary disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-primary dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none text-xl dark:focus:text-neutral-400"
                  aria-expanded="false"
                  aria-controls="hs-basic-active-bordered-collapse-three"
                >
                  Reviews
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-active-bordered-heading-four"
                >
                  <div className="px-5 py-4">
                   <div className="p-3.5 border border-border rounded-md w-fit">
                      <div className="flex items-start lg:gap-28 gap-6 lg:flex-nowrap flex-wrap">
                        <div className="flex flex-col gap-0">
                           <h4 className="text-sm font-semibold">Overall rating</h4>
                           <div className="flex items-center gap-0">
                            <Icon icon="material-symbols:star-rounded" className="text-secondary" />
                            <h4 className="text-base font-medium">5</h4>
                           </div>
                           <p className="text-xs text-dark">Based on 1 Rating</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                                <p className="text-[11px] text-secondary underline hover:text-secondary/80">5 Star</p>
                                <div className="w-24 h-1 bg-secondary rounded-md"></div>
                                <div className="text-xs text-dark font-medium">1</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-[11px] text-secondary underline hover:text-secondary">4 Star</p>
                                <div className="w-24 h-1 bg-gray-400 rounded-md"></div>
                                <div className="text-xs text-dark font-medium">0</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-[11px] text-secondary underline hover:text-secondary">3 Star</p>
                                <div className="w-24 h-1 bg-gray-400 rounded-md"></div>
                                <div className="text-xs text-dark font-medium">0</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-[11px] text-secondary underline hover:text-secondary">2 Star</p>
                                <div className="w-24 h-1 bg-gray-400 rounded-md"></div>
                                <div className="text-xs text-dark font-medium">0</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-[11px] text-secondary underline hover:text-secondary">1 Star</p>
                                <div className="w-24 h-1 bg-gray-400 rounded-md"></div>
                                <div className="text-xs text-dark font-medium">0</div>
                            </div>
                        </div>
                      </div>
                   </div>
                   <div className="flex flex-col gap-2 mt-8">
                        <div className="flex flex-col gap-0.5">
                           <h4 className="text-sm font-semibold">Review this product</h4>
                           <p className="text-xs text-dark">Help other customers make their decision</p>
                        </div>
                        <Button className="border text-primary border-primary w-fit bg-transparent hover:bg-primary hover:text-white py-2.5 px-10" >Write a Review</Button>
                      </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );

}
