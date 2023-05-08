"use client";
import React, { useState } from "react";

import PriButton from "@/components/PriButton";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

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
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  return (
    <div>
      <div>
        <Image
          src={img}
          className="h-[335px] rounded-[10px] "
          alt="Product image"
          height={335}
          width={285}
        />
        <div className="flex w-full">
          <Rating
            onClick={handleRating}
            initialValue={rating}

            /* Available Props */
          />

          <p>{ratingsAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
