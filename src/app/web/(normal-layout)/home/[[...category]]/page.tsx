"use client";

import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import MultiProductsCard from "@/components/MultiProductsCard";
import QuotationCard from "@/components/QuotationCard/QuotationCard";
import TradeServices from "@/components/TradeServices";

import ProductsCategoryCard from "@/components/ProductsCategoryCard";
import HeaderCarousel from "@/components/HeaderCarousel";

import HomePageLoadingUI from "@/components/LoadingUI/HomePageLoadingUI";

import {
  useGetAllProductsQuery,
  useGetTopRatedProductsQuery,
} from "@/store/redux/services/productsSlice/productsApiSlice";
import { useGetProductsByCategoryQuery } from "@/store/redux/services/productsSlice/productsApiSlice";
import { useGetCategoriesQuery } from "@/store/redux/services/categorySlice/categoryApiSlice";
import logoImg from "../../../../../../public/images/modal-logo.png";
import cocoaImge from "../../../../../../public/images/Image-min.png";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import "./style.css";

import { gsap } from "gsap";

const Page = () => {
  // const { data } = useGetTopRatedProductsQuery("");
  const searchParams = useSearchParams();
  const categoryParams = searchParams.get("category");

  const [showModal, setShowModal] = useState(true);
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

  const { data: categories } = useGetCategoriesQuery("");

  const { data: productsCategory } = useGetProductsByCategoryQuery(
    categoryData.fetchParams.id,
    {
      skip: categoryData.fetchParams.skip,
    }
  );

  // update catgory products from fetched data
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
          tbt_price: number;
          user: { seller_id: string };
          location: string;
          id: number;
        }) =>
          tempProd.push({
            image: item.images[0] ? item.images[0].image_url : "",
            name: item.name,
            price: item.tbt_price,
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
    }
  }, [productsCategory?.data]);

  // Fetch Other pages
  const fetchOtherPages = async (
    total: number,
    pageLimit: number,
    pageUrl: string
  ) => {
    const tempProducts: any[] = [];

    const limit = Math.ceil(total / pageLimit);

    const dataArr = new Array(limit + 1).fill("");

    await Promise.all(
      dataArr.map(async (item, index) => {
        if (index > 0) {
          const res = await fetch(`${pageUrl}=${index}`);
          // console.log(`${pageUrl}=${index}`);
          const data = await res.json();
          data.data.data.map((item: any) =>
            tempProducts.push({
              image: item.images[0] ? item.images[0].image_url : "",
              name: item.name,
              price: item.tbt_price,
              sellerID: item.user.seller_id,
              location: item.location,
              id: item.id,
            })
          );
        }
      })
    );

    // console.log(tempProducts);
    setProductsArr(tempProducts);
  };

  useEffect(() => {
    if (productsData) {
      const pageUrl = productsData.data.first_page_url.split("=");
      // console.log(productsData.data.first_page_url, pageUrl);
      fetchOtherPages(
        productsData.data.total,
        productsData.data.per_page,
        pageUrl[0]
      );
    }
  }, [productsData]);

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
      {categoryData.productsData.slice(16, 24).length > 0 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={categoryData.fetchParams.name}
            products={categoryData.productsData.slice(16, 24)}
            type="cropProducts"
          />
        </div>
      )}
      {categoryData.productsData.slice(24, 32).length > 0 && (
        <div className="col-span-4 md:col-span-2 w-full ">
          <MultiProductsCard
            title={categoryData.fetchParams.name}
            products={categoryData.productsData.slice(24, 32)}
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
            title={"New Arrivals"}
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

  const firstLoad = sessionStorage.getItem("first-load");

  // gsap animation sequence for firstload modal
  useEffect(() => {
    let firstloadTL = gsap.timeline();

    firstloadTL
      .from(".firstloadModal", { scale: 0, duration: 1 })
      .to(".firstloadHeader", {
        opacity: 1,
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      })
      .from(".loaderText", { y: 0, x: 50 }, "-=0.5")
      .from(".firstloadImg", {
        y: -200,
        opacity: 0,
        ease: "elastic.out(1,0.3)",
        duration: 2,
      });
  }, []);

  return (
    <div className="min-h-[100vh] py-12 bg-agro-body">
      {showModal && !firstLoad && (
        <div className="overflow-hidden flex items-center justify-center modal h-screen backdrop-blur-md  min-w-screen fixed top-0 right-0 left-0 z-[5000000] p-5 sm:p-20  xl:p-40  ">
          <div className="bg-think-agro py-11 pl-10 md:pl-20  firstloadModal">
            <div className="flex items-center justify-between">
              <Image src={logoImg} className="" alt="Logo" />
              <div
                className="cursor-pointer p-2"
                onClick={() => {
                  sessionStorage.setItem("first-load", "true");
                  setShowModal(false);
                }}
              >
                <GrClose className="text-agro-green mr-20 " />
              </div>
            </div>
            <div className="mt-8 md:mt-0  flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-3xl md:text-4xl  xl:text-6xl leading-normal sm:leading-relaxed firstloadHeader">
                  Think Agro <br /> Commodities, <br />{" "}
                  <p className="font-bold loaderText"> Think TBT!</p>
                </h4>
                <button
                  onClick={() => {
                    sessionStorage.setItem("first-load", "true");
                    setShowModal(false);
                  }}
                  className="bg-agro-green rounded-[4px] font-bold text-white px-6 py-2 mt-12 hover:scale-110 transition-transform "
                >
                  Get Started
                </button>
              </div>
              <div>
                <Image src={cocoaImge} alt="Cocoa" className="firstloadImg" />
              </div>
            </div>
          </div>
        </div>
      )}
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
        {/* {categoryParams !== "All Categories" &&
        categoryParams !== "Others" &&
        categoryParams !== null
          ? categoryPage
          : homePage} */}
        {true && (
          // <div className=" w-full rounded-[10px] py-4 px-10 col-span-4 justify-self-center flex flex-col items-center ">
            <HomePageLoadingUI />
          // </div>
        )}
      </div>

      <div className="px-4 xl:px-[70px] 2xl:w-[1540px] mx-auto my-[60px]">
        <QuotationCard />
      </div>

      <div className="px-4 xl:px-[70px] 2xl:w-[1540px] mx-auto mb-[80px]">
        <TradeServices />
      </div>
    </div>
  );
};

export default Page;
