"use client";
import React from "react";
import styles from "./styles.module.css";
import PriButton from "../PriButton";

const QuotationCard = () => {
  return (
    <div>
      <div className="flex items-end leading-none gap-2 m-0 font-semibold mb-12 overflow-clip">
        <h4 className="text-[40px] m-0 leading-none overflow-clip">
          Request for Quotation{" "}
        </h4>
        <p className="text-lg m-0 leading-[1.1] overflow-clip">
          Get customized quotes quickly
        </p>
      </div>

      <div className="flex gap-5 items-center h-[488px]">
        <div
          className={` bg-quotation  h-full bg-no-repeat bg-cover w-1/2 rounded-[10px]  `}
        >
          <div
            className={`${styles.quotation} bg-black h-full w-[427px] flex flex-col gap-9 pl-12 justify-center    `}
          >
            <h4 className="text-[34px] font-semibold text-agro-yellow leading-none">
              Global Sourcing <br /> Marketplace
            </h4>
            <button className="text-black text-center text-sm font-semibold bg-white  w-[109px] h-[33px] rounded-[4px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="bg-white px-12  pt-16 w-1/2 h-full rounded-[10px]">
          <h4 className=" text-4xl leading-none font-semibold mb-12 overflow-clip">
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
            <PriButton
              className="col-span-2 py-1 px-4 mt-3 justify-self-center"
              text={"Request for Quotation"}
              onClick={function () {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotationCard;
