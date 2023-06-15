"use client";

import React from "react";
import Link from "next/link";
import { useGetCartSummaryQuery } from "@/store/redux/services/cartSlice/cartApiSlice";

// interface OrderSummaryProps {
//   cost: number;
//   shippingFee: number;
// }

const OrderSummary = () => {
  const { data, isLoading, error } = useGetCartSummaryQuery("");

  const summaryData = data?.data;

  console.log(summaryData);
  return (
    <div className=" h-fit min-w-[310px] px-5 pt-6 pb-8 flex flex-col bg-white rounded-[10px] overflow-clip">
      <h4 className="font-bold text-agro-black mb-5">Order Summary</h4>
      <p className=" font-medium text-sm flex items-center justify-between mb-4">
        Items: <span>{summaryData ? summaryData.item_count : 0}</span>
      </p>
      <p className=" font-medium text-sm flex items-center justify-between">
        Total :{" "}
        <span>
          ₦{summaryData ? summaryData.sub_total.toLocaleString() : "----"}
        </span>
        {/* Shipping fee: <span>₦{shippingFee}</span> */}
      </p>
      <Link
        href="/dashboard/buyer/confirmed-order"
        className="self-center mt-[62px] bg-agro-yellow rounded-[4px] font-bold text-agro-black w-[137px] h-8 text-sm flex items-center justify-center"
      >
        Modify Cart
      </Link>
    </div>
  );
};

export default OrderSummary;
