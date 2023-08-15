"use client";

import React from "react";

import OrderCard from "@/components/Dashboard/OrderCard";
import { useGetAllOrdersQuery } from "@/store/redux/services/OrdersSlice/ordersApiSlice";

const Page = () => {
  const { data, error, isLoading, isError } = useGetAllOrdersQuery("");

  let orders = [];

  if (data) {
    orders = data?.data?.data.filter(
      (item: any) => item.payment_status !== "unpaid"
    );
  }

  // console.log(data);

  fetch("https://test.tbt.com.ng/api/v1/user/order/my-orders?page=7", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  })
    .then((data) => data.json())
    .then((data) => console.log(data));

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
              reference={item.order_reference}
              deliveryDate={item.shipment.delivery_date.split(" ")[0]}
            />
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
