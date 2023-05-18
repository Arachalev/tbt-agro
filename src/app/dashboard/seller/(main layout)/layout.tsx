"use client";
import React from "react";

import NavBar from "@/components/NavBar";
import SideBar from "@/components/Dashboard/SideBar";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const device = useAppSelector(selectDeviceWith);

  return (
    <section className="  ">
      <NavBar />
      {device.width > 640 && <SideBar />}
      <main className=" sm:ml-[271px]  bg-agro-gray ">{children}</main>
    </section>
  );
};

export default Layout;
