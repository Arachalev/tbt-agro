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

  const window = new Window();
  const session = window.sessionStorage;

  const token = session.getItem("token");
  useEffect(() => {
    if (!authorized.token && userType !== authorized.userType) {
      if (!token && session.getItem("userType") !== userType) {
        router.push("/web/sign-in");
      }
    }
  }, [authorized, router, token, session, userType]);

  return authorized.token || token ? <div>{children}</div> : <div> </div>;
};

export default ProtectedRoutes;
