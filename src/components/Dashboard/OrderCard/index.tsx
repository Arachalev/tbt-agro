import React from "react";

import Link from "next/link";
import Image from "next/image";

export interface OrderCardProps {
  img: string;
  name: string;
  amount: string;
  id: string;
  deliveryDate: string;
}

const OrderCard = ({
  img = "https://picsum.photos/200/300",
  name,
  amount,
  id,
  deliveryDate,
}: OrderCardProps) => {
  return (
    <div className="2xl:w-[967px]  bg-white rounded-md py-4 sm:py-7 px-5 sm:px-9  md::pl-[103px] flex flex-col md:flex-row justify-between ">
      <div className="flex gap-5 md:gap-9 ">
        <Image
          className="rounded-md h-[190px] object-cover"
          alt="test"
          src={img}
          height={190}
          width={160}
          loading="lazy"
        />
        <div className=" self-end pb-3 ">
          <h4 className="text-base md:text-xl text-agro-black mb-2">
            {name} - {amount}
          </h4>
          <p className="text-base md:text-xll text-agro-orange font-medium mb-3">
            {" "}
            Order {id}
          </p>
          <p className="text-xs font-medium text-agro-green">
            Delivered <br /> On {deliveryDate}
          </p>
        </div>
      </div>
      <Link
        className="text-agro-orange font-bold mt-3 h-fit "
        href={`/dashboard/buyer/orders/${id}`}
      >
        SEE DETAILS
      </Link>
    </div>
  );
};

export default OrderCard;
