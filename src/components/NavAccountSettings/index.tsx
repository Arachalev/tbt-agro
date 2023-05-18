"use client";

import React from "react";

import PriButton from "../PriButton";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoIosInformationCircleOutline } from "react-icons/io";
import styles from "./styles.module.css";

interface NavAccountSettingsProps {
  hideSettings: () => void;
}

const NavAccountSettings = ({ hideSettings }: NavAccountSettingsProps) => {
  return (
    <div className="bg-white rounded-[4px] p-5 h-[368px] w-[251px]">
      <div
        onClick={() => hideSettings()}
        className="flex  items-center cursor-pointer  justify-end gap-2 text-agro-black"
      >
        <p className="text-sm font-medium">English - NGN </p>
        <SlArrowUp className="text-xs" />
      </div>
      <hr className="mt-3 mb-7" />
      <div>
        <h4 className="text-sm font-bold mb-5">Region Settings</h4>
        <div>
          <form action="" className="flex flex-col gap-2">
            <div>
              <label htmlFor="" className="text-sm text-[#ABABAB] mb-2">
                Language
              </label>
              <div className="flex items-center relative w-full h-fit">
                <select
                  className={`${styles.select} w-full h-8 border px-3 text-sm font-semibold border-[#ABABAB] rounded-[4px]`}
                  name=""
                  id=""
                >
                  <option value="option-1">Option 1</option>
                  <option value="option-2">Option 2</option>
                  <option value="option-3">Option 3</option>
                </select>
                <SlArrowDown
                  className={`${styles.arrow} h-full absolute right-3 top-0 text-xs text-[#ABABAB] `}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-sm text-[#ABABAB] mb-2">
                Currency
              </label>
              <div className="flex items-center relative w-full h-fit">
                <select
                  className={`${styles.select} w-full h-8 border px-3 text-sm font-semibold border-[#ABABAB] rounded-[4px]`}
                  name=""
                  id=""
                >
                  <option value="option-1">NGN - Nigerian Naira</option>
                  <option value="option-2">Option 2</option>
                  <option value="option-3">Option 3</option>
                </select>
                <SlArrowDown
                  className={`${styles.arrow} h-full absolute right-3 top-0 text-xs text-[#ABABAB]`}
                />
              </div>
            </div>
            <div className="flex gap-[6px]">
              <IoIosInformationCircleOutline className="text-[#F48924] text-5xl h-fit " />
              <p className="text-[10px] ">
                The price for this currency is subject to change with foreign
                exchange rate. For reference only.
              </p>
            </div>
            <PriButton
              text="Save"
              className=" w-[103px] h-[31px] text-sm self-end mt-3 "
              onClick={() => {
                hideSettings();
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavAccountSettings;
