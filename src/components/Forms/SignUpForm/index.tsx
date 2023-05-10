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

const SignUpForm = () => {
  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      <form className=" flex flex-col gap-7 items-center  w-fit">
        <div className="grid grid-cols-2 items-center gap-4">
          <label className="text-sm font-bold text-end  " htmlFor="country">
            Country/Region
          </label>
          <Select className="w-[309px]" options={options} />
        </div>
        {signUpData.map((item) => (
          <CustomInput
            label={item.label}
            placeholder={item.placeholder}
            key={item.label}
          />
        ))}

        <div className="grid grid-cols-2 items-center gap-4">
          <label className="text-sm font-bold text-end ">Phone Number:</label>
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

        <div className="flex gap-2 self-end w-[309px]">
          <input type="checkbox" className="min-w-[16px] h-4" name="" id=" " />
          <p className=" text-sm  ">
            While creating an account: I agree to abide by the
            <Link className="font-semibold text-agro-green" href="">
              {" "}
              tbt.com.ng Membership Agreement.
            </Link>{" "}
            Willing to receive emails from tbt.com.ng members and services.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-2 col-start-2">
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

export default SignUpForm;
