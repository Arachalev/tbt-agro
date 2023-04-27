import React from "react";

import Image, { StaticImageData } from "next/image";
import Star from "../Icons/Star";

interface TopRankingProductsCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  amount: number;
  score: number;
  rating: number;
}

const TopRankingProductsCard: React.FC<TopRankingProductsCardProps> = ({
  image,
  name,
  price,
  amount,
  score,
  rating,
}) => {
  return (
    <div className="w-[420px] h-[265px] p-4 flex items-center gap-[18px]  bg-white rounded-[10px] ">
      <div className=" relative h-[233px] w-[200px] flex items-center justify-center bg-[#f6f6f6] rounded-[10px]">
        <div className="w-fit h-fit absolute top-3 left-3 ">
          <Star
            fill={
              rating === 1 ? "#4C6538" : rating === 2 ? "#FFCC29" : "#000427"
            }
          />
          <span
            className={`absolute top-[5px] left-3 text-sm font-bold ${
              rating === 2 ? "text-agro-black" : "text-white"
            }`}
          >
            {rating}
          </span>
        </div>
        <Image className=" rounded-[10px]" src={image} alt={name} />
      </div>
      <div className="text-agro-black">
        <h4 className="text-lg mt-[6px] ">{name}</h4>
        <h3 className=" font-bold text-lg  my-1">{`₦ ${price}`}</h3>
        <p className=" text-lg ">{amount}pcs</p>
        <p className="text-lg ">Popularity Score: {score}</p>
      </div>
    </div>
  );
};

export default TopRankingProductsCard;
