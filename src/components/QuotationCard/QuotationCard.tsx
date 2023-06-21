"use client";
import React from "react";
import styles from "./styles.module.css";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import Link from "next/link";

const QuotationCard = () => {
  const deviceWidth = useAppSelector(selectDeviceWith);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center lg:items-end leading-none gap-2 m-0 font-semibold mb-12 overflow-clip">
        <h4 className="text-3xl xl:text-[40px] m-0 leading-none overflow-clip">
          Request for Quotation{" "}
        </h4>
        <p className="lg:text-lg m-0 leading-[1.1] overflow-clip">
          Get customized quotes quickly
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-center lg:h-[488px]">
        <div
          className={` bg-quotation  h-full w-full lg:w-1/2  bg-no-repeat bg-cover rounded-[10px]  `}
        >
          <div
            className={`${
              deviceWidth.width > 640 ? styles.quotation : ""
            } bg-black h-80 lg:h-full w-full lg:w-[427px] flex flex-col gap-4 lg:gap-9 pl-4 lg:pl-12 justify-center    `}
          >
            <h4 className="text-2xl xl:text-[34px] font-semibold text-agro-yellow leading-none">
              Global Sourcing <br /> Marketplace
            </h4>
            <Link
              href="/web/about-us"
              className="text-black flex items-center justify-center text-sm font-semibold bg-white  w-[109px] h-[33px] rounded-[4px]"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="bg-white p-4 lg:p-0 lg:px-12 lg:pt-16 w-full lg:w-1/2 h-full rounded-[10px]">
          <h4 className=" text-xl sm:text-2xl lg:text-4xl leading-none font-semibold mb-12 overflow-clip">
            One Request, <br /> Multiple Quotes
          </h4>
          <form action="" className="grid grid-cols-2 gap-x-9 gap-y-5">
            <input
              type="text"
              className=" col-span-2 border-2 rounded-[4px] h-12 pl-6 placeholder:text-sm"
              placeholder="Enter Product Name"
            />
            <input
              type="text"
              className="border-2 rounded-[4px] h-12 pl-6 placeholder:text-sm "
              placeholder="Quantity"
            />
            <input
              type="text"
              placeholder="Kg"
              className="border-2 rounded-[4px] h-12 pl-6 placeholder:text-sm"
            />
            <Link
              href="/web/request-for-quotation-buyer"
              className="col-span-2 py-1 px-4 mt-3 justify-self-center bg-agro-yellow rounded-[4px] font-bold text-agro-black"
            >
              Request for Quotation
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotationCard;
