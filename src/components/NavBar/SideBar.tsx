import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo/logo-light.png";
import { navLinksData } from "@/store/DummyData/navLinks";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrow90DegDown } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import NavAccountSettings from "../NavAccountSettings";

const SideBar = ({ closePanel }: { closePanel: () => void }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <div className="h-screen bg-gray-500/40 fixed top-0 right-0 w-screen z-50">
      <div className="bg-agro-yellow h-full flex flex-col gap-10  p-4 w-60 ">
        <div className="flex items-center gap-4">
          <span
            onClick={() => {
              closePanel();
            }}
          >
            <AiOutlineClose className="text-lg text-black font-bold" />
          </span>

          <div className="w-[30px] h-[16px] relative">
            <Image src={logo} className="h-full" alt="logo" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {navLinksData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <BsArrow90DegDown className="rotate-[270deg] text-xs" />
              <Link
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
            onClick={() => setShowSettings(true)}
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
      </div>
    </div>
  );
};

export default SideBar;
