"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo/logo-light.png";
import { navLinksData } from "@/store/DummyData/navLinks";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsArrow90DegDown } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import NavAccountSettings from "../NavAccountSettings";
import { usePathname } from "next/navigation";
import {
  buyerBarData,
  sellerBarData,
} from "@/store/DummyData/Dashboard/SideBarData";
import PadlockIcon from "../Icons/PadlockIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import LogOutIcon from "../Icons/LogOutIcon";

interface MobileSideBarLinkProps {
  Icon?: React.FC<{ stroke?: string }>;
  name: string;
  href: string;
  closePanel: () => void;
}

const MobileSideBarLink = ({
  Icon,
  name,
  href,
  closePanel,
}: MobileSideBarLinkProps) => {
  const pathArr = usePathname().trim().split("/");

  const hrefArr = href.split("/");

  const isCurrentPath = pathArr[3] === hrefArr[3];

  return (
    <Link
      onClick={closePanel}
      href={href}
      className={`flex items-center gap-5  `}
    >
      {Icon && <Icon stroke={"#1A1A1A"} />}
      <div className="text-sm">{name}</div>
    </Link>
  );
};

const SideBar = ({ closePanel }: { closePanel: () => void }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const user = sessionStorage.getItem("userType");

  const isBuyer = user === "Buyer";
  const isSeller = user === "Seller";

  return (
    <div className="h-screen bg-gray-500/40 fixed top-0 right-0 w-screen z-50">
      <div className="bg-agro-yellow h-full flex flex-col gap-10  p-4 w-60 ">
        <div className="flex items-center gap-4">
          <span
            onClick={() => {
              closePanel();
            }}
          >
            <AiOutlineCloseCircle className="text-2xl text-black font-extrabold" />
          </span>

          <div className="w-[30px] h-[16px] relative">
            <Image src={logo} className="h-full" alt="logo" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {navLinksData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <BsArrow90DegDown className="rotate-[270deg] text-xs" />
              <Link
                onClick={() => closePanel()}
                className="text-agro-black text-sm font-medium"
                href={item.href}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="">
          <button
            onClick={() => {
              setShowSettings(true);
              closePanel();
            }}
            className="text-agro-black flex flex-row items-center gap-1"
          >
            <p className="text-sm font-medium ">English - NGN </p>
            <IoIosArrowDown className="text-xl" />
          </button>
          {showSettings && (
            <div className=" fixed top-0 right-0 w-screen h-screen flex items-center justify-center bg-gray-400/50 z-[100]">
              <NavAccountSettings
                hideSettings={() => {
                  setShowSettings(false);
                }}
              />
            </div>
          )}
        </div>
        {isBuyer && (
          <div className="">
            <ul
              className={`flex flex-col   gap-6 pb-10 border-b border-b-gray2`}
            >
              {buyerBarData.map((item) => (
                <li key={item.name}>
                  <MobileSideBarLink
                    closePanel={closePanel}
                    Icon={item.Icon}
                    name={item.name}
                    href={item.href}
                  />
                </li>
              ))}
              <div className="flex flex-col gap-6 w-fit  ">
                <Link
                  onClick={closePanel}
                  href="/dashboard/buyer/edit-profile"
                  className={`flex items-center gap-5 `}
                >
                  <ProfileIcon stroke="#1A1A1A" />

                  <div className="text-sm text-agro-black">Profile Details</div>
                </Link>
                <Link
                  onClick={closePanel}
                  href="/dashboard/buyer/password-settings"
                  className={`flex items-center gap-5 `}
                >
                  <PadlockIcon stroke="#1A1A1A" />

                  <div className="text-sm text-agro-black">
                    Security Settings
                  </div>
                </Link>
              </div>
              {/* 
                <MobileSideBarLink
                  name={"Address Book"}
                  href={"address-book"}
                /> */}

              <MobileSideBarLink
                closePanel={closePanel}
                Icon={LogOutIcon}
                name={"Logout"}
                href={"/dashboard/buyer/logout"}
              />

              {/* <MobileSideBarLink
                  closePanel={closePanel}
                  name={"Close Account"}
                  href={"/dashboard/buyer/delete-account"}
                /> */}
            </ul>
          </div>
        )}

        {isSeller && (
          <div>
            <ul className="flex flex-col gap-6">
              {sellerBarData.map((item) => (
                <li key={item.name}>
                  <MobileSideBarLink
                    Icon={item.Icon}
                    name={item.name}
                    href={item.href}
                    closePanel={closePanel}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
