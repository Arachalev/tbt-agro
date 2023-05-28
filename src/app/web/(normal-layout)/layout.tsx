import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar />
      <main className="mt-40 ">{children}</main>
      <Footer />
    </section>
  );
};

export default WebLayout;
