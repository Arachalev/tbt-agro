import React from "react";

import Image from "next/image";
import logo from "../../../public/logo/logo-lg.png";

type HeaderVariants = "base" | "sell" | "buy" | "quote";

const HeaderLight = ({ variant = "base" }: { variant?: HeaderVariants }) => {
  let content;

  switch (variant) {
    case "base":
      break;
    case "sell": {
      content = <div className=" ">Sell on TBT</div>;
    }

    case "buy":
    case "quote":
  }
  return (
    <div
      className={`bg-white h-[154px] w-screen flex items-center ${
        variant !== "base" ? "px-[72px]" : "justify-center "
      }`}
    >
      <Image src={logo} alt="logo" />
      {content}
    </div>
  );
};

export default HeaderLight;
