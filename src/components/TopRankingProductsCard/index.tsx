"use client";

import React from "react";

import Image, { StaticImageData } from "next/image";
import Star from "../Icons/Star";
import { useRouter } from "next/navigation";
import placeholder from "../../../public/images/placeholder.png";

interface TopRankingProductsCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  amount: number;
  // score: number;
  rating: number;
  id: number;
}

const TopRankingProductsCard: React.FC<TopRankingProductsCardProps> = ({
  image,
  name,
  price,
  amount,
  // score,
  id,
  rating,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/web/product-details/${id}`)}
      className="xl:w-[380px] 2xl:w-[420px] h-[200px] md:h-[265px] p-4 flex items-center gap-2 sm:gap-[18px]  bg-white rounded-[10px] "
    >
      <div className=" relative h-full md:h-[233px] w-[150px] md:w-[200px] flex items-center justify-center bg-[#f6f6f6] rounded-[10px]">
        <div className="w-fit h-fit absolute top-3 left-3 ">
          <Star
            fill={
              rating > 0 && rating < 3
                ? "#4C6538"
                : rating > 3
                ? "#FFCC29"
                : "#000427"
            }
          />
          <span
            className={`absolute top-[5px] left-3 text-sm font-bold ${
              rating > 3 ? "text-agro-black" : "text-white"
            }`}
          >
            {rating}
          </span>
        </div>
        <Image
          className=" rounded-[10px]"
          src={image ? image : placeholder}
          alt={name}
        />
      </div>
      <div className="text-agro-black text-sm sm:text-base md:text-lg">
        <h4 className=" mt-[6px] ">{name}</h4>
        <h3 className=" font-bold   my-1">{`₦ ${price.toLocaleString()}`}</h3>
        <p className=" ">{amount}</p>
        {/* <p className="  ">Popularity Score: {score}</p> */}
      </div>
    </div>
  );
};

export default TopRankingProductsCard;
