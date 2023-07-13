"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { sellerProfileData } from "@/store/DummyData/navProfileData";
import { MdNotificationsNone, MdOutlineArrowDropDown } from "react-icons/md";
import logo from "../../assets/logo/logo1.png";
import profile from "../../../public/images/profile.png";
import arrow from "../../../public/images/arrowDown.png";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  selectSellerProfile,
  setSellerProfile,
} from "@/store/redux/services/sellerSlice/profileSlice/profileSlice";
import { useGetSellerProfileQuery } from "@/store/redux/services/sellerSlice/profileSlice/profileApiSlice";
import { useGetAllNotificationsQuery } from "@/store/redux/services/notificationSlice/notificationApiSlice";
import NavProfile from "../NavProfile";
import SideBar from "./SideBar";
import { RxHamburgerMenu } from "react-icons/rx";

const SellerNav = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const [showProfileSettings, setShowProfileSettings] =
    useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const sellerProfile = useAppSelector(selectSellerProfile);

  const { data, isLoading, error } = useGetSellerProfileQuery("");

  const {
    data: notifications,
    isLoading: notificationsLoading,
    error: notificationsError,
  } = useGetAllNotificationsQuery("");

  useEffect(() => {
    if (data) {
      dispatch(
        setSellerProfile({
          userData: data.data,
        })
      );
    }
  }, [data, dispatch]);

  return (
    <nav className="top-0 absolute z-50 w-full  ">
      {showSideBar && (
        <SideBar
          closePanel={() => {
            setShowSideBar(false);
          }}
        />
      )}
      <div className="bg-agro-green h-24 flex items-center justify-between px-4 xl:px-20">
        <div className="flex items-center gap-4 ">
          <span
            className="sm:hidden"
            onClick={() => {
              setShowSideBar(true);
            }}
          >
            <RxHamburgerMenu className="text-lg text-white " />
          </span>
          <Link
            // href="/dashboard/seller/account"
            href="/web/home"
            className="w-[40px] h-[24px]  "
          >
            <Image src={logo} alt="logo" className="h-full" />
          </Link>
        </div>
        <div className="flex flex-row gap-9 items-center ">
          <div className="relative">
            <MdNotificationsNone className="text-agro-yellow text-3xl " />
            <span className=" absolute top-0 right-0 w-3 h-3 rounded-full bg-white flex items-center justify-center text-[8px] font-bold">
              {notifications?.data?.data.length}
            </span>
          </div>

          <Image
            src={sellerProfile.profilePicture ?? profile}
            width={32}
            height={32}
            alt="profile"
          />
          <div
            onClick={() => setShowProfileSettings((state) => !state)}
            className="text-white flex items-center gap-1 cursor-pointer"
          >
            <p className=" text-sm font-medium">
              {sellerProfile.fName} {sellerProfile.lName}
            </p>
            <Image src={arrow} alt="logo" className="h-full" />
          </div>
          {showProfileSettings && (
            <div className="absolute top-20 right-11">
              <NavProfile
                closeProfile={() => setShowProfileSettings(false)}
                profileData={sellerProfileData}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SellerNav;
