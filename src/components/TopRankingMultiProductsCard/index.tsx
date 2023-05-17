import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Star from "../Icons/Star";
import { BsArrowRight } from "react-icons/bs";

interface TopRankingMultiProductsCard {
  products: {
    image: StaticImageData;
    name: string;
    price: number;
    amount: number;
    score: number;
    rating: number;
  }[];
  href: string;
  title: string;
}

const TopRankingMultiProductsCard: React.FC<TopRankingMultiProductsCard> = ({
  title,
  products,
  href = "",
}) => {
  return (
    <div className="xl:w-[420px]  h-[265px] px-5 pb-5 pt-9 bg-white overflow-y-hidden rounded-[10px]">
      <div className="flex items-center justify-between mb-[40px]">
        <h4 className=" sm:text-lg font-bold ">{title}</h4>
        <Link href={href}>
          <BsArrowRight className="font-bold text-xl" />
        </Link>
      </div>
      <div className="flex items-center gap-[6px]">
        {products.map((item, index) => (
          <div key={`${item.name}-- ${index}`}>
            <div className=" relative h-[114px] w-[124px] flex items-center justify-center bg-[#f6f6f6] rounded-[8px]">
              <div className="w-fit h-fit absolute top-3 left-3 ">
                <Star
                  variant="sm"
                  fill={
                    item.rating === 1
                      ? "#4C6538"
                      : item.rating === 2
                      ? "#FFCC29"
                      : "#000427"
                  }
                />
                <span
                  className={`absolute top-[5px] left-[8px] text-[9px] font-bold ${
                    item.rating === 2 ? "text-agro-black" : "text-white"
                  }`}
                >
                  {item.rating}
                </span>
              </div>
              <Image
                width={84}
                height={61}
                className=" rounded-[10px]"
                src={item.image}
                alt={item.name}
              />
            </div>
            <p className="text-sm font-bold mt-2 text-agro-black">
              {`₦ ${item.price}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRankingMultiProductsCard;
