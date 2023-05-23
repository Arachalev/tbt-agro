import React from "react";

import AddedToCartCard from "@/components/Dashboard/AddedToCardCard";
import CartSubTotal from "@/components/Dashboard/CartSubTotal";
import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import { newArrivalsData } from "@/store/DummyData/multiProductsCard";

const Page = () => {
  return (
    <div className=" p-4 pb-[300px] xl:px-[72px]">
      <div className=" 2xl:w-[1300px] 2xl:mx-auto">
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <AddedToCartCard image={"https://picsum.photos/300/350"} />
          <CartSubTotal items={20} cost={100000} />
        </div>
        <div className="mt-24">
          <h4 className="mb-5 self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
            Shop for More Goods
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 lg:gap-5 ">
            {newArrivalsData.products.map((item) => (
              <NewArrivalsProductCard
                key={item.key}
                image={item.image}
                name={item.name}
                price={item.price}
                sellerID={item.sellerID}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
