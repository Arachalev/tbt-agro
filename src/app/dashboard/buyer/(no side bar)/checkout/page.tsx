import React from "react";

import PaymentMethod from "@/components/Dashboard/PaymentMethod";
import OrderSummary from "@/components/Dashboard/OrderSummary";
import ShipingAndLogistics from "@/components/Dashboard/ShipingAndLogistics";

import Link from "next/link";

const Page = () => {
  return (
    <div className="pt-10 px-4 xl:px-[72px] pb-40 flex flex-col  ">
      <div className="  ">
        <div className="mb-5 ">
          <h4 className="self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
            Checkout
          </h4>
          <p className="text-agro-orange text-sm font-semibold ">
            Secure your products by making payments now!
          </p>
        </div>

        <div className="flex gap-5 flex-col xl:flex-row">
          <div className="flex gap-5 flex-col w-full 2xl:w-fit ">
            <PaymentMethod />
            <ShipingAndLogistics />
            <div className="sm:h-24 p-4 sm:pl-8 bg-white rounded-[10px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8 xl:gap-16">
              <Link
                href="/dashboard/buyer/confirmed-order"
                className="w-[137px] h-8 text-sm bg-agro-yellow rounded-[4px] font-bold text-agro-black flex items-center justify-center"
              >
                Place Your Order
              </Link>
              <div>
                <h4 className="font-semibold text-agro-green sm:text-xl">
                  Order total: ₦1,400,000.00
                </h4>
                <p className="text-xs">
                  By placing your order, you agree to TBT’s privacy notice and
                  conditions of use. <br /> You also agree to TBT&apos;s terms
                  and conditions.
                </p>
              </div>
            </div>
          </div>
          <OrderSummary cost={1000} shippingFee={10000} />
        </div>
      </div>
    </div>
  );
};

export default Page;
