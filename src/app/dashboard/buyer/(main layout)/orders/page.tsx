"use client";

import React from "react";

import OrderCard from "@/components/Dashboard/OrderCard";
import { useGetAllOrdersQuery } from "@/store/redux/services/OrdersSlice/ordersApiSlice";

const Page = () => {
  const { data, error, isLoading, isError } = useGetAllOrdersQuery("");

  let orders = [];

  if (data) {
    orders = data?.data?.data;
  }

  return (
    <div className="pt-8 px-5 pb-40">
      <h4 className="mb-5 text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
        Orders
      </h4>
      {orders.length > 0 ? (
        <div className="flex flex-col gap-6">
          {orders.map((item: any) => (
            <OrderCard
              key={item.id}
              img={item.img}
              name={item.name}
              amount={item.amount}
              id={item.id}
              deliveryDate={item.deliveryDate}
            />
            //   key={item.id}
            //   img={"https://picsum.photos/200/300"}
            //   name={"Raw Cashew Nuts "}
            //   amount={"30,000KG"}
            //   id={"12W321SSDS"}
            //   deliveryDate={"31-05-2022"}
            // />
          ))}
        </div>
      ) : (
        <h4 className="font-semibold text-agro-black text-xl md:text-3xl">
          No orders yet
        </h4>
      )}
    </div>
  );
};

export default Page;
