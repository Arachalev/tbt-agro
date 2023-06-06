"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {  sellerProfileData } from "@/store/DummyData/navProfileData";
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

const SellerNav = () => {
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
      <div className="bg-agro-green  h-24 flex flex-row items-start justify-between pt-9 px-4 xl:px-20">
        <div className="flex items-center gap-16 ">
          <Link
            href="/dashboard/seller/account"
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

          <Image src={profile} alt="profile" />
          <div
            onClick={() => setShowProfileSettings((state) => !state)}
            className="text-white flex items-center gap-1"
          >
            <p className=" text-sm font-medium">
              {sellerProfile.fName} {sellerProfile.lName}
            </p>
            <Image src={arrow} alt="logo" className="h-full" />
          </div>
          {showProfileSettings && (
            <div className="absolute top-20 right-11">
              <NavProfile profileData={sellerProfileData} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SellerNav;
