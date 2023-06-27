"use client";

import React, { useState, useEffect } from "react";

import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import {
  useGetAllProductsQuery,
  useGetNewArrivalsQuery,
  useGetProductsByCategoryQuery,
} from "@/store/redux/services/productsSlice/productsApiSlice";
import StatusModal from "@/components/Forms/StatusModal";
import { useGetCategoriesQuery } from "@/store/redux/services/categorySlice/categoryApiSlice";
import { newArrivalsData } from "@/store/DummyData/darkHeaderData";

const Page = ({ params }: { params: { category: string } }) => {
  const [arrivals, setArrivals] = useState([]);
  const [fetchParams, setFetchParams] = useState({ skip: true, id: 0 });

  // const { data, isLoading } = useGetAllProductsQuery("");
  const { data, isLoading } = useGetNewArrivalsQuery("");

  const { data: categoriesList } = useGetCategoriesQuery("");

  // console.log(params.category, categoriesData?.data);

  const { data: categoryData, isLoading: categoriesDataLoading } =
    useGetProductsByCategoryQuery(fetchParams.id, {
      skip: fetchParams.skip,
    });

  console.log(data, categoryData?.data);

  useEffect(() => {
    if (categoriesList?.data) {
      let name: string | undefined = "All";

      if (params.category) {
        const item = newArrivalsData.find(
          (item) => item.key === params.category[0]
        );
        name = item?.name;
        if (name === "All") {
          return;
        }
        let productCategory = categoriesList?.data.find(
          (item: any) => item.name === name
        );

        if (productCategory) {
          setFetchParams({ id: productCategory.id, skip: false });
        }
      }

      // console.log(name);
      // setFetchParams({ id: productCategory.id, skip: false });

      // console.log(productCategory);
    }
  }, [categoriesList?.data, params.category]);

  useEffect(() => {
    if (categoryData) {
      setArrivals(categoryData?.data);
    } else {
      setArrivals(data?.data);
    }
  }, [categoryData, data]);

  // console.log(arrivals, categoryData);

  /**
   *let isCategoryData = true;

   * if(params.category && !categoryData){
   * isCategoryData = false;
   * }
   *
   *
   */

  let isCategoryUnAvailable,
    categoryType = "";

  isCategoryUnAvailable =
    params.category && params.category[0] !== "all" && !categoryData;

  if (isCategoryUnAvailable) {
    const item = newArrivalsData.find(
      (item) => item.key === params.category[0]
    );
    categoryType = item?.name ? item.name : "";
  }

  return isLoading || categoriesDataLoading ? (
    <StatusModal
      onClose={() => {}}
      loading={isLoading || categoriesDataLoading}
    />
  ) : (
    <div className="bg-agro-gray pt-9 pb-[163px] px-4 xl:px-[72px] w-screen ">
      <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5 2xl:mx-auto 2xl:w-[1200px] ">
        {isCategoryUnAvailable ? (
          <h4 className="text-xl font-semibold text-agro-green">
            No {categoryType} Products
          </h4>
        ) : arrivals && arrivals.length > 0 ? (
          arrivals.map(
            (item: {
              id: number;
              location: string;
              user: { seller_id: string };
              name: string;
              images: { image_url: string }[];
              tbt_price: number;
            }) => (
              <NewArrivalsProductCard
                key={item.id}
                id={item.id}
                image={
                  item.images.length > 0
                    ? item.images[0].image_url
                    :  ""
                }
                name={item.name}
                price={item.tbt_price}
                sellerID={item.user.seller_id}
                location={item.location}
              />
            )
          )
        ) : (
          <h4 className="text-xl font-semibold text-agro-green">
            No New Products
          </h4>
        )}
      </div>
    </div>
  );
};

export default Page;
