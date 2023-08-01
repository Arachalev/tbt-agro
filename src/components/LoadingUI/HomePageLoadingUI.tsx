"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import placeholder from "../../../public/images/placeholder.png";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import getUniqueID from "@/hooks/getUniqueID";
import { gsap } from "gsap";

const HomePageLoadingUI = () => {
  const deviceWidth = useAppSelector(selectDeviceWith);

  const imgHeight = deviceWidth.width < 640 ? 60 : 114;
  const imgWidth = deviceWidth.width < 640 ? 60 : 132;

  useEffect(() => {
    let homepageTL = gsap.timeline();

    homepageTL
      .from(".skeletonTexts", {
        opacity: 0.4,
        backgroundColor: "#0000",
        duration: 1.5,
        ease: "expo.inout",
        // repeat: -1,
      })
      .from(
        ".skeletonImg",
        {
          opacity: 0.4,
            repeat: -1,
          duration: 1.5,
          ease: "expo.inout",
        },
        "-=1.5"
      );
  });

  const products = new Array(8).fill("");
  const newProductsStyling = `gap-2 lg:gap-4 w-fit  md:w-full flex flex-row md:grid md:grid-rows-2 md:grid-flow-col`;
  const cropProductsStyling = `gap-2 lg:gap-4 w-fit  md:w-full grid grid-flow-col grid-rows-2`;

  const type = "cropProducts";

  const content = (
    <div className="p-2 sm:p-5 rounded-[10px] bg-white w-full h-full ">
      <div className="h-2  w-20  mb-2 bg-gray-400 skeletonTexts" />
      <div
        className={
          type === "cropProducts" ? cropProductsStyling : newProductsStyling
        }
      >
        {products.map(() => {
          return (
            <div key={getUniqueID()} className="">
              <Image
                height={imgHeight}
                width={imgWidth}
                className={`object-contain  rounded-[10px] h-[${imgHeight}px] w-[${imgWidth}px] skeletonImg`}
                src={placeholder}
                alt=""
              />
              <div className="h-2 w-10 bg-gray-300 mt-[6px] skeletonTexts" />
              <div className="h-2 w-20 my-1 bg-gray-300 skeletonTexts" />

              <div className="h-2 w-24 mb-1 bg-gray-200 skeletonTexts" />
              <div className="h-2 w-24 bg-gray-300 skeletonTexts" />
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className="m-auto  grid justify-center justify-items-center md:grid-cols-4 gap-3 md:gap-5  w-full  2xl:w-[1400px] h-full">
      <div className="col-span-4 md:col-span-2 w-full ">{content}</div>
      <div className="col-span-4 md:col-span-2 w-full ">{content}</div>
      <div className="col-span-4 md:col-span-2 w-full ">{content}</div>
      <div className="col-span-4 md:col-span-2 w-full ">{content}</div>
    </div>
  );
};

export default HomePageLoadingUI;
