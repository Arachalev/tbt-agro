"use client";

import React, { useEffect, useState } from "react";

import {
  multiProductsCardData,
  products,
} from "@/store/DummyData/multiProductsCard";

import { usePathname, useSearchParams } from "next/navigation";

import MultiProductsCard from "@/components/MultiProductsCard";
import QuotationCard from "@/components/QuotationCard/QuotationCard";
import TradeServices from "@/components/TradeServices";

import ProductsCategoryCard from "@/components/ProductsCategoryCard";
import HeaderCarousel from "@/components/HeaderCarousel";

import {
  useGetAllProductsQuery,
  useGetTopRatedProductsQuery,
} from "@/store/redux/services/productsSlice/productsApiSlice";
import { useGetProductsByCategoryQuery } from "@/store/redux/services/productsSlice/productsApiSlice";
import { useGetCategoriesQuery } from "@/store/redux/services/categorySlice/categoryApiSlice";

const Page = () => {
  // const { data } = useGetTopRatedProductsQuery("");
  const searchParams = useSearchParams();
  const categoryParams = searchParams.get("category");

  const [productsArr, setProductsArr] = useState<any[]>([]);
  const [categoryData, setCategoryData] = useState<{
    linksData: { name: string; icon: string; id: number }[];
    productsData: {
      image: string;
      name: string;
      price: number;
      sellerID: string;
      location: string;
      id: number;
    }[];
    fetchParams: { skip: boolean; id: number; name: string };
  }>({
    linksData: [{ name: "", icon: "", id: 1 }],
    productsData: [],
    fetchParams: {
      skip: true,
      id: 1,
      name: "",
    },
  });

  const {
    data: productsData,
    isLoading: productsLoading,
    error,
  } = useGetAllProductsQuery("");

  // console.log(productsData?.data);

  const { data: categories } = useGetCategoriesQuery("");

  const { data: productsCategory } = useGetProductsByCategoryQuery(
    categoryData.fetchParams.id,
    {
      skip: categoryData.fetchParams.skip,
    }
  );

  useEffect(() => {
    const category = categoryData.linksData.find(
      (item) => item.name === categoryParams
    );

    if (category?.id) {
      setCategoryData((state) => ({
        linksData: state.linksData,
        productsData: state.productsData,
        fetchParams: {
          skip: false,
          id: category.id,
          name: category.name,
        },
      }));
    } else {
      setCategoryData((state) => ({
        linksData: state.linksData,
        productsData: state.productsData,
        fetchParams: {
          skip: false,
          id: state.fetchParams.id,
          name: categoryParams ? categoryParams : state.fetchParams.name,
        },
      }));
    }
  }, [categoryParams, categoryData.linksData]);

  useEffect(() => {
    if (categories?.data) {
      const categoryLinks = categories.data.map((item: any) => ({
        name: item.name,
        icon: item.icon,
        id: item.id,
      }));

      setCategoryData((state) => ({
        linksData: categoryLinks,
        productsData: state.productsData,
        fetchParams: {
          skip: state.fetchParams.skip,
          id: state.fetchParams.id,
          name: state.fetchParams.name,
        },
      }));
    }
  }, [categories?.data]);

  useEffect(() => {
    if (productsCategory?.data) {
      const tempProd: any[] = [];

      productsCategory.data.map(
        (item: {
          images: { image_url: string }[];
          name: string;
          sale_price: number;
          user: { seller_id: string };
          location: string;
          id: number;
        }) =>
          tempProd.push({
            image: item.images[0] ? item.images[0].image_url : "",
            name: item.name,
            price: item.sale_price,
            sellerID: item.user.seller_id,
            location: item.location,
            id: item.id,
          })
      );

      setCategoryData((state) => ({
        linksData: state.linksData,
        fetchParams: {
          skip: false,
          id: state.fetchParams.id,
          name: state.fetchParams.name,
        },
        productsData: tempProd,
      }));
    } else if (productsData) {
      const tempProd: any[] = [];

      const fetchPage2 = async () => {
        const res = await fetch(productsData.data.next_page_url);
        const data = await res.json();

        data.data.data.map((item: any) =>
          tempProd.push({
            image: item.images[0] ? item.images[0].image_url : "",
            name: item.name,
            price: item.sale_price,
            sellerID: item.user.seller_id,
            location: item.location,
            id: item.id,
          })
        );

        productsData.data.data.map(
          (item: {
            images: { image_url: string }[];
            name: string;
            sale_price: number;
            user: { seller_id: string };
            location: string;
            id: number;
          }) =>
            tempProd.push({
              image: item.images[0] ? item.images[0].image_url : "",
              name: item.name,
              price: item.sale_price,
              sellerID: item.user.seller_id,
              location: item.location,
              id: item.id,
            })
        );
        // console.log(tempProd);
        setProductsArr(tempProd);
      };

      fetchPage2();
    }
  }, [productsData, productsCategory?.data]);

  let categoryPage = (
    <div className="m-auto  grid justify-center justify-items-center md:grid-cols-4 gap-3 md:gap-5  w-full  2xl:w-[1400px] h-full">
      {categoryData.productsData.length > 0 ? (
        <p className="col-span-4 w-full text-center text-xl sm:text-2xl md:text-3xl font-semibold">
          {categoryData.fetchParams.name}
        </p>
      ) : (
        <p className="col-span-4 w-full text-center text-xl sm:text-2xl md:text-3xl font-semibold">
          {categoryParams} Not Available
        </p>
      )}

      {categoryData.productsData.slice(0, 6).length > 0 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={categoryData.fetchParams.name}
            products={categoryData.productsData.slice(0, 8)}
            type="cropProducts"
          />
        </div>
      )}
      {categoryData.productsData.slice(8, 16).length > 0 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={categoryData.fetchParams.name}
            products={categoryData.productsData.slice(8, 16)}
            type="cropProducts"
          />
        </div>
      )}
    </div>
  );

  let homePage = (
    <div className="m-auto  grid justify-center justify-items-center md:grid-cols-4 gap-3 md:gap-5  w-full  2xl:w-[1400px] h-full">
      {productsArr.slice(0, 4).length > 1 && (
        <div className="col-span-4 md:col-span-2  lg:col-span-1 w-full">
          <MultiProductsCard
            title={"New Arrivlas"}
            products={productsArr.slice(0, 4)}
            type="newProducts"
          />
        </div>
      )}
      {productsArr.slice(0, 4).length > 1 && (
        <div className="col-span-4 md:col-span-2  lg:col-span-1 w-full">
          <MultiProductsCard
            title={"Crop Products"}
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
            products={productsArr.slice(0, 8)}
            type="cropProducts"
          />
        </div>
      )}
      {productsArr.slice(8, 16).length > 1 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={"Crop Products"}
            products={productsArr.slice(8, 16)}
            type="cropProducts"
          />
        </div>
      )}
      {productsArr.slice(16, 24).length > 1 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={"Crop Products"}
            products={productsArr.slice(16, 24)}
            type="cropProducts"
          />
        </div>
      )}
      {productsArr.slice(24, 32).length > 1 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={"Crop Products"}
            products={productsArr.slice(24, 32)}
            type="cropProducts"
          />
        </div>
      )}
      {productsArr.slice(32, 40).length > 1 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={"Crop Products"}
            products={productsArr.slice(32, 40)}
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
    </div>
  );

  return (
    <div className="min-h-[100vh] py-12 bg-agro-body">
      <div className="px-4 xl:px-[70px] pb-12 flex flex-col md:flex-row md:mx-auto gap-5 2xl:w-[1540px] ">
        <ProductsCategoryCard
          productsCategoryData={
            categoryData.linksData.length > 0
              ? categoryData.linksData
              : [{ name: "Loading...", icon: "https://picsum.photos/200/300" }]
          }
        />
        <HeaderCarousel />
      </div>
      <div className="bg-agro-blue px-4 xl:px-[70px] py-11  ">
        {categoryParams !== "All Categories" &&
        categoryParams !== "Others" &&
        categoryParams !== null
          ? categoryPage
          : homePage}
        {productsLoading && (
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
