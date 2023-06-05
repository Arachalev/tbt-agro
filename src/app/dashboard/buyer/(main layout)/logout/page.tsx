"use client";

import React from "react";

import PriButton from "@/components/PriButton";
import { useAppDispatch } from "@/store/redux/hooks";
import { logOut } from "@/store/redux/services/authSlice/authSlice";

const Page = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-12  w-full  h-full  min-h-[calc(100vh-64px)]  sm:min-h-[calc(100vh-160px)] items-center  justify-center">
      <p className="text-agro-black font-semibold">
        Happy doing business with you, until next time.
      </p>
      <PriButton
        text={"Log Out"}
        className="px-4 py-2"
        onClick={() => {
          dispatch(logOut());
        }}
      />
    </div>
  );
};

export default Page;
