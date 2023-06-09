import CheckOutCard from "@/components/Dashboard/CheckOutCard";
import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import { newArrivalsData } from "@/store/DummyData/multiProductsCard";
import React from "react";

const Page = () => {
  return (
    <div className="pt-10 px-4 xl:px-[72px] pb-40 flex flex-col  ">
      <div className=" 2xl:w-[1400px] 2xl:mx-auto ">
        <div className="">
          <h4 className=" mb-5  self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
            Checkout
          </h4>
          <CheckOutCard
            name={"Yinka Segun"}
            address={"No 2, Stell, Ikeja, Lagos"}
            deliveryDate={"15-02-2023"}
            img={"https://picsum.photos/200/300"}
          />
        </div>
        <div className="mt-24">
          <h4 className="mb-5 self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
            Shop for More Goods
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 lg:gap-5 ">
            {newArrivalsData.products.map((item) => (
              <NewArrivalsProductCard
                id={parseInt(item.key)}
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
