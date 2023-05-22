import OrderCard from "@/components/Dashboard/OrderCard";
import React from "react";

const page = () => {
  return (
    <div className="pt-8 px-5 pb-40">
      <h4 className="mb-5 text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
        Orders
      </h4>
      <div className="flex flex-col gap-6">
        <OrderCard
          img={"https://picsum.photos/200/300"}
          name={"Raw Cashew Nuts "}
          amount={"30,000KG"}
          id={"12W321SSDS"}
          deliveryDate={"31-05-2022"}
        />
        <OrderCard
          img={"https://picsum.photos/200/300"}
          name={"Raw Cashew Nuts "}
          amount={"30,000KG"}
          id={"12W321SSDS"}
          deliveryDate={"31-05-2022"}
        />
      </div>
    </div>
  );
};

export default page;
