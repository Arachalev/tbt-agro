"use client";

import React from "react";

import Link from "next/link";
import PriButton from "@/components/PriButton";
import Select from "react-select";
import CustomInput from "@/components/CustomInput";
import signUpData from "@/store/DummyData/FormData/signUpData";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const QuotationForm = () => {
  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 flex flex-col items-center">
      <form className=" flex flex-col gap-7 items-center w-fit  border-4">
        <CustomInput label="Contact Person:" placeholder="Please enter" />

        <div className=" flex items-center gap-4">
          <label className="text-sm font-bold text-end  w-[200px]">
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
          label="Company/Business Name:"
          placeholder="Must be a legally registered business"
        />
        <div className=" flex items-center gap-4">
          <label
            className="text-sm font-bold text-end w-[200px]"
            htmlFor="country"
          >
            Country/Region
          </label>
          <Select className="w-[309px]" options={options} />
        </div>
        <CustomInput label="State / Province:" placeholder="State" />
        <CustomInput label="City:" placeholder="City" key="City" />
        <CustomInput label="Name of Commodity" placeholder="Rice" />
        <CustomInput
          label="Quantity (Bags, Kg, MT):"
          placeholder="Please Enter"
        />
        <div className=" grid grid-cols-2 items-center gap-4 w-[700px] border-4">
          <label
            className="text-sm font-bold text-end w-[150px] self-start justify-self-end border-4  "
            htmlFor="message"
          >
            Other Information:
          </label>
          <textarea
            className="min-w-[485px]  h-[216px] pl-3 pt-3 rounded-[4px] bg-white"
            placeholder="Custom message"
          />
        </div>

        <PriButton
          text="Submit"
          type="submit"
          onClick={() => {}}
          className="w-[164px] h-[50px] rounded-[6px] text-xl font-bold mt-5 ml-[228px] self-center  "
        />
      </form>
    </div>
  );
};

export default QuotationForm;
