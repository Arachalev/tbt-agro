import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { MdNotificationsNone, MdOutlineArrowDropDown } from "react-icons/md";
import PriButton from "../PriButton";
import logo from "../../assets/logo/logo1.png";
import profile from "../../../public/images/profile.png";
import arrow from "../../../public/images/arrowDown.png";

const SellerNav = () => {
  const router = useRouter();
  return (
    <nav className="top-0 w-full ">
      <div className="bg-agro-green  h-24 flex flex-row items-start justify-between pt-9 px-4 xl:px-20">
        <div className="flex items-center gap-16 ">
          <div className="w-[40px] h-[24px]  ">
            <Image src={logo} alt="logo" className="h-full" />
          </div>
        </div>
        <div className="flex flex-row gap-9 items-center ">
          <div className="relative">
            <MdNotificationsNone className="text-agro-yellow text-3xl " />
            <span className=" absolute top-0 right-0 w-3 h-3 rounded-full bg-white flex items-center justify-center text-[8px] font-bold">
              2
            </span>
          </div>
          <Image src={profile} alt="profile" />
          <div className="text-white flex items-center gap-1">
            <p className=" text-sm font-medium">Yinka Olatunji</p>
            <Image src={arrow} alt="logo" className="h-full" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SellerNav;
