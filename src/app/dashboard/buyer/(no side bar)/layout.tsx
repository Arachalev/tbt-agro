"use client";
import React from "react";

import NavBar from "@/components/NavBar";
import SideBar from "@/components/Dashboard/SideBar";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";
import { selectLinkState } from "@/store/redux/features/sideBarSlice";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const device = useAppSelector(selectDeviceWith);

  const showLinks = useAppSelector(selectLinkState);

  return (
    <section className="  ">
      <NavBar />
      <main
        className={`sm:mt-[160px]  bg-agro-gray min-h-[calc(100vh-64px)]  sm:min-h-[calc(100vh-160px)]`}
      >
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
