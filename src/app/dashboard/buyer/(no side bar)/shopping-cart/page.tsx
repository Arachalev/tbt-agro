"use client";
import React, { useState, useEffect } from "react";
import CartCard from "@/components/Dashboard/CartCard";
import CartSubTotal from "@/components/Dashboard/CartSubTotal";
import {
  useGetCartItemsQuery,
  useGetCartSummaryQuery,
} from "@/store/redux/services/cartSlice/cartApiSlice";
import getUniqueID from "@/hooks/getUniqueID";
import { CartCardProps } from "@/components/Dashboard/CartCard";
import StatusModal from "@/components/Forms/StatusModal";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  addToCart,
  selectCart,
} from "@/store/redux/services/cartSlice/cartSlice";

const Page = () => {
  const [cartData, setCartData] = useState<CartCardProps[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const { data, isLoading, error } = useGetCartItemsQuery("");

  const {
    data: sumData,
    isLoading: sumLoading,
    error: sumError,
  } = useGetCartSummaryQuery("");

  // console.log(data);

  useEffect(() => {
    const handleProductData = async (
      data: {
        quantity: number;
        id: number;
        product: {
          images: { image_url: string }[];
          user: { seller_id: string };
          category: { name: string };
          name: string;
          tbt_price: number;
          id: number;
          quantity: number;
          minimum_purchase: number;
          unit: string;
        };
      }[]
    ) => {
      let tempCartData: CartCardProps[] = [];
      setLoadingData(true);

      data.map(
        (item: {
          quantity: number;
          id: number;
          product: {
            images: { image_url: string }[];
            user: { seller_id: string };
            category: { name: string };
            name: string;
            tbt_price: number;
            id: number;
            quantity: number;
            minimum_purchase: number;
            unit: string;
          };
        }) => {
          tempCartData.push({
            img: item.product.images[0]
              ? item.product.images[0].image_url
              : "https://picsum.photos/300/350",
            sellerId: item.product.user.seller_id,
            name: `${item.product.name.toUpperCase()} - ${item.product.quantity.toLocaleString()}${item.product.unit.toUpperCase()} `,
            category: item.product.category.name,
            cost: `₦${
              item.product.tbt_price
            } / ${item.product.unit.toUpperCase()}`,
            minimumPurchase: `${item.product.minimum_purchase.toLocaleString()}${item.product.unit.toUpperCase()}`,
            ratings: 3.5,
            ratingsAmount: 1,
            quantity: item.quantity,
            id: item.id,
            productID: item.product.id,
            availableQuantity: item.product.quantity.toLocaleString(),
          });
        }
      );

      setCartData(tempCartData);
      setLoadingData(false);
    };

    if (data) {
      dispatch(addToCart(data.data));
      handleProductData(data.data);
    }
  }, [data, dispatch]);

  const cartSummary = sumData?.data;

  return (
    <div className="pt-10 px-4 pb-40 flex flex-col items-center">
      {loadingData && (
        <StatusModal
          onClose={() => setLoadingData(false)}
          loading={loadingData}
          data=""
        />
      )}
      <div className="">
        <h4 className="mb-5 h-10 self-start text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
          Shopping Cart
        </h4>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="flex flex-col gap-5">
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <CartCard
                  id={item.id}
                  img={item.img}
                  sellerId={item.sellerId}
                  name={item.name}
                  category={item.category}
                  quantity={item.quantity}
                  cost={item.cost}
                  minimumPurchase={item.minimumPurchase}
                  ratings={item.ratings}
                  ratingsAmount={item.ratingsAmount}
                  key={getUniqueID()}
                  productID={item.productID}
                  availableQuantity={item.availableQuantity}
                />
              ))
            ) : (
              <p className="text-2xl sm:text-4xl font-semibold ">
                No item in cart yet.
              </p>
            )}
            <div className=" 2xl:w-[967px] p-10 bg-white rounded-[10px] flex items-center justify-center ">
              Subtotal (
              {sumLoading
                ? "Loading.."
                : cartSummary
                ? cartSummary.item_count
                : "Error getting data"}
              ):{" "}
              <span className="font-bold">
                {" "}
                {sumLoading
                  ? "---"
                  : cartSummary
                  ? `₦${cartSummary.sub_total.toLocaleString()}`
                  : "error"}
              </span>
            </div>
          </div>
          <CartSubTotal
            items={
              sumLoading
                ? "Loading.."
                : cartSummary
                ? cartSummary.item_count
                : "Error getting data"
            }
            cost={
              sumLoading ? "---" : cartSummary ? cartSummary.sub_total : "error"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
