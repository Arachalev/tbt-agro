"use client";

import React from "react";

import PriButton from "@/components/PriButton";
import CustomInput from "@/components/CustomInput";
import sellOnTbt from "@/store/DummyData/FormData/sellOnTbt";

const BuyOnTbtForm = () => {
  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      <form className=" flex flex-col gap-7 items-center  w-fit">
        {sellOnTbt.map((item) => (
          <CustomInput
            label={item.label}
            placeholder={item.placeholder}
            key={item.label}
          />
        ))}

        <div className="grid sm:grid-cols-[200px_1fr] items-center gap-4">
          <label className="text-sm font-bold sm:text-end ">
            Phone Number:
          </label>
          <div>
            <input
              className="w-[90px] h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              placeholder="+234"
            />
            <input
              className="ml-5 h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              placeholder="08185622857"
            />
          </div>
        </div>
        <CustomInput
          label="Location"
          placeholder="Please enter your state"
          key="Location"
        />
        <div className="w-full grid sm:grid-cols-[200px_164px]  gap-4">
          <div className="col-span-2 justify-self-center sm:justify-self-start sm:col-start-2">
            <PriButton
              text="Submit"
              type="submit"
              onClick={() => {}}
              className="w-[164px] h-[50px] rounded-[6px] text-xl font-bold mt-5   "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyOnTbtForm;
