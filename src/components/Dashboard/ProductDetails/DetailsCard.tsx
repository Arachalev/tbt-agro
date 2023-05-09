"use client";
import React from "react";

import PriButton from "@/components/PriButton";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import { TfiFacebook } from "react-icons/tfi";
import StarRatings from "react-star-ratings";

interface DetailsCardProps {
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

const DetailsCard = ({
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
}: DetailsCardProps) => {
  return (
    <div className="flex gap-9 w-[857px] p-10 bg-white rounded-[10px]">
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
        <div className=" mt-2">
          <p className="text-sm font-semibold text-agro-black">
            SHARE THIS PRODUCT
          </p>
          <div className="flex items-center gap-2 text-agro-green mt-4">
            <GrLinkedinOption className="text-lg" />
            <BsTwitter />
            <TfiFacebook />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-agro-orange  font-medium"> Seller ID: {sellerId}</p>
        <h4 className="text-lg font-bold text-agro-black">{name}</h4>
        <p className="font-medium text-agro-black">Category : {category}</p>
        <p className="font-medium text-agro-black">
          Available Quantity : {availableQuantity}
        </p>
        <p className="font-medium text-agro-orange">Location :{location}</p>
        <h4 className="text-2xl font-bold">{cost}</h4>
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
          <p className="text-gray2 font-medium ">
            Minimum purchase quantity : {minimumPurchase}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <PriButton
            text={"Buy Now"}
            className="w-[84px] h-8 font-bold text-sm"
            onClick={function () {
              throw new Error("Function not implemented.");
            }}
          />
          <PriButton
            text={"Add to Cart"}
            className="w-[100px] h-8 font-bold text-sm"
            onClick={function () {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
