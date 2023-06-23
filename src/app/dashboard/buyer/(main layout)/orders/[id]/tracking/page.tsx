"use client";

import React, { useState } from "react";

import Link from "next/link";
import PackageHistory from "@/components/Dashboard/PackageHistory";

import { CgArrowLongLeft } from "react-icons/cg";
import { packageHistoryData } from "@/store/DummyData/Dashboard/packageHistoryData";
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
      data={data ? "package history" : ""}
      dataText="Close"
      error={error ? errorMessage : ""}
    />
  ) : (
    <div className="pt-8 px-5 pb-40">
      <div className="flex items-center gap-4 mb-5">
        <Link
          className="flex items-center gap-1 text-agro-orange"
          href={`/dashboard/buyer/orders/${params.id}`}
        >
          <CgArrowLongLeft /> <p className="text-sm font-medium">Back</p>
        </Link>
        <h4 className=" text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          Package History
        </h4>
      </div>
      <div>
        <PackageHistory
          historyData={orderData.package_histories.map((item: any) => ({
            title: item.label,
            date: item.status ? item.updated_at.split("T")[0] : "",
            isCompleted: item.status ? true : false,
          }))}
        />
      </div>
    </div>
  );
};

export default Page;
