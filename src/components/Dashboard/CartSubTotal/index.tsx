"use client";

import React from "react";

import PriButton from "@/components/PriButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface CartSubTotalProps {
  items: number;
  cost: number | string;
}

const CartSubTotal = ({ items, cost }: CartSubTotalProps) => {
  const pathArr = usePathname().split("/");

  const isShoppingCardPath = pathArr[3] === "shopping-cart";

  return (
    <div
      className={`${isShoppingCardPath ? "h-fit" : "h-[170px]"}
    w-full sm:w-[310px]  p-4 flex flex-col items-center bg-white rounded-[10px] gap-2 overflow-clip
    `}
    >
      <h4 className="font-bold text-center text-agro-black">
        Cart Subtotal <span className="font-medium">({items} items)</span>
      </h4>
      <p className=" font-bold">₦{cost.toLocaleString()}</p>
      <Link
        href="/dashboard/buyer/checkout"
        className="bg-agro-yellow rounded-[4px] font-bold flex items-center text-center  text-agro-black h-7 whitespace-nowrap px-4 text-xs "
      >
        Proceed to Checkout
      </Link>
      {!isShoppingCardPath && (
        <Link
          className="w-[134px] h-7 text-xs font-bold flex items-center justify-center border border-gray2 rounded-[4px]"
          href="/dasboard/buyer/shopping-cart"
        >
          Go to Cart
        </Link>
      )}
    </div>
  );
};

export default CartSubTotal;
