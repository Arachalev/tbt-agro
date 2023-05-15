import Footer from "@/components/Footer";
import HeaderDark from "@/components/HeaderDark";
import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar />
      <HeaderDark />
      {children}
      <Footer />
    </section>
  );
};

export default layout;
