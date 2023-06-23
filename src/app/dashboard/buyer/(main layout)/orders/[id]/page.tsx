"use client";

import React, { useState } from "react";

import Link from "next/link";
import { CgArrowLongLeft } from "react-icons/cg";
import OrderDetails from "@/components/Dashboard/OrderDetails";
import { useGetOneOrderQuery } from "@/store/redux/services/OrdersSlice/ordersApiSlice";
import StatusModal from "@/components/Forms/StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const Page = ({ params }: { params: { id: string } }) => {
  const [showModal, setShowModal] = useState(true);
  const { data, error, isLoading } = useGetOneOrderQuery(params.id);


  const orderData = data?.data;

  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }
  return isLoading ? (
    <StatusModal
      onClose={() => setShowModal(false)}
      loading={isLoading}
      data={data ? "Order Fetched" : ""}
      dataText="Close"
      // dataFunc={() => router.push("/dashboard/seller/account")}
      error={error ? errorMessage : ""}
    />
  ) : (
    <div className="pt-8 px-5 pb-40">
      {/* {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          data={data ? "Order Fetched" : ""}
          dataText="Close"
          // dataFunc={() => router.push("/dashboard/seller/account")}
          error={error ? errorMessage : ""}
        />
      )} */}
      <div className="flex items-center gap-4 mb-5">
        <Link
          className="flex items-center gap-1 text-agro-orange"
          href="/dashboard/buyer/orders"
        >
          <CgArrowLongLeft /> <p className="text-sm font-medium">Back</p>
        </Link>
        <h4 className=" text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          Order Details
        </h4>
      </div>
      <div>
        <OrderDetails
          id={orderData.order_reference}
          amount={orderData.items.length}
          cost={`₦${orderData.total.toLocaleString()}`}
          date={orderData.created_at.split("T")[0]}
          orderItems={orderData.items.map((item: any) => ({
            img: "https://picsum.photos/200/300",
            name: item.product.name,
            amount: item.product.quantity.toLocaleString(),
            id: orderData.id,
            deliveryDate: orderData.created_at.split("T")[0],
            isReturnable: false,
            cost: `₦${item.product.sale_price.toLocaleString()}`,
            returnDate: "",
            quantity: item.product.quantity,
            reference: orderData.order_reference,
            status: orderData.status,
          }))}
        />
      </div>
    </div>
  );
};

export default Page;
