"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo/logo-lg.png";
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
import ExitIcon from "../Icons/ExitIcon";
import { SlArrowDown } from "react-icons/sl";
import { ItemCard } from "../ProductsCategoryCard";
import { productCategoryData } from "@/store/DummyData/productsCategory";
import getUniqueID from "@/hooks/getUniqueID";
import SecurityIcon from "../Icons/SecurityIcon";

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
      <div className="text-xl font-medium">{name}</div>
    </Link>
  );
};

const SideBar = ({ closePanel }: { closePanel: () => void }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const user = sessionStorage.getItem("userType");
  const token = sessionStorage.getItem("token");

  const isBuyer = user === "Buyer";
  const isSeller = user === "Seller";

  return (
    <div className="h-screen bg-gray-500/40 fixed top-0 right-0 w-screen z-50">
      <div className="flex items-center gap-4 bg-agro-green h-11 px-4 ">
        <span
          onClick={() => {
            closePanel();
          }}
        >
          <AiOutlineCloseCircle className="text-2xl text-white font-extrabold" />
        </span>

        <div className="w-[30px] h-[16px] relative">
          <Image src={logo} className="h-full" alt="logo" />
        </div>
      </div>
      {!token && (
        <div>
          <div className="bg-agro-yellow h-full flex flex-col gap-10 p-4 pt-8 w-full ">
            <div className="flex flex-col gap-8">
              {navLinksData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <ExitIcon />
                  <Link
                    onClick={() => closePanel()}
                    className="text-agro-black text-xl font-medium"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div
                className="flex items-center justify-between pr-6"
                onClick={() => {
                  setShowCategories(true);
                }}
              >
                <div className="flex items-center gap-2 ">
                  <ExitIcon />
                  <p className="text-agro-black text-xl font-medium">
                    Categories
                  </p>
                </div>
                <IoIosArrowDown className="font-bold text-2xl" />
              </div>
            </div>

            <hr className="bg-black m-0 border-0 h-[1.5px]" />

            <div className="">
              <button
                onClick={() => {
                  setShowSettings(true);
                  // closePanel();
                }}
                className="text-agro-black flex flex-row items-center justify-between pr-6 gap-1"
              >
                <p className="text-xl font-medium ">English - NGN </p>
                <IoIosArrowDown className="font-bold text-2xl" />
              </button>

              {showCategories && (
                <div
                  className=" fixed top-0 right-0 w-screen h-screen flex items-center justify-center bg-gray-400/50 z-[100]"
                  onClick={() => setShowCategories(false)}
                >
                  <div className="bg-agro-yellow py-6 px-10 flex flex-col gap-3">
                    {productCategoryData.map((item) => (
                      <ItemCard
                        variant="mobile"
                        name={item.name}
                        Icon={item.Icon}
                        key={getUniqueID()}
                        closeModal={() => {
                          setShowCategories(false);
                          closePanel();
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className=" fixed top-0 right-0 w-screen h-screen flex items-center justify-center bg-gray-400/50 z-[100]">
          <NavAccountSettings
            hideSettings={() => {
              setShowSettings(false);
            }}
          />
        </div>
      )}

      {!token && (
        <div className="flex flex-row items-center gap-5">
          {/* <Link
              className="text-white bg-agro-green px-4 py-1 flex items-center justify-center rounded-[10px] text-sm font-medium whitespace-nowrap"
              href="/web/sign-in"
            >
              Sign in
            </Link> */}

          <Link
            className=" bg-white px-4 py-1 flex items-center justify-center rounded-[10px] text-xl font-medium whitespace-nowrap"
            // onClick={() => router.push("/web/sign-up")}
            href="/web/sign-up"
          >
            {" "}
            Join for free
          </Link>
        </div>
      )}

      {isBuyer && (
        <div className="bg-agro-yellow h-full flex flex-col gap-10 p-4 pt-8 w-full ">
          <ul className={`flex flex-col   gap-6 pb-10 border-b border-black`}>
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

                <div className="text-xl font-medium text-agro-black">
                  Profile Details
                </div>
              </Link>
              <Link
                onClick={closePanel}
                href="/dashboard/buyer/password-settings"
                className={`flex items-center gap-5 `}
              >
                <SecurityIcon />

                <div className="text-xl font-medium text-agro-black">
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
              Icon={ExitIcon}
              name={"Logout"}
              href={"/dashboard/buyer/logout"}
            />
          </ul>
          <button
            onClick={() => {
              setShowSettings(true);
              // closePanel();
            }}
            className="text-agro-black flex flex-row items-center justify-between pr-6 gap-1"
          >
            <p className="text-xl font-medium ">English - NGN </p>
            <IoIosArrowDown className="font-bold text-2xl" />
          </button>
        </div>
      )}

      {isSeller && (
        <div className="bg-agro-yellow h-full flex flex-col gap-10 p-4 pt-8 w-full ">
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
  );
};

export default SideBar;
