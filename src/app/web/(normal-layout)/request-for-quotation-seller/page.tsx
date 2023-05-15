"use client";
import React from "react";

import Select from "react-select";
import { AiOutlineSearch } from "react-icons/ai";
import BuyerLeadsCard from "@/components/BuyerLeadsCard";
import { buyerLeadsData } from "@/store/DummyData/buyerLeadsData";

const pages = () => {
  return (
    <main className="bg-agro-gray pt-[88px] pb-[160px] ">
      <div className="flex flex-col gap-5  px-[72px]">
        <h3 className="text-[40px] font-semibold">
          Request For Quotation List
        </h3>
        <p className="text-lg font-bold">Product Category</p>
        <div className="h-[47px] overflow-clip">
          <form action="" className="flex gap-4">
            <Select
              placeholder="Please choose a category"
              className=" w-[313px] h-full border-none"
            />
            <div className="flex">
              <input
                type="text"
                placeholder="Please choose a category"
                className=" w-[313px] h-full bg-white rounded-s-[4px] px-2 "
              />
              <span className="w-[54px] h-full rounded-e-[4px] bg-agro-yellow flex items-center justify-center">
                <AiOutlineSearch className="text-xl " />
              </span>
              <button className="ml-7 bg-none border-agro-orange border h-full w-[140px] font-medium text-agro-orange text-sm rounded-[44px]">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="relative mt-16 pb-20 pt-5 px-[72px] z-[1]">
        <div className="h-full w-[85%] absolute bg-agro-blue top-0 right-0  -z-[10]" />
        <h4 className="text-[40px] mb-[25px] font-semibold  text-agro-black z-[100]">
          Buyer Leads
        </h4>
        <div className="z-10 grid grid-cols-2 gap-x-5 gap-y-7  w-full">
          {buyerLeadsData.map((item) => (
            <BuyerLeadsCard
              id={item.id}
              key={item.key}
              state={item.state}
              category={item.category}
              name={item.name}
              quantity={item.quantity}
              specs={item.specs}
              time={item.time}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default pages;
