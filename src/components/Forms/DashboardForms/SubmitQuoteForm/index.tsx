"use client";
import React from "react";

import Image from "next/image";
import PriButton from "@/components/PriButton";
import upload from "../../../../../public/icons/upload.svg";

const SubmitQuoteForm = () => {
  return (
    <div className="">
      <form action="" className="flex flex-col gap-6 text-agro-black">
        <div className="flex flex-col gap-6 bg-white rounded-[10px] p-5 ">
          <h4 className="text-lg font-bold ">Information & Product Details</h4>

          <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Mercy"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Osho"
              />
            </div>
            <div className="">
              <label className="text-sm font-bold text-end ">
                Phone Number:
              </label>
              <div className="mt-2 flex items-center gap-6">
                <input
                  className="w-[90px] h-12 pl-3 rounded-[4px] border border-gray2 bg-gray3"
                  type="text"
                  placeholder="+234"
                />
                <input
                  className="w-full h-12 pl-3 rounded-[4px] border border-gray2 bg-gray3"
                  type="text"
                  placeholder="08185622857"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Mercy"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Company&apos;s Name
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Osho"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Name of Product
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Osho"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
            <div className=" col-span-2">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Products Location
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Mercy"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Available Quantity
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Osho"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
            <div className=" col-span-2">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Available Quality/Specification
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Mercy"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Minimum Purchase Quantity *
              </label>
              <input
                type="text"
                className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Osho"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Sale Price *
              </label>
              <input
                type="text"
                className="w-[209px] h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="0"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                TBT Price *
              </label>
              <input
                type="text"
                className="w-[209px] h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="0"
              />
            </div>
          </div>

          <div className="text-agro-black">
            <h4 className="text-sm font-semibold">Images *</h4>
            <p className="text-xs">
              Your image needs to be at least 300×300 pixels, preferrably a
              square image.
            </p>
          </div>
          <div>
            <label
              htmlFor="file"
              className="flex items-center gap-2 bg-[#D4E6ED] h-16 px-5 rounded-[4px]"
            >
              <Image src={upload} alt="upload icon" />
              <p className="text-gray2">
                Drag & Drop your product images or Browse.
              </p>
            </label>
            <input type="file" name="file" id="file" className="hidden" />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Other Information<span>*</span>
            </label>
            <textarea
              className="w-full h-[152px] rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5 pt-4"
              placeholder="Enter information you think might be useful."
            />
          </div>
        </div>
        <PriButton
          text={"Submit Quote"}
          className="w-[206px] h-12 rounded-md text-xl font-bold self-end"
          onClick={function () {
            throw new Error("Function not implemented.");
          }}
        />
      </form>
    </div>
  );
};

export default SubmitQuoteForm;
