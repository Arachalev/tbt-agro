"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import check from "../../../../../public/icons/check.svg";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";

interface SubmitSuccessfulProps {
  href: string;
}

const SubmitSuccessful = ({ href }: SubmitSuccessfulProps) => {
  const device = useAppSelector(selectDeviceWith);

  return (
    <div className="p-8 w-full h-full  flex flex-col items-center justify-center text-agro-black">
      <Image src={check} alt="check icon" className="w-40 h-40" />
      <h4 className="text-xl sm:text-2xl md:text-[40px] font-semibold mt-[70px] mb-5 ">
        Submitted Successfully
      </h4>
      <p className="text-center text-sm  sm:w-1/2 ">
        Welldone! Your form has been successfully received. Click the button
        below to go the
        {device.width > 640 && <br />} dashboard.
      </p>
      <Link
        href={href}
        className="text-agro-black font-bold text-xl bg-agro-yellow w-[171px] h-[50px] rounded-md flex items-center justify-center mt-10"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default SubmitSuccessful;
