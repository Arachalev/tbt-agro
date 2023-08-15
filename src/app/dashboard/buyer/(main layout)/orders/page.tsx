"use client";

import React, { useState, useEffect } from "react";

import OrderCard from "@/components/Dashboard/OrderCard";
import { useGetAllOrdersQuery } from "@/store/redux/services/OrdersSlice/ordersApiSlice";

const Page = () => {
  const { data, error, isLoading, isError } = useGetAllOrdersQuery("");
  const [orders, setOrders] = useState<any[]>([]);

  // Fetch Other pages
  const fetchOtherPages = async (
    total: number,
    pageLimit: number,
    pageUrl: string
  ) => {
    const tempOrders: any[] = [];

    const limit = Math.ceil(total / pageLimit);

    const dataArr = new Array(limit + 1).fill("");

    await Promise.all(
      dataArr.map(async (item, index) => {
        if (index > 0) {
          const res = await fetch(`${pageUrl}=${index}`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          });

          const data = await res.json();

          data.data.data.map((item: any) => {
            if (item.payment_status === "paid") {
              tempOrders.push(item);
            }
          });
        }
      })
    );

    setOrders(tempOrders);
  };

  useEffect(() => {
    if (data) {
      const pageUrl = data.data.first_page_url.split("=");
      // console.log(productsData.data.first_page_url, pageUrl);
      fetchOtherPages(data.data.total, data.data.per_page, pageUrl[0]);
    }
  }, [data]);

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
