"use client";

import React from "react";

import PriButton from "@/components/PriButton";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import paymentOptions from "../../../../public/images/paymentOptions.svg";

const PaymentMethod = () => {
  return (
    <div className="rounded-[10px] bg-white w-full 2xl:w-[966px] ">
      <div className="flex items-center justify-between pb-4 pt-6 px-8 border-b border-b-gray2 ">
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="text-agro-green text-xl  " />{" "}
          <p className="font-semibold  text-sm sm:text-base text-agro-black">
            1. PAYMENT METHOD
          </p>
        </div>
        <button className="font-semibold  text-sm sm:text-base text-agro-green">
          CHANGE
        </button>
      </div>
      <div className="pl-4 sm:pl-8 xl:pl-16 pr-8 py-6 h-[236px] text-agro-black flex flex-col gap-4 w-full items-center  ">
        <div className="self-start">
          <p className="font-bold  ">How do you want to pay for your order?</p>
          <div className="mt-8">
            <Image
              className="ml-8"
              src={paymentOptions}
              alt={"payment options"}
            />
          </div>
        </div>
        <div className="xl:ml-[50px] xl:mr-[125px]">
          <p className="font-bold">Pay with Cards, Bank Transfer or USSD</p>
        </div>
        <div className=" self-end ">
          <PriButton
            text={"Next Step"}
            className="min-w-[90px] h-8"
            onClick={function () {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
