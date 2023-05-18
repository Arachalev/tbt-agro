import React from "react";

import SideBarLink from "../SideBarLinks";

import { sellerBarData } from "@/store/DummyData/Dashboard/SideBarData";

// 96px seller || 64 buyer

const SideBar = ({ isSeller = true }: { isSeller?: boolean }) => {
  const sellerBar = (
    <div
      className={`h-screen w-[271px]  pl-[72px] bg-white fixed border-4 top-0 -z-10
      ${isSeller ? " pt-[183px]" : "pt-[160px]"}`}
    >
      <ul className="flex flex-col gap-6">
        {sellerBarData.map((item) => (
          <li key={item.name}>
            <SideBarLink Icon={item.Icon} name={item.name} href={item.href} />
          </li>
        ))}
      </ul>
    </div>
  );

  return sellerBar;
};

export default SideBar;
