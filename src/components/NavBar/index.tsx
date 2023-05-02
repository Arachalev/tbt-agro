"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import PriButton from "../PriButton";
import logo from "../../assets/logo/logo1.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { navLinksData } from "@/store/DummyData/navLinks";
import Cart from "../Cart";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 w-full">
      <div className="bg-agro-green  h-24 flex flex-row items-start justify-between pt-9 px-20">
        <div className="flex items-center gap-16 ">
          <div className="w-[40px] h-[24px] relative">
            <Image src={logo} className="h-full" alt="logo" />
          </div>

          <div className="h-10 w-[700px] flex rounded-s-md overflow-hidden">
            <input
              type="text"
              className="w-full pl-8"
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
              className="text-white text-sm font-medium"
              href="/auth/sign-in"
            >
              Sign in
            </Link>

            <PriButton
              text="Join for free"
              className="py-2 px-4 text-sm"
              onClick={() => router.push("/auth/sign-up")}
            />
          </div>

          <div className=" flex items-center relative text-sm ">
            <Cart /> <p className="text-white ">Cart</p>
            <span className="absolute -top-2  left-2 text-agro-yellow font-medium">
              2
            </span>
          </div>
        </div>
      </div>

      <div className="bg-agro-yellow flex flex-row items-center justify-between h-16 px-20">
        <div className="flex flex-row gap-6">
          <button className="flex flex-row items-center gap-1">
            <RxHamburgerMenu />
            <p className="m-0 font-medium text-sm">Categories</p>
            <IoIosArrowDown className="text-lg" />
          </button>
          {navLinksData.map((item) => (
            <Link
              className="text-agro-black text-sm font-medium"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="text-agro-black flex flex-row items-center gap-1">
          <p className="text-sm font-medium ">English - NGN </p>
          <IoIosArrowDown className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
