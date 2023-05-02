import React, { useEffect } from "react";

import Link from "next/link";
import SideBarLink from "../SideBarLinks";

import { sellerBarData } from "@/store/DummyData/Dashboard/SideBarData";

// Buyer Icons
import ProfileIcon from "@/components/Icons/ProfileIcon";
import OrderIcon from "@/components/Icons/OrderIcon";
import LogOutIcon from "@/components/Icons/LogOutIcon";
import SupportIcon from "@/components/Icons/SupportIcon";
import PadlockIcon from "@/components/Icons/PadlockIcon";
import HelpIcon from "@/components/Icons/HelpIcon";

// 96px seller || 64 buyer

const SideBar = ({ isSeller = true }: { isSeller?: boolean }) => {
  const sellerBar = (
    <div
      className={`h-screen w-[271px]  pl-[72px] pt-[85px] bg-white fixed  border-4 ${
        isSeller ? " top-[96px]" : "top-[160px]"
      }`}
    >
      <ul className="flex flex-col gap-4">
        {sellerBarData.map((item) => (
          <li key={item.name}>
            <SideBarLink Icon={item.Icon} name={item.name} href={item.href} />
          </li>
        ))}
      </ul>
    </div>
  );

  const buyerBar = <div></div>;

  return sellerBar;
};

export default SideBar;
