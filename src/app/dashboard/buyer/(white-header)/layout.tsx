import React from "react";

import HeaderLight from "@/components/HeaderLight";
import Footer from "@/components/Footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <HeaderLight />
      {children}
      <Footer />
    </section>
  );
};

export default AuthLayout;
