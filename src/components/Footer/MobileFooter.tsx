import React from "react";

import logo from "../../assets/logo/logo1.png";
import Image from "next/image";
import footerData from "../../store/DummyData/footerData.json";
import { BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import FooterItem from "./FooterItem";
import PriButton from "../PriButton";

const MobileFooter = () => {
  return (
    <footer className="bg-white px-4 pt-[20px] pb-[20px]">
      <div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h4 className="text-sm font-medium text-center">
            Trade Alert – Delivering the latest products trends and industry
            news straight to your inbox.
          </h4>
          <div className="flex gap-4 text-agro-green">
            <BsTwitter />
            <GrFacebookOption />
            <ImLinkedin2 />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 justify-center">
          {footerData.map((item) => {
            return (
              <FooterItem
                variant="mobile"
                title={item.title}
                items={item.items}
                key={item.title}
              />
            );
          })}
        </div>
        <div className="mt-8 w-full col-span-2">
          <div className="h-[42px]  flex">
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
      </div>
    </footer>
  );
};

export default MobileFooter;
