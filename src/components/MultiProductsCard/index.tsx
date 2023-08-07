"use client";

import React from "react";
import Image from "next/image";

import placeholder from "../../../public/images/placeholder.png";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import getUniqueID from "@/hooks/getUniqueID";
import Link from "next/link";

interface MultiProductsCardProps {
  title: string;
  products: {
    image: string;
    name: string;
    price: number;
    sellerID: string;
    location: string;
    id: number;
  }[];
  type: "cropProducts" | "newProducts";
}

const MultiProductsCard: React.FC<MultiProductsCardProps> = ({
  title,
  products,
  type,
}) => {
  const deviceWidth = useAppSelector(selectDeviceWith);

  const imgHeight = deviceWidth.width < 640 ? 60 : 114;
  const imgWidth = deviceWidth.width < 640 ? 60 : 132;

  const newProductsStyling = ` md:gap-2 lg:gap-4 w-full grid  grid-cols-4 md:grid-cols-2 md:grid-rows-2 md:grid-flow-col`;
  const cropProductsStyling = `gap-2 lg:gap-4 w-full  grid  ${
    products.length < 5 ? "" : "grid-rows-2"
  } grid-flow-col`;

  return (
    <div className="p-2 sm:p-5 rounded-[10px] bg-white w-full h-full ">
      <h4 className=" sm:text-lg  font-bold text-agro-black mb-3">{title}</h4>
      <div
        // className={`gap-2 lg:gap-4 w-fit  md:w-full  ${
        //   products.length > 4
        //     ? " grid grid-rows-2 grid-flow-col "
        //     : " flex flex-row xl:grid md:grid-rows-2 md:grid-flow-col"
        // }`}

        className={
          type === "cropProducts" ? cropProductsStyling : newProductsStyling
        }
      >
        {products.map((item) => {
          return (
            <Link href={`/web/product-details/${item.id}`} key={getUniqueID()}>
              <Image
                height={imgHeight}
                width={imgWidth}
                className={`object-contain rounded-[10px] h-[${imgHeight}px] w-[${imgWidth}px]`}
                src={item.image ? item.image : placeholder}
                alt=""
              />
              <h4 className="text-xs md:text-sm text-agro-black mt-[6px] ">
                {item.name}
              </h4>
              <h3 className="font-semibold lg:font-bold text-sm my-1">{`₦ ${item.price.toLocaleString()}`}</h3>
              <p className=" text-[10px] text-[#ABABAB] font-medium">
                {item.sellerID}
              </p>
              <p className="text-[10px] text-agro-green font-medium">
                {item.location}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MultiProductsCard;
