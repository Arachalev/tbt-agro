"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import { selectAuthToken } from "@/store/redux/services/authSlice/authSlice";
import { setCredentials } from "@/store/redux/services/authSlice/authSlice";

const ProtectedRoutes = ({
  children,
  userType,
}: {
  children: React.ReactNode;
  userType: string;
}) => {
  const router = useRouter();

  const authorized = useAppSelector(selectAuthToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const session = sessionStorage;

    const token = session.getItem("token");

    if (!token || session.getItem("userType") !== userType) {
      router.replace("/web/sign-in");
    } else {
      dispatch(setCredentials({ userType, token }));
    }
  }, [authorized, dispatch, router, userType]);

  return authorized.token ? <div>{children}</div> : <div> </div>;
};

export default ProtectedRoutes;
