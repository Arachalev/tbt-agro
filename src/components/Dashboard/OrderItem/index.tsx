import React from "react";

import Image from "next/image";
import Link from "next/link";
import { OrderCardProps } from "../OrderCard";

export interface OrderItemsProps extends OrderCardProps {
  isReturnable: boolean;
  cost: string;
  returnDate: string;
  quantity: number;
  status: string;
}

const OrderItem = ({
  img,
  amount,
  deliveryDate,
  name,
  isReturnable,
  cost,
  quantity,
  returnDate,
  id,
  status,
}: OrderItemsProps) => {
  return (
    <div className="w-full  bg-white py-4 px-6 flex flex-col md:flex-row gap-4 justify-between border border-gray2  rounded-md">
      <div className="flex flex-col">
        <div className="mb-5">
          <p className="inline text-agro-green text-xs font-medium">
            {/* DELIVERED */}
            {status.toUpperCase()}
          </p>
          <p className=" inline text-agro-orange text-xs font-medium ml-4">
            {isReturnable ? "RETURNABLE" : "NON-RETURNABLE"}
          </p>
          <p className="text-sm font-medium text-agro-green">
            On {deliveryDate}
          </p>
        </div>
        <div className="flex gap-5 items-center mb-6 ">
          <Image
            className="rounded-md h-[120px] object-cover"
            alt="test"
            src={img}
            height={120}
            width={100}
            loading="lazy"
          />
          <div className="text-agro-black flex flex-col gap-2">
            <h4 className="text-base sm:text-xl">
              {name} - {amount}
            </h4>
            <p className="text-sm ">QTY :{quantity}</p>
            <p className=" text-base sm:text-xl">{cost}</p>
          </div>
        </div>
        <p className="text-sm">
          {isReturnable &&
            ` The return period ended on (${returnDate}) Access our Return Policy.`}
        </p>
      </div>
      <Link
        className="text-agro-orange font-bold h-fit "
        href={`/dashboard/buyer/orders/${id}/tracking`}
      >
        SEE STATUS HISTORY
      </Link>
    </div>
  );
};

export default OrderItem;
