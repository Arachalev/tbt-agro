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

const page = () => {
  return (
    <div className="bg-agro-gray w-screen pt-9 pb-[160px] ">
      <div className="grid grid-cols-3 items-center justify-center gap-5  pb-[60px] px-[72px]">
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
      <div className="px-[72px] ">
        <h4 className="text-[34px] pb-7 font-medium text-agro-black">
          Rankings you may like
        </h4>
        <div className="grid grid-cols-3 gap-5 ">
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

export default page;
