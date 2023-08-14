"use client";

import React, { useEffect } from "react";

import styles from "./headerCarousel.module.css";
import PriButton from "../PriButton";
import Link from "next/link";
import { headerCarouselData } from "@/store/DummyData/headerCarouselData";
import { useSearchParams } from "next/navigation";

const HeaderCarousel = () => {
  const search = useSearchParams();
  const category = search.get("category");

  const TextContent = "";

  let isHomePage =
    category === "All Categories" || category === "Others" || !category;

  const homeStyle = {
    panelBg: "bg-[#000427]",
    bg: "bg-hero-carousel",
  };
  if (isHomePage) {
    // href = `/web/home`;
  }

  const categoryData = headerCarouselData.find(
    (item) => item.name === category
  );

  let contentStyle = ` font-semibold text-sm sm:text-2xl sm:text3xl lg:text-[40px] sm:leading-none overflow-clip`;
  let content = (
    <h4 className={`${contentStyle} text-white`}>
      Shop the Best <br /> Seedling Deals
    </h4>
  );

  if (categoryData) {
    switch (category) {
      case "Crop Products":
        content = (
          <h4 className={`${contentStyle} text-black`}>
            Purchase the <br /> best{" "}
            <span className="text-agro-green">Crops</span> from <br /> Africa on
            TBT
          </h4>
        );
        break;
      case "Spices":
        content = (
          <h4 className={`${contentStyle} text-black`}>
            Purchase the <br /> best Spices <br /> from Africa on TBT
          </h4>
        );
        break;
      case "Fruits":
        content = (
          <h4 className={`${contentStyle} text-agro-yellow`}>
            Purchase the <br /> best <span className="text-white"> Fruits</span>{" "}
            from <br /> Africa on TBT
          </h4>
        );
        break;
      case "Vegetables":
        content = (
          <h4 className={`${contentStyle} text-black`}>
            Purchase the best <br />{" "}
            <span className="text-agro-green"> Vegetables </span> from <br />{" "}
            Africa on TBT
          </h4>
        );
        break;
      case "Plant Seedlings":
        content = (
          <h4 className={`${contentStyle} text-black`}>
            Purchase the best <br />{" "}
            <span className="text-agro-green">Seedlings </span> from <br />{" "}
            Africa on TBT
          </h4>
        );
        break;
      case "Fertilizers":
        content = (
          <h4 className={`${contentStyle} text-white`}>
            Purchase the best <br />{" "}
            <span className="text-agro-yellow"> Fertilizers </span> from <br />{" "}
            Africa on TBT
          </h4>
        );
        break;

      default:
        content = (
          <h4 className={`${contentStyle} text-white`}>
            Shop the Best <br /> Seedling Deals
          </h4>
        );
    }
  }

  // console.log(categoryData);

  return (
    <div className="w-full ">
      <div>
        <div
          className={` 
         
         h-[130px] sm:h-[322px] rounded-t-[10px] overflow-hidden flex w-full
          relative 
          `}
        >
          <div
            className={`${styles.bestShopping} ${
              isHomePage
                ? homeStyle.panelBg
                : categoryData?.panelBg ?? homeStyle.panelBg
            }  h-full lg:w-[427px flex flex-col pl-4 w-full lg:pl-11 justify-center gap-5 lg:gap-[30px] 
            absolute left-0 top-0
            `}
          >
            {content}
            <Link
              href="/web/home?category=Spices"
              className={`w-24 sm:w-[141px] h-6 sm:h-11 text-xs sm:text-base ${
                category === "Crop Products" || category === "Vegetables"
                  ? "bg-agro-green text-white"
                  : "bg-agro-yellow text-black"
              } rounded-[4px] font-bold flex items-center justify-center`}
            >
              Shop Now
            </Link>
          </div>
          <div className="h-[130px] sm:h-[322px]  w-[250px]] :w-[200px] md:w-[500px] xl:w-[450px]"></div>
          <div
            className={`${
              isHomePage ? homeStyle.bg : categoryData?.bg ?? homeStyle.bg
            } bg-cover bg-no-repeat bg h-[130px] sm:h-[322px]  w-full  
            `}
          ></div>
        </div>
        {
          <div
            className={`${
              !category ? "hidden sm:flex" : ""
            } flex items-center justify-between gap-4 bg-white sm:rounded-b-[10px] lg:h-[90px] px-4 md:px-12 py-3`}
          >
            <div className="">
              <h4 className="font-bold   whitespace-nowrap text-[8px] sm:text-sm md:text-lg">
                SUBMIT REQUESTS FOR QUOTATION
              </h4>
              <Link
                href="/dashboard/buyer/request-for-quotation-buyer"
                className="font-medium  text-xs md:text-sm text-agro-green border-b-2 border-b-agro-green"
              >
                I&apos;m a Buyer
              </Link>
            </div>
            <div className=" h-10 lg:h-full border-r border-r-gray2" />
            <div>
              <h4 className="font-bold   whitespace-nowrap text-[8px] sm:text-sm md:text-lg">
                VIEW REQUESTS FOR QUOTATION
              </h4>
              <Link
                href="/web/request-for-quotation-seller"
                className="font-medium  text-xs md:text-sm text-agro-green border-b-2 border-b-agro-green"
              >
                I&apos;m a Seller
              </Link>
            </div>
          </div>
        }
        {/* <div className="flex items-center gap-[10px] justify-center mt-4">
          <span className="w-[10px] h-[10px] rounded-full bg-agro-black" />
          <span className="w-[10px] h-[10px] rounded-full bg-gray2" />
          <span className="w-[10px] h-[10px] rounded-full bg-gray2" />
          <span className="w-[10px] h-[10px] rounded-full bg-gray2" />
        </div> */}
      </div>
    </div>
  );
};

export default HeaderCarousel;
