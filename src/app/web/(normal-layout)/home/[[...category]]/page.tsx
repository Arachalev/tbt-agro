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
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { selectProductsCategory } from "@/store/redux/features/productsCategory";
import { updateProductCategory } from "@/store/redux/features/productsCategory";
import { gsap } from "gsap";
import { AiOutlineSearch } from "react-icons/ai";
import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import { SlArrowDown } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { selectAuthToken } from "@/store/redux/services/authSlice/authSlice";
import { navProfileData } from "@/store/DummyData/navProfileData";
import NavProfile from "@/components/NavProfile";

const Page = () => {
  // const { data } = useGetTopRatedProductsQuery("");
  const searchParams = useSearchParams();
  const categoryParams = searchParams.get("category");

  const [showModal, setShowModal] = useState(true);
  const [productsArr, setProductsArr] = useState<any[]>([]);
  const [categoryData, setCategoryData] = useState<{
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
    productsData: [],
    fetchParams: {
      skip: true,
      id: 1,
      name: "",
    },
  });
  const [showProfileSettings, setShowProfileSettings] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();
  const reduxProductsCategory = useAppSelector(selectProductsCategory);
  const authentication = useAppSelector(selectAuthToken);
  const router = useRouter();

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
    const category = reduxProductsCategory.find(
      (item) => item.name === categoryParams
    );

    if (category?.id) {
      setCategoryData((state) => ({
        productsData: state.productsData,
        fetchParams: {
          skip: false,
          id: category.id,
          name: category.name,
        },
      }));
    } else {
      setCategoryData((state) => ({
        productsData: state.productsData,
        fetchParams: {
          skip: false,
          id: state.fetchParams.id,
          name: categoryParams ? categoryParams : state.fetchParams.name,
        },
      }));
    }
  }, [categoryParams, reduxProductsCategory]);

  useEffect(() => {
    if (categories?.data) {
      const categoryLinks = categories.data.map((item: any) => ({
        name: item.name,
        icon: item.icon,
        id: item.id,
      }));

      dispatch(updateProductCategory(categoryLinks));
    }
  }, [categories?.data, dispatch]);

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

  // product category pages
  let categoryPage = (
    <div className="m-auto  grid justify-center justify-items-center md:grid-cols-4 sm:gap-3 md:gap-5  w-full  2xl:w-[1400px] h-full">
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

  // Home page content
  let homePage = (
    <div className="m-auto  grid justify-items-center md:grid-cols-4 sm:gap-3 md:gap-5  w-full  2xl:w-[1400px] h-full">
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

  // Search field handler

  const {
    value,
    hasError,
    enteredInputHandler,
    onBlurHandler,
    onFocusHandler,
    reset,
  } = useInput((val) => (val ? true : false));

  // Search form submit handler
  const searchHandler = async (e: any) => {
    e.preventDefault();

    value.value && router.push(`/web/search?params=${value.value}`);
  };

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
    <div className="min-h-[100vh] pt-12 sm:py-12 bg-agro-body">
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
      <div className=" w-full mb-4 sm:hidden px-4 flex gap-2 items-center -translate-y-4">
        <CgProfile className="text-[#C0C0C0] text-2xl" />
        {authentication.token ? (
          <SlArrowDown
            className="text-[#C0C0C0] text-2xl"
            onClick={() => setShowProfileSettings((state) => !state)}
          />
        ) : (
          <Link
            href="/web/sign-in"
            className=" text-agro-yellow whitespace-nowrap text-sm font-medium"
          >
            Sign in
          </Link>
        )}

        <div className="flex items-center w-full">
          <input
            onChange={enteredInputHandler}
            value={value.value}
            onFocus={onFocusHandler}
            type="text"
            className="w-full pl-8 h-10 placeholder:text-sm lg:placeholder:text-base outline-none rounded-s-lg"
            placeholder="what are you looking for..."
          />
          <span
            onClick={searchHandler}
            className="bg-agro-yellow h-10 items-center justify-center flex w-11 rounded-e-md cursor-pointer "
          >
            <AiOutlineSearch className="text-lg" />
          </span>
        </div>
      </div>

      <div className="relative sm:px-4 xl:px-[70px] sm:pb-12 flex flex-col md:flex-row md:mx-auto gap-5 2xl:w-[1540px] ">
        <ProductsCategoryCard
          productsCategoryData={
            reduxProductsCategory.length > 1
              ? reduxProductsCategory
              : [{ name: "Loading...", icon: "https://picsum.photos/200/300" }]
          }
        />
        <HeaderCarousel />

        {showProfileSettings && (
          <div className="absolute -top-1 left-4 z-[100]">
            <NavProfile
              closeProfile={() => setShowProfileSettings(false)}
              profileData={navProfileData}
            />
          </div>
        )}
      </div>
      <div className="bg-agro-floral-white sm:bg-agro-blue sm:px-4 xl:px-[70px] py-11">
        {categoryParams !== "All Categories" &&
        categoryParams !== "Others" &&
        categoryParams !== null
          ? categoryPage
          : homePage}
        {productsLoading && <HomePageLoadingUI />}
      </div>

      <div className="sm:px-4 xl:px-[70px] 2xl:w-[1540px] mx-auto sm:my-[60px]">
        <QuotationCard />
      </div>

      <div className="px-4 py-16 sm:py-0 bg-agro-floral-white sm:bg-none xl:px-[70px] 2xl:w-[1540px] mx-auto sm:mb-[80px]">
        <TradeServices />
      </div>
    </div>
  );
};

export default Page;
