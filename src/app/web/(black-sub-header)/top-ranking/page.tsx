"use client";

import React, { useState, useEffect } from "react";

import TopRankingProductsCard from "@/components/TopRankingProductsCard";

import {
  useGetTopRatedProductsQuery,
  useGetTopRankedProductsQuery,
} from "@/store/redux/services/productsSlice/productsApiSlice";
import StatusModal from "@/components/Forms/StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const Page = () => {
  const [topProducts, setTopProducts] = useState([]);

  const { data, isLoading, isSuccess, error } = useGetTopRatedProductsQuery("");
  // const { data: topRanked } = useGetTopRankedProductsQuery("");

  // console.log(topRanked);

  useEffect(() => {
    if (data) {
      const topProd: any = [];

      data?.data.map((item: any) => {
        if (item.is_top_ranking) {
          topProd.push({
            id: item.id,
            image: item.images > 1 ? item.images[0].image_url : "",
            name: item.name,
            price: item.tbt_price,
            amount: `${item.quantity}${item.unit}`,
            rating: item.ratings_avg,
          });
        }
      });

      setTopProducts(topProd);
    }
  }, [data]);

  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }

  return isLoading ? (
    <StatusModal
      onClose={() => {}}
      loading={isLoading}
      data={data ? "" : ""}
      // dataFunc={() => router.push("/dashboard/seller/account")}
      error={error ? errorMessage : ""}
    />
  ) : (
    <div className="bg-agro-gray w-screen pt-9 pb-[160px] ">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-5  pb-[60px] px-4 xl:px-[72px] 2xl:w-[1500px] 2xl:mx-auto">
        {topProducts.length > 0 ? (
          topProducts.map((item: any) => (
            <TopRankingProductsCard
              key={item.key}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              amount={item.amount}
              // score={item.score}
              rating={item.rating ? item.rating : 1}
            />
          ))
        ) : (
          <p className="col-span-3 text-xl sm:text-3xl font-semibold text-agro-green w-full">
            No Top-Ranked Products Yet
          </p>
        )}
      </div>
      {/* <div className="px-4 xl:px-[72px] ">
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
      </div> */}
    </div>
  );
};

export default Page;
