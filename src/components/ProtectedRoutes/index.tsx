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

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!authorized.token && userType !== authorized.userType) {
      if (!token && sessionStorage.getItem("userType") !== userType) {
        router.push("/web/sign-in");
      }
    }
  }, [authorized, router, token, userType]);

  return authorized.token || token ? <div>{children}</div> : <div> </div>;
};

export default ProtectedRoutes;
