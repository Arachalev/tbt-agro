"use client";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";

import MobileNav from "./MobileNav";
import WebNav from "./WebNav";
import {
  selectDeviceWith,
  getDeviceWith,
} from "@/store/redux/features/deviceWidthSlice";
import { editLinkState } from "@/store/redux/features/sideBarSlice";

const NavBar = () => {
  const device = useAppSelector(selectDeviceWith);
  const dispatch = useAppDispatch();

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
  }, []);

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
