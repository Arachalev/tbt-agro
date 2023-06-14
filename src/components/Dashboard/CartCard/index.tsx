"use client";
import React from "react";

import Image from "next/image";
import StarRatings from "react-star-ratings";
import { useDeleteCartItemMutation } from "@/store/redux/services/cartSlice/cartApiSlice";

interface CartCardProps {
  img: string;
  sellerId: string;
  name: string;
  category: string;
  availableQuantity: string;
  location: string;
  cost: string;
  minimumPurchase: string;
  ratings: number;
  ratingsAmount: number;
}

const CartCard = ({
  img,
  sellerId,
  name,
  category,
  availableQuantity,
  location,
  cost,
  minimumPurchase,
  ratings,
  ratingsAmount,
}: CartCardProps) => {
  return (
    <div className=" 2xl:w-[967px] p-10 bg-white rounded-[10px] flex flex-col md:flex-row justify-between">
      <div className="flex flex-col sm:flex-row gap-9 ">
        <div className="">
          <Image
            src={img}
            className="h-[335px] rounded-[10px] "
            alt="Product image"
            height={335}
            width={285}
          />
          <div className="flex items-center justify-between mt-3 w-full">
            <StarRatings
              rating={ratings}
              starRatedColor="#FFCC29"
              numberOfStars={5}
              name="rating"
              starDimension="15"
              starSpacing="5"
            />

            <p className="text-agro-orange font-medium">
              {ratingsAmount} ratings
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-agro-orange  font-medium">Seller ID: {sellerId}</p>
          <h4 className=" font-bold text-agro-black">{name}</h4>
          <p className="font-medium text-agro-black">Category : {category}</p>

          <div>
            <form action="">
              <div className=" flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-semibold">
                  Quantity needed
                </label>
                <input
                  className=" px-2 placeholder:text-agro-black w-[210px] h-[48px] border border-gray2 rounded-[4px] bg-agro-gray "
                  type="text"
                  placeholder="200"
                />
              </div>
            </form>
            <p className="text-gray2 mt-2 font-medium ">
              Minimum purchase quantity : {minimumPurchase}
            </p>
          </div>
          <div className="mt-3 text-agro-green text-xs font-medium flex items-center gap-5">
            <button>Delete</button>
            <span className="border-r border-r-agro-green h-4" />
            <button>Save for later</button>
            <span className="border-r border-r-agro-green h-4" />
            <button>Share</button>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="font-medium text-gray2 md:text-end">Price</p>
        <h4 className="font-bold md:mt-4">{cost}</h4>
      </div>
    </div>
  );
};

export default CartCard;
