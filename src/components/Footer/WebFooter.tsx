import React from "react";

import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import footerData from "../../store/DummyData/footerData.json";
import PriButton from "../PriButton";
import logo from "../../assets/logo/logo1.png";
import Image from "next/image";
import FooterItem from "./FooterItem";
import Link from "next/link";

const WebFooter = () => {
  return (
    <footer className="bg-white px-4 xl:px-[75px] pt-[70px] pb-[50px]">
      <div className="flex justify-between mb-12">
        <h4 className="text-sm font-medium">
          Trade Alert – Delivering the latest products trends and industry news
          straight to your inbox.
        </h4>
        <div className="flex gap-7 text-agro-green">
          <Link href="https://twitter.com/tbt_agro" target="_blank">
            <BsTwitter />
          </Link>
          <Link href="https://web.facebook.com/tbt.agro/" target="_blank">
            <GrFacebookOption />
          </Link>
          <Link
            href="https://www.linkedin.com/company/tbt-logistics-limited/"
            target="_blank"
          >
            <ImLinkedin2 />
          </Link>
          <Link href="https://wa.me/+2348115838997" target="_blank">
            <BsWhatsapp />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-7">
        {footerData.map((item) => (
          <FooterItem title={item.title} items={item.items} key={item.title} />
        ))}
        <div className="w-full xl:w-[384px] col-span-3 xl:col-span-2">
          <h4 className="text-sm font-bold mb-6">
            Subscribe to our Newsletter
          </h4>
          <div className="h-[42px] w-full xl:w-[383px] flex">
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
          <p className=" text-sm font-medium leading-6 mt-4">
            99, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria.
          </p>
        </div>
        <div className=" hidden 2xl:inline w-fit h-fit justify-self-center self-center">
          <Image src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default WebFooter;
