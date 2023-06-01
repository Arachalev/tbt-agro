"use client";

import React, { useState, useEffect } from "react";

import PriButton from "@/components/PriButton";
import CustomInput from "@/components/CustomInput";
import { useLoginMutation } from "@/store/redux/services/authSlice/authApiSlice";
import { useGetBuyerProfileQuery } from "@/store/redux/services/buyerSlice/profileSlice/profileApiSlice";
import StatusModal from "./StatusModal";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import { setCredentials } from "@/store/redux/services/authSlice/authSlice";
import {
  selectBuyerProfile,
  setBuyerProfile,
} from "@/store/redux/services/buyerSlice/profileSlice/profileSlice";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [fetchBuyerProfile, setFetchBuyerProfile] = useState(false);

  const dispatch = useAppDispatch();

  const profile = useAppSelector(selectBuyerProfile);

  const [loginUser, { isLoading, isSuccess, error, data }] = useLoginMutation();

  const {
    data: buyerProfile,
    isLoading: loadingBuyerProfile,
    isSuccess: successBuyerProfile,
    isError: errorBuyerProfile,
  } = useGetBuyerProfileQuery({ skip: fetchBuyerProfile });

  useEffect(() => {
    if (isSuccess && data.data.user_type === "Buyer") {
      setFetchBuyerProfile(true);
      // const { data: userData } = data;
      // dispatch(
      //   setBuyerProfile({
      //     userData,
      //   })
      // );
      console.log(profile, buyerProfile);
    }
  }, [buyerProfile, data, dispatch, isSuccess, profile]);

  let errorMessage;
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

  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      {show && (
        <StatusModal
          data={data ? data.message : ""}
          error={error ? errorMessage : ""}
          loading={isLoading}
          onClose={() => setShow(false)}
        />
      )}

      <h4 className="text-agro-green text-xl md:text-2xl xl:text-4xl mb-10 font-semibold text-center ">
        Sign In
      </h4>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-7 items-center justify-center w-fit "
      >
        <CustomInput
          label={"Email Address:"}
          placeholder={"Please set the email as the login name"}
          validation={(val) => val.includes("@")}
          handleValue={(val) => setFormValues({ ...formValues, email: val })}
        />

        <CustomInput
          label={"Login Password:"}
          placeholder={"Please set the login password  "}
          validation={(val) => val.length > 6}
          handleValue={(val) => setFormValues({ ...formValues, password: val })}
        />
        <div className="w-full grid md:grid-cols-[200px_164px]  gap-4">
          <div className="col-span-2 justify-self-center md:justify-self-start md:col-start-2">
            <PriButton
              text="Submit"
              type="submit"
              className="w-[164px] h-[50px] rounded-[6px] text-xl font-bold mt-5   "
              onClick={function () {
                console.log("submitted");
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
