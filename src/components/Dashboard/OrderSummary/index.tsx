"use client";

import React from "react";

import PriButton from "@/components/PriButton";
import Link from "next/link";

interface OrderSummary {
  cost: number;
  shippingFee: number;
}

const OrderSummary = ({ cost, shippingFee }: OrderSummary) => {
  return (
    <div className="w-[310px] px-5 pt-6 pb-8 flex flex-col bg-white rounded-[10px] overflow-clip">
      <h4 className="font-bold text-agro-black mb-5">Order Summary</h4>
      <p className=" font-medium text-sm flex items-center justify-between mb-4">
        Items: <span> ₦{cost} </span>
      </p>
      <p className=" font-medium text-sm flex items-center justify-between">
        Shipping fee: <span>₦{shippingFee}</span>
      </p>
      <Link href="" className="self-center mt-[62px]">
        <PriButton
          className="w-[137px] h-8 text-sm "
          text={"Place Your Order"}
          onClick={function () {
            throw new Error("Function not implemented.");
          }}
        />
      </Link>
    </div>
  );
};

export default OrderSummary;
