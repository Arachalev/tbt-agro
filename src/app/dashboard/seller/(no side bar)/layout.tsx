"use client";
import React from "react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="  ">
      <NavBar />
      <main className={`mt-[96px] bg-agro-gray min-h-[calc(100vh-96px)] `}>
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
