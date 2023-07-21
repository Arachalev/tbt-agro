"use client";

import React from "react";
import Link from "next/link";

import PriButton from "../PriButton";

interface BuyerLeadsCardProps {
  id: string;
  state: string;
  category: string;
  name: string;
  quantity: string;
  specs: string;
  time?: string;
  rfq_id: string;
}

const BuyerLeadsCard: React.FC<BuyerLeadsCardProps> = ({
  id,
  rfq_id,
  state,
  category,
  name,
  quantity,
  specs,
  // time,
}) => {
  return (
    <div className="bg-white flex flex-col sm:flex-row  gap-8 sm:gap-0 justify-between px-8 py-4 rounded-[10px] w-full 2xl:w-[625px] ">
      <div className="flex flex-col gap-1 lg:gap-3 text-agro-black sm:text-base w-fit  ">
        <p className="text-[#ABABAB] text-sm  mb-1 w-fit  ">RFQ ID: {rfq_id}</p>
        <p className=" w-fit ">{state}</p>
        <p className="font-bold w-fit     ">{category}</p>
        <p className="w-fit "> {name}</p>
        <p className="w-fit ">Quantity: {quantity}</p>
        <p className=" w-[250px]   overflow-clip text-ellipsis whitespace-nowrap  ">
          Specifications: {specs}
        </p>
        {/* <p className="w-fit  text-[#ABABAB] text-sm  font-medium mt-3  ">
          {time}
        </p> */}
      </div>
      <Link
        href={`/dashboard/seller/submit-quote/${id}`}
        className="self-end mb-4 min-w-[110px] border-agro-yellow border bg-white h-[47px] w-[175px] font-medium text-agro-yellow text-sm rounded-[44px] flex items-center justify-center"
      >
        Quote Now
      </Link>
    </div>
  );
};

export default BuyerLeadsCard;
