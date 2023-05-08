"use client";
import React from "react";

import Image from "next/image";
import PriButton from "@/components/PriButton";
import upload from "../../../../../public/icons/upload.svg";

const AddProductForm = () => {
  return (
    <div className="">
      <form action="" className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 bg-white rounded-[10px] p-5 ">
          <div className="text-agro-black">
            <h4 className="text-lg font-bold">Product Details</h4>
            <p className="text-sm">Basic Product Details.</p>
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
              Name of Product <span>*</span>
            </label>
            <input
              type="text"
              className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
              placeholder="Name of Product"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Product Location <span>*</span>
            </label>
            <input
              type="text"
              className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
              placeholder="Please enter the location of the product"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Sale Price <span>*</span>
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
                TTB Price <span>*</span>
              </label>
              <input
                type="text"
                className="w-[209px] h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Product Description <span>*</span>
            </label>
            <textarea
              className="w-full h-[152px] rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5 pt-4"
              placeholder="Enter product description."
            />
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Quantity <span>*</span>
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
                Select Unit <span>*</span>
              </label>
              <input
                type="text"
                className="w-[209px] h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="Kg"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Minimum Purchase Requirement <span>*</span>
              </label>
              <input
                type="text"
                className="w-[209px] h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
                placeholder="100"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Product Category <span>*</span>
            </label>
            <input
              type="text"
              className="w-full h-12 rounded-[4px] border border-gray2 bg-gray3 mt-2 px-5"
              placeholder="Please select a category"
            />
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
          text={"Create Product"}
          className="w-[206px] h-12 rounded-md text-xl font-bold self-end"
          onClick={function () {
            throw new Error("Function not implemented.");
          }}
        />
      </form>
    </div>
  );
};

export default AddProductForm;
