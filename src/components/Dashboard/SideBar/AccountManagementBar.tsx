import React, { useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import {
  selectLinkState,
  editLinkState,
} from "@/store/redux/features/sideBarSlice";

import PadlockIcon from "@/components/Icons/PadlockIcon";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import SideBarLink from "../SideBarLinks";
import arrow from "../../../../public/images/downArrow.png";

const AccountManagementBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const device = useAppSelector(selectDeviceWith);
  const showLinks = useAppSelector(selectLinkState);
  const dispatch = useAppDispatch();
  const path = usePathname().split("/")


  const securityPath = ["delete-account", "password-settings"];

  return (
    <div
      className={`h-screen z-10 ${
        showLinks ? "w-[271px]" : "w-[100px] flex flex-col items-center"
      } bg-white fixed  top-0 pt-[280px]  `}
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

      <div className={`${showLinks && "pl-[72px]"}`}>
        <SideBarLink
          showLinks={showLinks}
          Icon={ProfileIcon}
          name={"Profile Details"}
          href={"/dashboard/buyer/edit-profile"}
        />
      </div>

      <ul className={`${showLinks && "pl-[72px]"}  flex flex-col  gap-4 mt-4`}>
        {showLinks && (
          <div
            onClick={() => setShowAccount((state) => !state)}
            className="cursor-pointer text-sm flex items-center gap-2"
          >
            <PadlockIcon />
            {/* stroke="#4C6538"  */}
            <p>Security Details</p>
            <Image src={arrow} alt="down arrow" className="mt-1" />
          </div>
        )}
        {showAccount && (
          <div className="flex flex-col gap-4 shadow-xl bg-white p-4 pr-8 w-fit rounded-md ">
            <Link
              href="/dashboard/buyer/password-settings"
              className={`flex items-center gap-5 `}
            >
              <div className="text-sm text-agro-green">Change Password</div>
            </Link>
            <Link
              href="/dashboard/buyer/delete-account"
              className={`flex items-center gap-5 `}
            >
              <div className="text-sm text-agro-green">Delete Account</div>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
};

export default AccountManagementBar;
