"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import placeholder from "../../../public/images/placeholder.png";

interface NewArrivalsProductCardProps {
  image: string;
  name: string;
  price: number;
  sellerID: string;
  location: string;
  id: number;
}

const NewArrivalsProductCard: React.FC<NewArrivalsProductCardProps> = ({
  image,
  name,
  id,
  price,
  sellerID,
  location,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/web/product-details/${id}`)}
      className="sm:w-[200px] h-[280px] rounded-[10px] overflow-clip cursor-pointer"
    >
      <div className="w-full h-[169px] p-4 flex items-center justify-center bg-[#f6f6f6] rounded-t-[10px]">
        <Image
          className=" rounded-[10px] w-[130px] h-[115px] object-contain"
          width={130}
          height={115}
          src={image ? image : placeholder}
          alt={name}
        />
      </div>
      <div className="bg-white h-full p-2 rounded-b-[10px]">
        <h4 className=" sm:text-lg text-agro-black leading-none overflow-clip">
          {name}
        </h4>
        <h3 className=" font-bold text-lg my-1">{`₦ ${price.toLocaleString()}`}</h3>
        <p className=" text-sm text-[#ABABAB] font-medium leading-none overflow-clip">
          {sellerID}
        </p>
        <p className="text-sm text-agro-green font-medium">{location}</p>
      </div>
    </div>
  );
};

export default NewArrivalsProductCard;
