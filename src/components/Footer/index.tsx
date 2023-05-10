"use client";

import React from "react";

import { BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import footerData from "../../store/DummyData/footerData.json";
import PriButton from "../PriButton";
import logo from "../../assets/logo/logo1.png";
import Image from "next/image";

const FooterItem = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div>
      <h4 className="text-sm font-bold mb-6">{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <p className="text-sm font-medium leading-6">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white px-[75px] pt-[70px] pb-[50px]">
      <div className="flex justify-between mb-12">
        <h4 className="text-sm font-medium">
          Trade Alert – Delivering the latest products trends and industry news
          straight to your inbox.
        </h4>
        <div className="flex gap-7 text-agro-green">
          <BsTwitter />
          <GrFacebookOption />
          <ImLinkedin2 />
        </div>
      </div>
      <div className="grid grid-cols-7">
        {footerData.map((item) => (
          <FooterItem title={item.title} items={item.items} key={item.title} />
        ))}
        <div className="w-[384px] col-span-2">
          <h4 className="text-sm font-bold mb-6">Subscribe now</h4>
          <div className="h-[42px] w-[383px] flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-[#F6F6F6] w-full pl-6 rounded-s-[4px] placeholder:text-sm "
            />
            <PriButton
              onClick={() => {
                console.log("sjkakdkjadkjsaaa");
              }}
              text="Subscribe"
              className="rounded-none rounded-e-[4px]  min-w-[115px]  "
            />
          </div>
        </div>
        <div className="  w-fit h-fit justify-self-center self-center">
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;