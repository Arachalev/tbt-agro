"use client";
import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";

import MobileNav from "./MobileNav";
import WebNav from "./WebNav";
import {
  selectDeviceWith,
  getDeviceWith,
} from "@/store/redux/features/deviceWidthSlice";
import { editLinkState } from "@/store/redux/features/sideBarSlice";
import { setCredentials } from "@/store/redux/services/authSlice/authSlice";
import { useGetBuyerProfileQuery } from "@/store/redux/services/buyerSlice/profileSlice/profileApiSlice";
import { setBuyerProfile } from "@/store/redux/services/buyerSlice/profileSlice/profileSlice";
import { useGetSellerProfileQuery } from "@/store/redux/services/sellerSlice/profileSlice/profileApiSlice";
import { setSellerProfile } from "@/store/redux/services/sellerSlice/profileSlice/profileSlice";

const NavBar = () => {
  const [fetchBuyerProfile, setFetchBuyerProfile] = useState(true);
  const [fetchSellerProfile, setFetchSellerProfile] = useState(true);

  const { data, isError, isFetching, isLoading, isSuccess, error } =
    useGetBuyerProfileQuery("", { skip: fetchBuyerProfile });

  const {
    data: sellerProfile,
    isLoading: sellerProfileLoading,
    error: sellerProfileError,
  } = useGetSellerProfileQuery("", { skip: fetchSellerProfile });

  const device = useAppSelector(selectDeviceWith);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = sessionStorage.getItem("userType");

    if (user === "Buyer") {
      setFetchBuyerProfile(false);
    } else if (user === "Seller") {
      setFetchSellerProfile(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setBuyerProfile({ userData: data.data }));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (sellerProfile) {
      dispatch(
        setSellerProfile({
          userData: sellerProfile.data,
        })
      );
    }
  }, [sellerProfile, dispatch]);

  useEffect(() => {
    if (sellerProfile) {
      dispatch(
        setSellerProfile({
          userData: sellerProfile.data,
        })
      );
    }
  }, []);


  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(getDeviceWith());
    });

    return window.removeEventListener("resize", () => {
      dispatch(getDeviceWith());
    });
  }, [device, dispatch]);

  useEffect(() => {
    dispatch(getDeviceWith());
    const token = sessionStorage.getItem("token");
    const userType = sessionStorage.getItem("userType");
    if (token) {
      dispatch(setCredentials({ token, userType }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (device.width > 640 && device.width < 1024) {
      dispatch(editLinkState(false));
    } else {
      dispatch(editLinkState(true));
    }
  }, [device.width, dispatch]);

  return device.width > 640 ? <WebNav /> : <MobileNav />;
};

export default NavBar;
