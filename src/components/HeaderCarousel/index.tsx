"use client";

import React from "react";

import styles from "./headerCarousel.module.css";
import PriButton from "../PriButton";
import Link from "next/link";

const HeaderCarousel = () => {
  return (
    <div className="w-full ">
      <div>
        <div className="bg-hero-carousel  bg-cover h-[138px] sm:h-[322px] ">
          <div
            className={`${styles.bestShopping} bg-[#000427] h-full lg:w-[427px] flex flex-col pl-6 lg:pl-11 justify-center gap-5 lg:gap-[30px]`}
          >
            <h4 className="text-white font-semibold  text-2xl sm:text3xl lg:text-[40px] leading-none overflow-clip">
              Shop the Best <br /> Seedling Deals
            </h4>
            <Link
              href="/web/home?category=Spices"
              className="w-24 sm:w-[141px] h-6 sm:h-11 text-xs sm:text-base bg-agro-yellow rounded-[4px] font-bold text-agro-black flex items-center justify-center"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 bg-white sm:rounded-b-[10px] lg:h-[90px] px-4 md:px-12 py-3">
          <div className="">
            <h4 className="font-bold   whitespace-nowrap text-sm md:text-lg">
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
            <h4 className="font-bold   whitespace-nowrap first-letter:text-sm md:text-lg">
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
