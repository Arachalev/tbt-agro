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
    <div className="bg-white flex flex-col sm:flex-row  gap-8  justify-between px-8 py-4 rounded-[10px] w-full 2xl:w-[625px] ">
      <div className="flex flex-col gap-1 lg:gap-3 text-agro-black sm:text-base w-fit border-4 ">
        <p className="text-[#ABABAB] text-sm  mb-1 w-fit border-4 ">{id}</p>
        <p className=" w-fit border-4">{state}</p>
        <p className="font-bold w-fit border-4    ">{category}</p>
        <p className="w-fit border-4"> {name}</p>
        <p className="w-fit border-4">Quantity: {quantity}</p>
        <p className="w-[250px]    border-4 overflow-clip text-ellipsis whitespace-nowrap  ">
          Specifications: {specs}
        </p>
        <p className="w-fit border-4 text-[#ABABAB] text-sm  font-medium mt-3  ">
          {time}
        </p>
      </div>
      <PriButton
        text="Quote Now"
        onClick={() => {}}
        variant="secondary"
        className="self-end mb-4 min-w-[110px] "
      />
    </div>
  );
};

export default BuyerLeadsCard;
