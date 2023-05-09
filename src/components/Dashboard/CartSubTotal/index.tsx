"use client";

import React from "react";

import PriButton from "@/components/PriButton";
import Link from "next/link";

interface CartSubTotalProps {
  items: number;
  cost: number;
}

const CartSubTotal = ({ items, cost }: CartSubTotalProps) => {
  return (
    <div className="w-[310px] h-[170px] p-4 flex flex-col items-center bg-white rounded-[10px] gap-2 overflow-clip">
      <h4 className="font-bold text-agro-black">
        Cart Subtotal <span className="font-medium">({items} items)</span>
      </h4>
      <p className=" font-bold">₦{cost}</p>
      <Link href="">
        <PriButton
          className="w-[134px] h-7 text-xs "
          text={"Proceed to Checkout"}
          onClick={function () {
            throw new Error("Function not implemented.");
          }}
        />
      </Link>
      <Link
        className="w-[134px] h-7 text-xs font-bold flex items-center justify-center border border-gray2 rounded-[4px] "
        href=""
      >
        Go to Cart
      </Link>
    </div>
  );
};

export default CartSubTotal;
