"use client";

import React, { useState } from "react";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import PriButton from "../PriButton";
import logo from "../../assets/logo/logo1.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { navLinksData } from "@/store/DummyData/navLinks";
import Cart from "../Cart";

import NavAccountSettings from "../NavAccountSettings";
import NavProfile from "../NavProfile";

import SellerNav from "./SellerNav";

const WebNav = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showProfileSettings, setShowProfileSettings] =
    useState<boolean>(false);

  const router = useRouter();
  const pathArr = usePathname().trim().split("/");

  const seller = pathArr[2] === "seller";

  return seller ? (
    <SellerNav />
  ) : (
    <nav className="top-0 absolute z-50 w-full ">
      <div className="bg-agro-green  h-24 flex flex-row items-start justify-between pt-9 px-4 xl:px-20">
        <div className="flex items-center gap-16 ">
          <div className="w-[40px] h-[24px] relative">
            <Image src={logo} className="h-full" alt="logo" />
          </div>

          <div className="h-10  lg:w-[700px] flex rounded-s-md overflow-hidden">
            <input
              type="text"
              className="w-full pl-8 placeholder:text-sm lg:placeholder:text-base"
              placeholder="what are you looking for..."
            />
            <span className="bg-agro-yellow h-full items-center justify-center flex w-11 rounded-e-md  ">
              <AiOutlineSearch className="text-lg" />
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-14 items-center">
          <div className="flex flex-row items-center gap-5">
            <Link
              className="text-white text-sm font-medium whitespace-nowrap"
              href="/auth/sign-in"
            >
              Sign in
            </Link>

            <PriButton
              text="Join for free"
              className="py-2 px-4 text-sm whitespace-nowrap"
              onClick={() => router.push("/web/sign-up")}
            />
          </div>

          <div className=" flex items-center relative text-sm h-8">
            <Cart /> <p className="text-white ">Cart</p>
            <span className="absolute top-0  left-2 text-agro-yellow font-medium">
              2
            </span>
          </div>
        </div>
      </div>

      <div className="bg-agro-yellow  flex flex-row items-center justify-between h-16 px-4 xl:px-20">
        <div className="flex flex-row gap-1 md:gap-2 lg:gap-3 xl:gap-6">
          <button className="flex flex-row items-center gap-1">
            <RxHamburgerMenu />
            <p className="m-0 font-medium text-xs lg:text-sm">Categories</p>
            <IoIosArrowDown className="lg:text-lg" />
          </button>
          {navLinksData.map((item) => (
            <Link
              className="text-agro-black text-xs lg:text-sm font-medium "
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setShowSettings(true)}
          className="text-agro-black flex flex-row items-center gap-1"
        >
          <p className="text-xs lg:text-sm font-medium ">English - NGN </p>
          <IoIosArrowDown className="lg:text-xl" />
        </button>
        {showSettings && (
          <div className="fixed top-[105px]  right-[52px]">
            <NavAccountSettings
              hideSettings={() => {
                setShowSettings(false);
              }}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default WebNav;
