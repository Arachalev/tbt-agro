"use client";

import React, { useEffect } from "react";

import AccountOverview from "@/components/Dashboard/AccountOverview";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import {
  selectBuyerProfile,
  setBuyerProfile,
} from "@/store/redux/services/buyerSlice/profileSlice/profileSlice";
import { useGetBuyerProfileQuery } from "@/store/redux/services/buyerSlice/profileSlice/profileApiSlice";

const Page = () => {
  const { data, isError, isFetching, isLoading, isSuccess, error } =
    useGetBuyerProfileQuery("");

  const dispatch = useAppDispatch();

  if (data) {
    dispatch(setBuyerProfile({ userData: data.data }));
  }

  const buyerProfile = useAppSelector(selectBuyerProfile);

  return (
    <div className="pt-8 px-5 pb-40">
      <h4 className="mb-5 text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
        Account Overview
      </h4>
      <AccountOverview
        name={
          buyerProfile?.fName
            ? `${buyerProfile.fName} ${buyerProfile.lName}`
            : "---"
        }
        email={buyerProfile?.email ? buyerProfile.email : "---"}
        shippingAddress={{
          name: buyerProfile?.fName
            ? `${buyerProfile.fName} ${buyerProfile.lName}`
            : "---",
          address: buyerProfile?.address ? buyerProfile.address : "",
          city: buyerProfile?.city?.name ? buyerProfile.city.name : "",
          state: buyerProfile?.state?.name ? buyerProfile.state.name : "",
          phone: buyerProfile?.pNumber ? buyerProfile.pNumber : "---",
        }}
      />
    </div>
  );
};

// pNumber,city.name, state.name,address

export default Page;
