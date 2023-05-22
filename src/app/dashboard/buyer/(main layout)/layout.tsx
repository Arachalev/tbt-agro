"use client";
import React from "react";

import NavBar from "@/components/NavBar";
import SideBar from "@/components/Dashboard/SideBar";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import { selectLinkState } from "@/store/redux/features/sideBarSlice";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const device = useAppSelector(selectDeviceWith);

  const showLinks = useAppSelector(selectLinkState);

  return (
    <section className="  ">
      <NavBar />
      <div className=" sm:mt-[160px]  ">
        {device.width > 640 && <SideBar isSeller={false} />}
        <main
          className={` ${
            device.width > 1024
              ? "ml-[271px] "
              : showLinks && device.width > 640
              ? "ml-[271px]"
              : device.width > 640
              ? "ml-[100px]"
              : "ml-0"
          } bg-agro-gray min-h-[calc(100vh-64px)]  sm:min-h-[calc(100vh-160px)]`}
        >
          {children}
        </main>
      </div>
    </section>
  );
};

export default Layout;
