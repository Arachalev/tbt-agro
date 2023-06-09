"use client";

import React from "react";

import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import {
  multiProductsCardData,
  newArrivalsData,
} from "@/store/DummyData/multiProductsCard";
import TopRankingProductsCard from "@/components/TopRankingProductsCard";
import TopRankingMultiProductsCard from "@/components/TopRankingMultiProductsCard";
import { topRankingProductsCardData } from "@/store/DummyData/topRankingProductsData";
import { topRankingMultiProductsCardData } from "@/store/DummyData/topRankingMultiProductsData";

import { useGetTopRatedProductsQuery } from "@/store/redux/services/productsSlice/productsApiSlice";

const Page = () => {
  const { data, isLoading, isSuccess, error } = useGetTopRatedProductsQuery("");

  return (
    <div className="bg-agro-gray w-screen pt-9 pb-[160px] ">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-5  pb-[60px] px-4 xl:px-[72px] 2xl:w-[1500px] 2xl:mx-auto">
        {topRankingProductsCardData.map((item) => (
          <TopRankingProductsCard
            key={item.key}
            image={item.image}
            name={item.name}
            price={item.price}
            amount={item.amount}
            score={item.score}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="px-4 xl:px-[72px] ">
        <h4 className="text-xl sm:text-2xl lg:text-[34px] pb-7 font-medium text-agro-black">
          Rankings you may like
        </h4>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5  2xl:w-[1350px] 2xl:mx-auto ">
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
