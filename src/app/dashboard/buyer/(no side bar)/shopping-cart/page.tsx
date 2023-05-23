import CartCard from "@/components/Dashboard/CartCard";
import CartSubTotal from "@/components/Dashboard/CartSubTotal";
import React from "react";

const Page = () => {
  return (
    <div className="pt-10 px-4 pb-40 flex flex-col items-center">
      <div className="">
        <h4 className="mb-5 self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
          Shopping Cart
        </h4>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex flex-col gap-5">
            <CartCard
              img={"https://picsum.photos/300/350"}
              sellerId={"S154AS"}
              name={"RAW CASHEW NUTS – 30,000KG"}
              category={"Crop Products"}
              availableQuantity={"50 MT"}
              location={"Ogbomosho, Oyo State."}
              cost={"₦700,000 / MT"}
              minimumPurchase={"5,000Kg"}
              ratings={3.5}
              ratingsAmount={2389}
            />
            <CartCard
              img={"https://picsum.photos/300/350"}
              sellerId={"S154AS"}
              name={"RAW CASHEW NUTS – 30,000KG"}
              category={"Crop Products"}
              availableQuantity={"50 MT"}
              location={"Ogbomosho, Oyo State."}
              cost={"₦700,000 / MT"}
              minimumPurchase={"5,000Kg"}
              ratings={3.5}
              ratingsAmount={2389}
            />
            <div className=" 2xl:w-[967px] p-10 bg-white rounded-[10px] flex items-center justify-center ">
              Subtotal (2 items):{" "}
              <span className="font-bold"> ₦1, 400,000.00</span>
            </div>
          </div>
          <CartSubTotal items={2} cost={100000} />
        </div>
      </div>
    </div>
  );
};

export default Page;
