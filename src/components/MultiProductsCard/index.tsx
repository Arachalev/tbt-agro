"use client";

import React from "react";
import Image from "next/image";

import pro from "../../assets/images/product.png";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import getUniqueID from "@/hooks/getUniqueID";

interface MultiProductsCardProps {
  title: string;
  products: {
    image: string;
    name: string;
    price: number;
    sellerID: string;
    location: string;
  }[];
}

const MultiProductsCard: React.FC<MultiProductsCardProps> = ({
  title,
  products,
}) => {
  const deviceWidth = useAppSelector(selectDeviceWith);

  const imgHeight = deviceWidth.width < 640 ? 60 : 114;
  const imgWidth = deviceWidth.width < 640 ? 60 : 132;
  //
  //flex-wrap
  return (
    <div className="p-2 sm:p-5 rounded-[10px] bg-white w-full h-full ">
      <h4 className=" sm:text-lg  font-bold text-agro-black mb-3">{title}</h4>
      <div
        className={`gap-2 lg:gap-4 w-fit  md:w-full  ${
          products.length > 4
            ? " grid grid-rows-2 grid-flow-col "
            : " flex flex-row xl:grid md:grid-rows-2 md:grid-flow-col"
        }`}
      >
        {products.map((item) => {
          return (
            <div key={getUniqueID()}>
              <Image
                height={imgHeight}
                width={imgWidth}
                className=" rounded-[10px]"
                src={pro}
                alt=""
              />
              <h4 className="text-xs md:text-sm text-agro-black mt-[6px] ">
                {item.name}
              </h4>
              <h3 className="font-semibold lg:font-bold text-sm my-1">{`₦ ${item.price}`}</h3>
              <p className=" text-[10px] text-[#ABABAB] font-medium">
                {item.sellerID}
              </p>
              <p className="text-[10px] text-agro-green font-medium">
                {item.location}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiProductsCard;
