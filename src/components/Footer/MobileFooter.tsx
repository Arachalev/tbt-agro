import React from "react";

import logo from "../../assets/logo/logo1.png";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";

const MobileFooter = () => {
  return (
    <footer className="bg-white px-[4px] pt-[20px] pb-[20px]">
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

        
      </div>
    </footer>
  );
};

export default MobileFooter;
