"use client";

import React from "react";

import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import { newArrivalsData } from "@/store/DummyData/multiProductsCard";
import getUniqueID from "@/hooks/getUniqueID";
import { useGetAllProductsQuery } from "@/store/redux/services/productsSlice/productsApiSlice";
import StatusModal from "@/components/Forms/StatusModal";

const Page = () => {
  const { data, isLoading } = useGetAllProductsQuery("");

  const products = data?.data?.data;

  return isLoading ? (
    <StatusModal onClose={() => {}} loading={isLoading} />
  ) : (
    <div className="bg-agro-gray pt-9 pb-[163px] px-4 xl:px-[72px] w-screen ">
      <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5 2xl:mx-auto 2xl:w-[1300px] ">
        {products.length > 0 ? (
          products.map(
            (item: {
              id: number;
              location: string;
              user: { seller_id: string };
              name: string;
              image: string;
              tbt_price: number;
            }) => (
              <NewArrivalsProductCard
                key={item.id}
                id={item.id}
                image={
                  item.image ? item.image[0] : "https://picsum.photos/200/300"
                }
                name={item.name}
                price={item.tbt_price}
                sellerID={item.user.seller_id}
                location={item.location}
              />
            )
          )
        ) : (
          <h4 className="text-xl font-semibold text-agro-green">
            No New Products
          </h4>
        )}
      </div>
    </div>
  );
};

export default Page;
