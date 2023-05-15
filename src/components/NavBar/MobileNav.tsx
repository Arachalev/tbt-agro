import React, { useState } from "react";

import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillPersonFill } from "react-icons/bs";

import Cart from "../Cart";
import logo from "../../assets/logo/logo1.png";
import SideBar from "./SideBar";
import NavProfile from "../NavProfile";

const MobileNav = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showNavProfile, setShowNavProfile] = useState(false);
  return (
    <nav>
      {showSideBar && (
        <SideBar
          closePanel={() => {
            setShowSideBar(false);
          }}
        />
      )}
      {/* {showNavProfile && (
        <div className=" fixed top-0 right-0 w-screen h-screen flex items-center justify-center bg-gray-400/50 z-[100]">
          <NavProfile
            hideSettings={() => {
              setShowSettings(false);
            }}
          />
        </div>
      )} */}
      <div className="bg-agro-green h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span
            onClick={() => {
              setShowSideBar(true);
            }}
          >
            <RxHamburgerMenu className="text-lg text-white " />
          </span>

          <div className="w-[30px] h-[16px] relative">
            <Image src={logo} className="h-full" alt="logo" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <BsFillPersonFill className="text-white text-lg" />
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
