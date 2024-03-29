import React from "react";
import ProtectedRoutes from "@/components/ProtectedRoutes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <ProtectedRoutes userType="Seller">{children}</ProtectedRoutes>
    </section>
  );
};

export default Layout;
