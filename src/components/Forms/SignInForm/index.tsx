"use client";

import React, { useState, useEffect } from "react";

import PriButton from "@/components/PriButton";
import CustomInput from "@/components/CustomInput";
import { useLoginMutation } from "@/store/redux/services/authSlice/authApiSlice";
import { useGetBuyerProfileQuery } from "@/store/redux/services/buyerSlice/profileSlice/profileApiSlice";
import StatusModal from "../StatusModal";
import { useAppDispatch } from "@/store/redux/hooks";
import { setCredentials } from "@/store/redux/services/authSlice/authSlice";
import { setBuyerProfile } from "@/store/redux/services/buyerSlice/profileSlice/profileSlice";
import { useRouter } from "next/navigation";
import { useGetSellerProfileQuery } from "@/store/redux/services/sellerSlice/profileSlice/profileApiSlice";
import { setSellerProfile } from "@/store/redux/services/sellerSlice/profileSlice/profileSlice";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [fetchProfile, setFetchProfile] = useState({
    buyer: true,
    seller: true,
  });

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [loginUser, { isLoading, isSuccess, error, data }] = useLoginMutation();

  const {
    data: buyerProfile,
    isLoading: loadingBuyerProfile,
    isSuccess: successBuyerProfile,
    isError: errorBuyerProfile,
  } = useGetBuyerProfileQuery({ skip: fetchProfile.buyer });

  const {
    data: sellerProfile,
    isLoading: loadingSellerProfile,
    isSuccess: successSellerProfile,
    error: errorSellerProfile,
  } = useGetSellerProfileQuery({ skip: fetchProfile.seller });

  useEffect(() => {
    const loadProfile = async () => {
      if (isSuccess && data.data.user_type === "Buyer") {
        setFetchProfile({ buyer: false, seller: true });
        if (successBuyerProfile) {
          dispatch(
            setBuyerProfile({
              userData: buyerProfile.data,
            })
          );
        }
      } else {
        setFetchProfile({ buyer: true, seller: false });
        if (successSellerProfile) {
          dispatch(
            setSellerProfile({
              userData: sellerProfile.data,
            })
          );
        }
      }
    };
    loadProfile();
  }, [
    buyerProfile,
    data,
    dispatch,
    isSuccess,
    sellerProfile?.data,
    successBuyerProfile,
    successSellerProfile,
  ]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setShow(true);

    loginUser({
      email: formValues.email,
      password: formValues.password,
    });
  };

  if (isSuccess) {
    dispatch(
      setCredentials({
        token: data.data.access_token,
        userType: data.data.user_type,
      })
    );
  }
  let errorMessage;

  if (error) {
    // errorMessage = isFetchBaseQueryErrorType(error);
  }

  // https://api.tbt.com.ng/user/auth/login

  console.log(error, errorMessage);
  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      {show && (
        <StatusModal
          data={data ? data.message : ""}
          error={
            error
              ? errorMessage
                ? errorMessage
                : "Error logging in. Connection Timeout"
              : ""
          }
          loading={isLoading}
          onClose={() => setShow(false)}
          dataFunc={() =>
            data.data.user_type === "Seller"
              ? router.push("/web/home")
              : router.push("/web/home")
          }
        />
      )}

      <h4 className="text-agro-green text-xl md:text-2xl xl:text-4xl mb-10 font-semibold text-center ">
        Sign In
      </h4>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-7 px-4 items-center justify-center w-fit  "
      >
        <CustomInput
          label={"Email Address:"}
          placeholder={"Please set the email as the login name"}
          autoComplete="on"
          validation={(val) => val.includes("@")}
          handleValue={(val) => setFormValues({ ...formValues, email: val })}
        />

        <CustomInput
          label={"Login Password:"}
          type="password"
          placeholder={"Please set the login password  "}
          autoComplete="on"
          validation={(val) => val.length > 6}
          handleValue={(val) => setFormValues({ ...formValues, password: val })}
        />
        <div className="w-full flex sm:grid md:grid-cols-[200px_164px]  gap-4">
          <div className="mt-5 w-full flex-col flex items-center gap-8 col-span-2 justify-self-center md:justify-self-start md:col-start-2">
            <PriButton
              text="Submit"
              type="submit"
              className="px-6 h-10 rounded-[6px] font-bold w-full sm:w-[309px] "
              onClick={() => {}}
            />
            <div className="flex items-center gap-8  w-full sm:w-[309px] ">
              <PriButton
                text="Create Account"
                type="button"
                variant="secondary"
                className="px-4 h-[40px] rounded-[6px] font-bold text-sm whitespace-nowrap  "
                onClick={() => {
                  router.push("/web/sign-up");
                }}
              />
              <PriButton
                text="Forgot Password?"
                type="button"
                variant="secondary"
                className="px-4 h-[40px] rounded-[6px] font-bold text-sm whitespace-nowrap  "
                onClick={() => {
                  router.push("/web/forgot-password");
                }}
              />
            </div>

            {/* <Link href="/web/sign-up" className="font-semibold w-full text-end underline ">
              Create Account
            </Link> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
