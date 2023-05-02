"use client";

import React from "react";

import PriButton from "../PriButton";
interface BuyerLeadsCardProps {
  id: string;
  state: string;
  category: string;
  name: string;
  quantity: string;
  specs: string;
  time: string;
}

const BuyerLeadsCard: React.FC<BuyerLeadsCardProps> = ({
  id,
  state,
  category,
  name,
  quantity,
  specs,
  time,
}) => {
  return (
    <div className="bg-white flex justify-between px-8 py-4 rounded-[10px] w-[638px] ">
      <div className="flex flex-col gap-3 text-agro-black  ">
        <p className="text-[#ABABAB] text-sm mb-1 ">{id}</p>
        <p className=" ">{state}</p>
        <p className="font-bold  ">{category}</p>
        <p> {name}</p>
        <p>Quantity: {quantity}</p>
        <p className="w-full text-ellipsis whitespace-nowrap  ">{specs}</p>
        <p className="text-[#ABABAB] font-medium mt-3  ">{time}</p>
      </div>
      <PriButton text="Quote Now" onClick={() => {}} variant="secondary" className="self-end mb-4  " />
    </div>
  );
};

export default BuyerLeadsCard;
