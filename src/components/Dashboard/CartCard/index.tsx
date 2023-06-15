"use client";
import React from "react";

import Image from "next/image";
import StarRatings from "react-star-ratings";
import { useDeleteCartItemMutation } from "@/store/redux/services/cartSlice/cartApiSlice";

export interface CartCardProps {
  img: string;
  sellerId: string;
  name: string;
  category: string;
  cost: string;
  minimumPurchase: string;
  ratings: number;
  ratingsAmount: number;
  quantity: number;
  id: number;
}

const CartCard = ({
  img,
  sellerId,
  name,
  category,
  quantity,
  cost,
  minimumPurchase,
  ratings,
  ratingsAmount,
  id,
}: CartCardProps) => {
  const [deleteCartItem, { isLoading, data, error }] =
    useDeleteCartItemMutation();

  const handleDelete = async () => {
    await deleteCartItem(id);
  };

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
            <div className=" flex flex-col gap-2">
              <h4 className="text-sm font-semibold">Quantity needed</h4>
              <p className=" px-2 flex items-center placeholder:text-agro-black w-[210px] h-[48px]  border border-gray2 rounded-[4px] bg-agro-gray ">
                {quantity ?? "---"}
              </p>
            </div>
            <p className="text-gray2 mt-2 font-medium ">
              Minimum purchase quantity : {minimumPurchase}
            </p>
          </div>
          <div className="mt-3 text-agro-green text-xs font-medium flex items-center gap-5">
            <button onClick={() => handleDelete()}>Delete</button>
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
