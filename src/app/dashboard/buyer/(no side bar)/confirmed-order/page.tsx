"use client";

import CheckOutCard from "@/components/Dashboard/CheckOutCard";
import NewArrivalsProductCard from "@/components/NewArrivalsProductCard";
import { newArrivalsData } from "@/store/DummyData/multiProductsCard";
import React from "react";
import { useGetOneOrderQuery } from "@/store/redux/services/OrdersSlice/ordersApiSlice";
import { useGetAllProductsQuery } from "@/store/redux/services/productsSlice/productsApiSlice";
import { useAppSelector } from "@/store/redux/hooks";
import { selectBuyerProfile } from "@/store/redux/services/buyerSlice/profileSlice/profileSlice";

const Page = () => {
  const orderID = sessionStorage.getItem("order_id");
  const {
    data: orderData,
    error: orderError,
    isLoading: orderLoading,
  } = useGetOneOrderQuery(orderID);

  const { data, isLoading } = useGetAllProductsQuery("");

  const profile = useAppSelector(selectBuyerProfile);
  const products = data?.data?.data;
  const deliveryData = orderData?.data;

  // console.log(deliveryData);
  // console.log(profile);

  // console.log(data);

  return (
    <div className="pt-10 px-4 xl:px-[72px] pb-40 flex flex-col  ">
      <div className=" 2xl:w-[1400px] 2xl:mx-auto ">
        <div className="">
          <h4 className=" mb-5  self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
            Checkout
          </h4>
          <CheckOutCard
            name={profile ? `${profile.lName + " " + profile.fName}` : ""}
            address={deliveryData ? deliveryData.shipment.delivery_address : ""}
            deliveryDate={
              deliveryData
                ? deliveryData.shipment.delivery_date.split(" ")[0]
                : ""
            }
            // deliveryData?.items[0]?.product?.images[0]?.image_url
            // ? deliveryData.items[0].product.images[0].image_url
            // :
            img={"https://picsum.photos/200/300"}
          />
        </div>
        <div className="mt-24">
          <h4 className="mb-5 self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
            Shop for More Goods
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 lg:gap-5 ">
            {/* {newArrivalsData.products.map((item) => (
              <NewArrivalsProductCard
                id={parseInt(item.key)}
                key={item.key}
                image={item.image}
                name={item.name}
                price={item.price}
                sellerID={item.sellerID}
                location={item.location}
              />
            ))} */}
            {products && products.length > 0 ? (
              products.map(
                (item: {
                  id: number;
                  location: string;
                  user: { seller_id: string };
                  name: string;
                  images: { image_url: string }[];
                  tbt_price: number;
                }) => (
                  <NewArrivalsProductCard
                    key={item.id}
                    id={item.id}
                    image={
                      item.images.length > 0
                        ? item.images[0].image_url
                        : "https://picsum.photos/200/300"
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
      </div>
    </div>
  );
};

export default Page;
