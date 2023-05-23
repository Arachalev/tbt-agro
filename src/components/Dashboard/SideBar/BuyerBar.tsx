import React, { useState } from "react";

import SideBarLink from "../SideBarLinks";
import { buyerBarData } from "@/store/DummyData/Dashboard/SideBarData";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import {
  selectLinkState,
  editLinkState,
} from "@/store/redux/features/sideBarSlice";

import arrow from "../../../../public/images/downArrow.png";
import Image from "next/image";
import LogOutIcon from "@/components/Icons/LogOutIcon";
import PadlockIcon from "@/components/Icons/PadlockIcon";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const BuyerBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const device = useAppSelector(selectDeviceWith);
  const showLinks = useAppSelector(selectLinkState);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`h-screen z-10 ${
        showLinks ? "w-[271px]" : "w-[100px] flex flex-col items-center"
      } bg-white fixed  top-0 pt-[184px] `}
    >
      {device.width > 640 && device.width < 1024 && (
        <div
          onClick={() => {
            dispatch(editLinkState(!showLinks));
          }}
          className={`flex ${
            showLinks && "pl-[72px]"
          } items-center gap-5  mb-6`}
        >
          <RxHamburgerMenu className="text-lg" />
          {showLinks && <p className="">Menu</p>}
        </div>
      )}
      <ul
        className={`${
          showLinks ? "pl-[72px]" : "items-center"
        }  flex flex-col   gap-6 pb-10 border-b border-b-gray2`}
      >
        {buyerBarData.map((item) => (
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
      <ul
        className={`${showLinks && "pl-[72px]"}  flex flex-col  gap-4 mt-12 `}
      >
        {showLinks && (
          <div
            onClick={() => setShowAccount((state) => !state)}
            className="cursor-pointer text-sm flex items-center gap-2"
          >
            <p>Account Management</p>
            <Image src={arrow} alt="down arrow" className="mt-1" />
          </div>
        )}

        {/* <div>
          <Link
            href=""
            className={`flex items-center gap-5 ${
              isCurrentPath ? "text-agro-orange font-semibold" : ""
            }`}
          >
            {Icon && <PadlockIcon stroke={isCurrentPath ? "#F48924" : "#1A1A1A"} />}
            {showLinks && <div className="text-sm">{name}</div>}
          </Link>
        </div> */}

        {showLinks && (
          <SideBarLink
            showLinks={showLinks}
            name={"Address Book"}
            href={"address-book"}
          />
        )}
        {showLinks && (
          <SideBarLink
            showLinks={showLinks}
            name={"Close Account"}
            href={"close-account"}
          />
        )}
        <div className=" mt-12">
          <SideBarLink
            showLinks={showLinks}
            Icon={LogOutIcon}
            name={"Logout"}
            href={"log-out"}
          />
        </div>
      </ul>
    </div>
  );
};

export default BuyerBar;
