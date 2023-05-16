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

const page = () => {
  return (
    <div className="min-h-[100vh] bg-agro-body">
      {/* <main className=" min-h-screen h-full border-4 border-red-500   flex flex-col gap-12 pb-12 bg-gray-50 px-[72px] "></main> */}

      <div className="px-[70px] py-12 flex gap-5 ">
        <ProductsCategoryCard />
        <HeaderCarousel />
      </div>
      <div className="bg-agro-blue px-[70px] py-11 ">
        <div className="grid grid-cols-4 gap-5 w-full h-full">
          <MultiProductsCard
            title={products.title}
            products={products.products}
          />
          <MultiProductsCard
            title={"Top Ranking"}
            products={products.products}
          />
          <div className=" col-span-2">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div>
          <div className=" col-span-2">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div>
          <div className=" col-span-2">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div>
          <div className=" col-span-2">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div>
          <div className=" col-span-2">
            <MultiProductsCard
              title={multiProductsCardData.title}
              products={multiProductsCardData.products}
            />
          </div>
        </div>
      </div>

      <div className="px-4 xl:px-[70px] my-[60px]">
        <QuotationCard />
      </div>

      <div className="px-4 xl:px-[70px] mb-[131px]">
        <TradeServices />
      </div>
    </div>
  );
};

export default page;
