import Image from "next/image";
import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";

const AddedToCartCard = ({ image }: { image: string }) => {
  return (
    <div className="flex gap-8 items-center justify-center h-[170px] w-full rounded-[10px] bg-white ">
      <Image
        src={image}
        className="h-[135px] w-[115px] rounded-[4px]  "
        height={135}
        width={115}
        alt=" image of produce"
      />
      <div className="flex items-center gap-3">
        <FaRegCheckCircle className="text-agro-orange text-2xl" />
        <p className="font-semibold text-lg">Added to Cart</p>
      </div>
    </div>
  );
};

export default AddedToCartCard;
