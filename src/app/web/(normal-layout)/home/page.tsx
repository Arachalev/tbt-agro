"use client";

import React from "react";

import {
  multiProductsCardData,
  products,
} from "@/store/DummyData/multiProductsCard";

import MultiProductsCard from "@/components/MultiProductsCard";
import QuotationCard from "@/components/QuotationCard/QuotationCard";
import TradeServices from "@/components/TradeServices";

import ProductsCategoryCard from "@/components/ProductsCategoryCard";
import HeaderCarousel from "@/components/HeaderCarousel";

import {
  useGetAllProductsQuery,
  useGetTopRatedProductsQuery,
} from "@/store/redux/services/productsSlice/productsApiSlice";

const Page = () => {
  const { data } = useGetTopRatedProductsQuery("");
  const { data: productsData } = useGetAllProductsQuery("");

  // console.log(productsData?.data);

  const productsArr: {
    image: string;
    name: string;
    price: number;
    sellerID: string;
    location: string;
  }[] = [
    {
      image: "",
      name: "",
      price: 0,
      sellerID: "",
      location: "",
    },
  ];
  // const productsArr = [[{ products: {}, title: "" }]];

  // console.log(productsArr);

  /***
   * 
   * 


    const mod = Math.Ceil(productsData.data.data.length %6)

    for( let i =0; i< mod; i++)
    {
      if(productsArr[i].length < 6)
      {
 productsData.data.data.map(
       (item: {
         images: string[];
         name: string;
         sale_price: number;
         user: { seller_id: string };
         location: string;
       }) =>
         productsArr[i].push({
           image: item.images[0] ? item.images[0] : "",
           name: item.name,
           price: item.sale_price,
           sellerID: item.user.seller_id,
           location: item.location,
         })
     );
      } 
      else{
        productsArr.push({

        })
      }

    }
 

   */

  if (productsData) {
    productsArr.pop();
    productsData.data.data.map(
      (item: {
        images: string[];
        name: string;
        sale_price: number;
        user: { seller_id: string };
        location: string;
      }) =>
        productsArr.push({
          image: item.images[0] ? item.images[0] : "",
          name: item.name,
          price: item.sale_price,
          sellerID: item.user.seller_id,
          location: item.location,
        })
    );
  }

  return (
    <div className="min-h-[100vh] py-12 bg-agro-body">
      <div className="px-4 xl:px-[70px] pb-12 flex flex-col md:flex-row md:mx-auto gap-5 2xl:w-[1540px] ">
        <ProductsCategoryCard />
        <HeaderCarousel />
      </div>
      <div className="bg-agro-blue px-4 xl:px-[70px] py-11  ">
        <div className="m-auto  grid justify-center justify-items-center md:grid-cols-4 gap-3 md:gap-5  w-full  2xl:w-[1400px] h-full">
          <div className=" col-span-4 md:col-span-2 lg:col-span-1 w-full">
            <MultiProductsCard
              title={products.title}
              products={products.products}
            />
          </div>
          <div className="col-span-4 md:col-span-2  lg:col-span-1 w-full">
            <MultiProductsCard
              title={products.title}
              products={products.products}
            />
          </div>
          {productsArr.length > 2 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={"Crop Products"}
                products={productsArr.slice(0, 6)}
              />
            </div>
          )}

          {/* <div className=" col-span-4 md:col-span-2 w-full ">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div> */}
          {/* <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div> */}
          {/* <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div>
          <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div>
          <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div> */}
        </div>
      </div>

      <div className="px-4 xl:px-[70px] 2xl:w-[1540px] mx-auto my-[60px]">
        <QuotationCard />
      </div>

      <div className="px-4 xl:px-[70px] 2xl:w-[1540px] mx-auto mb-[131px]">
        <TradeServices />
      </div>
    </div>
  );
};

export default Page;
