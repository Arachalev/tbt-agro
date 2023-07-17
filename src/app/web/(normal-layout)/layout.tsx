"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import { useAppSelector } from "@/store/redux/hooks";
import { selectDeviceWith } from "@/store/redux/features/deviceWidthSlice";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userType = sessionStorage.getItem("userType");

    userType && setUser(userType);
  }, []);

  const device = useAppSelector(selectDeviceWith);

  return (
    <section>
      <NavBar />
      <main
        className={`${
          user === "Seller" && device.width > 640 ? "mt-[160px]" : "sm:mt-40"
        }`}
      >
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default WebLayout;
