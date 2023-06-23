import Image from "next/image";
import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

interface CheckOutCardProps {
  name: string;
  address: string;
  deliveryDate: string;
  img: string;
}

const CheckOutCard = ({
  name,
  address,
  deliveryDate,
  img,
}: CheckOutCardProps) => {
  return (
    <div className=" pb-12 text-agro-black bg-white rounded-[10px] ">
      <div className="h-[60px] flex items-center pl-4 sm:pl-12 border-b border-b-gray2 ">
        <h4 className="font-bold ">
          Order created
          {/* Order reserved for 48 hours */}
        </h4>
      </div>
      <div className="h-[112px] flex flex-col gap-4 sm:py-6 pl-4 sm:pl-12 overflow-clip  border-b border-b-gray2">
        <p>Confirmation sent to your email.</p>
        <p className="font-semibold overflow-clip ">
          Shipping to {name}, <span className="font-normal">{address}</span>
        </p>
      </div>
      <div className="pt-6 pb-10 pl-4 sm:pl-12 flex items-center gap-[70px] ">
        <div>
          <p className="font-semibold">{deliveryDate}</p>
          <p>Estimated delivery</p>
        </div>
        <Image
          src={img}
          alt="product image"
          width={55}
          height={64}
          className="rounded-[2px]"
        />
      </div>
      <Link
        href="/dashboard/buyer/orders"
        className="pl-12 text-agro-orange text-xs flex items-center gap-1 font-semibold"
      >
        <p>Review or edit your recent orders </p>
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export default CheckOutCard;
