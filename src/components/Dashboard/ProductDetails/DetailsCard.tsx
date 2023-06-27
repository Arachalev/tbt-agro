"use client";
import React, { useState } from "react";

import PriButton from "@/components/PriButton";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { TfiFacebook } from "react-icons/tfi";
import StarRatings from "react-star-ratings";
import { useRouter } from "next/navigation";
import { useAddToCartMutation } from "@/store/redux/services/cartSlice/cartApiSlice";
import useInput from "@/hooks/useInput";
import StatusModal from "@/components/Forms/StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";
import { useAppDispatch } from "@/store/redux/hooks";
import { addToCart as reduxAddToCart } from "@/store/redux/services/cartSlice/cartSlice";
import placeholder from "../../../../public/images/placeholder.png";

interface DetailsCardProps {
  img: string;
  sellerId: string;
  name: string;
  category: string;
  availableQuantity: string;
  location: string;
  cost: string;
  minimumPurchase: number;
  ratings: number;
  ratingsAmount: number;
  id: number;
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
  id,
}: DetailsCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const [
    addToCart,
    { data: addCartData, isLoading: addCartLoading, error: addCartError },
  ] = useAddToCartMutation();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    value,
    hasError,
    enteredInputHandler,
    onBlurHandler,
    onFocusHandler,
    reset,
  } = useInput((val) => parseInt(val) > minimumPurchase);

  const addToCartHandler = async () => {
    setShowModal(true);
    await addToCart({ product_id: id, quantity: parseInt(value.value) });

    if (addCartData) {
      // router.push("/dashboard/buyer/added-to-cart");
      // console.log(addCartData);
      // dispatch(reduxAddToCart({}));
    }
  };

  let errorMessage = "";

  if (addCartError) {
    errorMessage = isFetchBaseQueryErrorType(addCartError);
  }

  // console.log(addCartData, addCartError);

  return (
    <div className="flex flex-col sm:flex-row items-center    gap-9  w-full xl:w-[857px] p-5 sm:p-10 bg-white rounded-[10px]">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={addCartLoading}
          data={addCartData ? addCartData?.message : ""}
          dataFunc={() => router.back()}
          error={addCartError ? errorMessage : ""}
        />
      )}

      <div className="">
        <Image
          src={img ? img : placeholder}
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
        <h4 className=" sm:text-lg font-bold text-agro-black">{name}</h4>
        <p className="font-medium text-agro-black">Category : {category}</p>
        <p className="font-medium text-agro-black">
          Available Quantity : {availableQuantity}
        </p>
        <p className="font-medium text-agro-orange">Location :{location}</p>
        <h4 className="text-xl sm:text-2xl font-bold">{cost}</h4>
        <div>
          <form action="">
            <div className=" flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-semibold">
                Quantity needed
              </label>
              <input
                onBlur={onBlurHandler}
                onChange={enteredInputHandler}
                value={value.value}
                onFocus={onFocusHandler}
                className=" px-2 w-[210px] h-[48px] border border-gray2 rounded-[4px] bg-agro-gray "
                type="text"
                placeholder={`${minimumPurchase}`}
                // defaultValue={minimumPurchase}
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
            onClick={() => {
              addToCartHandler();
              router.push("/dashboard/buyer/checkout");
            }}
          />
          <PriButton
            text={"Add to Cart"}
            className="w-[100px] h-8 font-bold text-sm"
            onClick={() => addToCartHandler()}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
