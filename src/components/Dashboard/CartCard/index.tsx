"use client";
import React from "react";

import Image from "next/image";
import StarRatings from "react-star-ratings";

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
    <div className="w-[967px] p-10 bg-white rounded-[10px] flex justify-between">
      <div className="flex gap-9 ">
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
            <p>Delete</p>
            <span className="border-r border-r-agro-green h-4" />
            <p>Save for later</p>
            <span className="border-r border-r-agro-green h-4" />
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-medium text-gray2 text-end">Price</p>
        <h4 className="font-bold mt-4">{cost}</h4>
      </div>
    </div>
  );
};

export default CartCard;
