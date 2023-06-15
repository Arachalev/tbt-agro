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

  // To fetch product detail so as to get the unit and minimum purchase quantity
  const getProdDetails = async (id: number) => {
    let res;
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    const sessionToken = sessionStorage.getItem("token");
    if (sessionToken) {
      myHeaders.set("Authorization", `Bearer ${sessionToken}`);
    }
    try {
      res = await fetch(`https://test.tbt.com.ng/api/v1/product/show/${id}`, {
        method: "GET",
        headers: myHeaders,
      });
    } catch (error) {
      // console.log(error);
      return error;
    }
    if (res) {
      const data = await res.json();
      return {
        unit: data?.data?.unit,
        minimumPurchase: data?.data?.minimum_purchase,
      };
    }
  };

  useEffect(() => {
    // to handle the conversion of the backend endpoint data to suit the UI in the
    // front end, and also fetch some more properties that are not sent from the backend

    const handleProductData = async (data) => {
      setLoadingData(true);
      let tempCartData: CartCardProps[] = [];
      setLoadingData(true);

      await Promise.all(
        data.data.map(
          async (item: {
            quantity: number;
            id: number;
            product: {
              images: string[];
              user: { seller_id: string };
              category: { name: string };
              name: string;
              sale_price: number;
              id: number;
              quantity: number;
            };
          }) => {
            const product: { unit: string; minimumPurchase: number } =
              await getProdDetails(item?.product?.id);
            tempCartData.push({
              img: item.product.images[0]
                ? item.product.images[0]
                : "https://picsum.photos/300/350",
              sellerId: item.product.user.seller_id,
              name: `${item.product.name.toUpperCase()} - ${item.product.quantity.toLocaleString()}${product.unit.toUpperCase()} `,
              category: item.product.category.name,
              cost: `₦${
                item.product.sale_price
              } / ${product.unit.toUpperCase()}`,
              minimumPurchase: `${product.minimumPurchase.toLocaleString()}${product.unit.toUpperCase()}`,
              ratings: 3.5,
              ratingsAmount: 1,
              quantity: item.quantity,
              id: item.id,
            });
          }
        )
      );

      setCartData(tempCartData);
      setLoadingData(false);
    };

    if (data) {
      dispatch(addToCart(data.data));
      handleProductData(data);
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
