"use client";

import React from "react";

import styles from "./headerCarousel.module.css";
import PriButton from "../PriButton";
import Link from "next/link";

const HeaderCarousel = () => {
  return (
    <div className="w-full">
      <div className="bg-hero-carousel  bg-cover h-[322px] ">
        <div
          className={`${styles.bestShopping} bg-[#000427] h-full w-[427px] flex flex-col pl-11 justify-center gap-[30px]`}
        >
          <h4 className="text-white font-semibold text-[40px] leading-none overflow-clip">
            Shop the Best <br /> Seedling Deals
          </h4>
          <PriButton
            text={"Shop Now"}
            className="w-[141px] h-11"
            onClick={function () {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between bg-white rounded-b-[10px] h-[90px] px-12 py-3">
        <div>
          <h4 className="font-bold text-lg">SUBMIT REQUESTS FOR QUOTATION</h4>
          <Link
            href=""
            className="font-medium text-sm text-agro-green border-b-2 border-b-agro-green"
          >
            I&apos;m a Buyer
          </Link>
        </div>
        <div className="h-full border-r border-r-gray2" />
        <div>
          <h4 className="font-bold text-lg">VIEW REQUESTS FOR QUOTATION</h4>
          <Link
            href=""
            className="font-medium text-sm text-agro-green border-b-2 border-b-agro-green"
          >
            I&apos;m a Seller
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
