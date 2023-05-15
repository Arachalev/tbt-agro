import React from "react";

import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import { newArrivalsData } from "@/store/DummyData/multiProductsCard";

const page = () => {
  return (
    <div className="bg-agro-gray pt-9 pb-[163px] px-[72px] w-screen ">
      <div className="flex flex-wrap items-center justify-center  gap-5 ">
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
  );
};

export default page;
