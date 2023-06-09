"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/redux/hooks";
import { selectAuthToken } from "@/store/redux/services/authSlice/authSlice";

const ProtectedRoutes = ({
  children,
  userType,
}: {
  children: React.ReactNode;
  userType: string;
}) => {
  const router = useRouter();

  const authorized = useAppSelector(selectAuthToken);
  let appToken;

  useEffect(() => {
    // const window = new Window();
    const session = sessionStorage;

    const token = session.getItem("token");
    appToken = token;
    if (!authorized.token && userType !== authorized.userType) {
      if (!token && session.getItem("userType") !== userType) {
        router.push("/web/sign-in");
      }
    }
  }, [authorized, router, userType]);

  return authorized.token || appToken ? <div>{children}</div> : <div> </div>;
};

export default ProtectedRoutes;
