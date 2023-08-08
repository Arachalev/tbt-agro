import React from "react";

import logo from "../../assets/logo/logo1.png";
import Image from "next/image";
import footerData from "../../store/DummyData/footerData.json";
import {
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import FooterItem from "./FooterItem";
import PriButton from "../PriButton";
import Link from "next/link";

const MobileFooter = () => {
  return (
    <footer className="bg-agro-yellow px-4 pt-[20px] pb-20">
      <div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h4 className="text-[7px] whitespace-nowrap font-bold text-center ">
            Trade Alert – Delivering the latest products trends and industry
            news straight to your inbox.
          </h4>
          <div className="flex flex-wrap justify-between w-full gap-y-8">
            <div className="flex flex-col gap-2 w-1/2 ">
              <h4 className="font-bold text-xs">Customer Services</h4>
              <ul className="text-xs font-medium flex flex-col gap-2 ">
                <li>
                  <button>Contact Us</button>
                </li>
                <li>
                  <button>Help Center</button>
                </li>
                <li>
                  <button>Policies & rules</button>
                </li>
                <li>
                  <button>Give your feedback</button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 w-1/2 ">
              <h4 className="font-bold text-xs">About</h4>
              <ul className="text-xs font-medium flex flex-col gap-2 ">
                <li>
                  <Link href="/web/about-us">About us</Link>
                </li>
                <li>
                  <button>Blog</button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 w-1/2 ">
              <h4 className="font-bold text-xs">Source on TBT</h4>
              <ul className="text-xs font-medium flex flex-col gap-2 ">
                <li>
                  <button>All categories</button>
                </li>
                <li>
                  <Link href="/dashboard/buyer/request-for-quotation-buyer">
                    Request for quotation
                  </Link>
                </li>
                <li>
                  <button>Buyer partners</button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 w-1/2 ">
              <h4 className="font-bold text-xs">Sell on TBT</h4>
              <ul className="text-xs font-medium flex flex-col gap-2 ">
                <li>
                  <Link href="/web/sign-up">Sign up now</Link>
                </li>
                <li>
                  <div className="flex gap-4 text-agro-green mt-6">
                    <Link href="https://twitter.com/tbt_agro" target="_blank">
                      <BsTwitter />
                    </Link>
                    <Link
                      href="https://web.facebook.com/tbt.agro/"
                      target="_blank"
                    >
                      <GrFacebookOption />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/tbt-logistics-limited/"
                      target="_blank"
                    >
                      <ImLinkedin2 />
                    </Link>
                    <Link
                      href="https://www.instagram.com/tbt_agro/"
                      target="_blank"
                    >
                      <BsInstagram />
                    </Link>
                    <Link href="https://wa.me/+2348115838997" target="_blank">
                      <BsWhatsapp />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex gap-4 text-agro-green">
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
          </div> */}
        </div>
        {/* <div className="mt-8 flex flex-col gap-2 justify-center">
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
        </div> */}
        {/* <div className="mt-8 w-full col-span-2">
          <h4 className="text-sm font-bold mb-4">
            Subscribe to our Newsletter
          </h4>
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
          <h4 className="text-sm font-bold mb-4">Address</h4>
          <p className=" text-sm font-medium leading-6 mt-4">
            99, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default MobileFooter;
