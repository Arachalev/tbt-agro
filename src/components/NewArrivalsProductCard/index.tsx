"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import placeholder from "../../../public/images/placeholder.png";

type cardType = "newArrival" | "homePage";
interface NewArrivalsProductCardProps {
  image: string;
  name: string;
  price: number;
  sellerID: string;
  location: string;
  id: number;
  variant?: cardType;
}

const NewArrivalsProductCard: React.FC<NewArrivalsProductCardProps> = ({
  image,
  name,
  id,
  price,
  sellerID,
  location,
  variant = "newArrival",
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/web/product-details/${id}`)}
      className={`
      ${
        variant === "newArrival"
          ? "sm:w-[200px] h-[280px] rounded-[10px] overflow-clip cursor-pointer"
          : "h-[215px] rounded-[10px] overflow-clip cursor-pointer w-full shadow-md"
      }
      `}
    >
      <div
        className={`w-full ${
          variant === "newArrival" ? " h-[169px]" : "h-[130px]"
        } p-4 flex items-center justify-center bg-[#f6f6f6] rounded-t-[10px]`}
      >
        <Image
          className=" rounded-[10px] w-[130px] h-[115px] object-contain"
          width={variant === "newArrival" ? 130 : 100}
          height={variant === "newArrival" ? 115 : 95}
          src={image ? image : placeholder}
          alt={name}
        />
      </div>
      <div className="bg-white h-full p-2 rounded-b-[10px]">
        <h4
          className={`${
            variant === "newArrival" ? "sm:text-lg " : " text-sm "
          } text-agro-black leading-none overflow-clip`}
        >
          {name}
        </h4>
        <h3
          className={`${
            variant == "newArrival" ? " text-lg " : "text-sm"
          } font-bold my-[2px]`}
        >{`₦ ${price.toLocaleString()}`}</h3>
        <p
          className={`${
            variant === "newArrival" ? "text-sm" : "text-xs"
          } text-[#ABABAB] font-medium leading-none overflow-clip`}
        >
          {sellerID}
        </p>
        <p
          className={`${
            variant === "newArrival" ? "text-sm " : "text-xs"
          } text-agro-green font-medium`}
        >
          {location}
        </p>
      </div>
    </div>
  );
};

export default NewArrivalsProductCard;
