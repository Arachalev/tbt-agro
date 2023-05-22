import React, { useState, useEffect } from "react";

import SideBarLink from "../SideBarLinks";
import { RxHamburgerMenu } from "react-icons/rx";

import { sellerBarData } from "@/store/DummyData/Dashboard/SideBarData";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import {
  editLinkState,
  selectLinkState,
} from "@/store/redux/features/sideBarSlice";
import BuyerBar from "./BuyerBar";

// 96px seller || 64 buyer

const SideBar = ({ isSeller = true }: { isSeller?: boolean }) => {
  const device = useAppSelector(selectDeviceWith);
  const showLinks = useAppSelector(selectLinkState);
  const dispatch = useAppDispatch();

  const sellerBar = (
    <div
      className={`h-screen z-10 ${
        showLinks
          ? "w-[271px]  pl-[72px]"
          : "w-[100px] flex flex-col items-center"
      } bg-white fixed top-0 pt-[183px]`}
    >
      {device.width > 640 && device.width < 1024 && (
        <div
          onClick={() => {
            dispatch(editLinkState(!showLinks));
          }}
          className="flex items-center gap-5  mb-6"
        >
          <RxHamburgerMenu className="text-lg" />
          {showLinks && <p>Menu</p>}
        </div>
      )}

      <ul className="flex flex-col gap-6">
        {sellerBarData.map((item) => (
          <li key={item.name}>
            <SideBarLink
              showLinks={showLinks}
              Icon={item.Icon}
              name={item.name}
              href={item.href}
            />
          </li>
        ))}
      </ul>
    </div>
  );

  return isSeller ? sellerBar : <BuyerBar />;
};

export default SideBar;
