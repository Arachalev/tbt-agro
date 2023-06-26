"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userType = sessionStorage.getItem("userType");

    userType && setUser(userType);
  }, []);

  return (
    <section>
      <NavBar />
      <main className={`${user === "Seller" ? "mt-[96px]" : "mt-40"}`}>
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default WebLayout;
