import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar />
      {children}
      <Footer />
    </section>
  );
};

export default WebLayout;
