"use client";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";

import MobileNav from "./MobileNav";
import WebNav from "./WebNav";
import {
  selectDeviceWith,
  getDeviceWith,
} from "@/store/redux/features/deviceWidthSlice";

const NavBar = () => {
  const deviceWidth = useAppSelector(selectDeviceWith);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(getDeviceWith());
    });

    return window.removeEventListener("resize", () => {
      dispatch(getDeviceWith());
    });
  }, [deviceWidth, dispatch]);

  useEffect(() => {
    dispatch(getDeviceWith());
  }, []);

  return deviceWidth.width > 640 ? <WebNav /> : <MobileNav />;
};

export default NavBar;
