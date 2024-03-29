"use client";
import React from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../../../public/logo/logo-lg.png";
import Link from "next/link";

// type HeaderVariants = "base" | "sell" | "buy" | "quote";

const HeaderLight = ({ variant = "base" }: { variant?: string }) => {
  let content;

  const path = usePathname().trim().split("/");
  // console.log(path);

  switch (path[2]) {
    case "sign-up":
      break;
    case "sign-in":
      break;
    case "forgot-password":
      break;
    case "reset-password":
      break;
    case "buy-on-tbt":
      {
        content = "Buy on TBT";
      }
      break;

    case "sell-on-tbt":
      {
        content = "Sell on TBT";
      }
      break;

    // case "request-for-quotation-buyer": {
    //   content = (
    //     <div>
    //       <h4 className="overflow-clip sm:h-11 leading-none text-center text-lg sm:text-[40px]">
    //         Tell Us Your Sourcing Needs in 60 Seconds
    //       </h4>
    //       <p className="text-agro-orange text-center mt-1 sm:mt-2 text-xs  sm:text-base">
    //         ONE request, multiple quotes!
    //       </p>
    //     </div>
    //   );
    // }

    case "buy":
    case "quote":
  }

  if (path[3]) {
    content = (
      <div className="">
        <h4 className="overflow-cli  leading-none text-center text-lg sm:text-[40px]">
          Tell Us Your Sourcing Needs in 60 Seconds
        </h4>
        <p className="text-agro-orange text-center mt-1 sm:mt-2 text-xs  sm:text-base">
          ONE request, multiple quotes!
        </p>
      </div>
    );
  }

  const headerContainer = (
    <div className="w-full h-full flex flex-col items-center justify-center  text-2xl sm:text-[40px] text-agro-black font-semibold overflow-clip ">
      {content}
    </div>
  );

  const notAuth =
    path[2] !== "sign-up" &&
    path[2] !== "sign-in" &&
    path[2] !== "forgot-password" &&
    path[2] !== "reset-password";
  return (
    <div
      className={`bg-white px-4 xl:px-[72px] h-20 sm:h-[154px] w-screen flex items-center justify-center  `}
    >
      <Link href="/web/home">
        <Image src={logo} alt="logo" />
      </Link>
      {notAuth && headerContainer}
    </div>
  );
};

export default HeaderLight;
