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
  const { data: productsData, isLoading, error } = useGetAllProductsQuery("");

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
          {productsArr.slice(0, 4).length > 1 && (
            <div className="col-span-4 md:col-span-2  lg:col-span-1 w-full">
              <MultiProductsCard
                title={products.title}
                products={productsArr.slice(0, 4)}
                type="newProducts"
              />
            </div>
          )}
          {productsArr.slice(0, 4).length > 1 && (
            <div className="col-span-4 md:col-span-2  lg:col-span-1 w-full">
              <MultiProductsCard
                title={products.title}
                products={
                  productsArr.slice(4, 8).length > 2
                    ? productsArr.slice(4, 8)
                    : productsArr.slice(0, 4)
                }
                type="newProducts"
              />
            </div>
          )}
          {productsArr.slice(0, 6).length > 1 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={"Crop Products"}
                products={productsArr.slice(0, 6)}
                type="cropProducts"
              />
            </div>
          )}
          {productsArr.slice(6, 12).length > 1 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={"Crop Products"}
                products={productsArr.slice(6, 12)}
                type="cropProducts"
              />
            </div>
          )}
          {productsArr.slice(12, 18).length > 1 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={"Crop Products"}
                products={productsArr.slice(12, 18)}
                type="cropProducts"
              />
            </div>
          )}
          {productsArr.slice(18, 24).length > 1 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={"Crop Products"}
                products={productsArr.slice(18, 24)}
                type="cropProducts"
              />
            </div>
          )}
          {productsArr.slice(24, 30).length > 1 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={"Crop Products"}
                products={productsArr.slice(24, 30)}
                type="cropProducts"
              />
            </div>
          )}
          {productsArr.slice(30, 36).length > 1 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={"Crop Products"}
                products={productsArr.slice(30, 36)}
                type="cropProducts"
              />
            </div>
          )}

          {/* <div className=" col-span-4 md:col-span-2 w-full ">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
              type="cropProducts"
            />
          </div>
          <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
              type="cropProducts"
            />
          </div>
          <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
              type="cropProducts"
            />
          </div>
          <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
              type="cropProducts"
            />
          </div>
          <div className="  col-span-4 md:col-span-2 w-full">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
              type="cropProducts"
            />
          </div> */}
        </div>
        {isLoading && (
          <div className=" w-full rounded-[10px] py-4 px-10 col-span-4 justify-self-center flex flex-col items-center ">
            <p className="bg-white rounded-[10px] py-4 px-10 w-fit font-semibold text-center text-2xl sm:text-4xl">
              Loading Products...
            </p>
          </div>
        )}
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
