import Footer from "@/components/Footer";
import HeaderDark from "@/components/HeaderDark";
import NavBar from "@/components/NavBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar />
      <main className="mt-40">
        <HeaderDark />
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default layout;
