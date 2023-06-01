"use client";

import React, { useState } from "react";

import PriButton from "@/components/PriButton";
import CustomInput from "@/components/CustomInput";
import { useVerifyAccountMutation } from "@/store/redux/services/authSlice/authApiSlice";
import StatusModal from "./StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const VerifyEmail = () => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    otp: "",
  });

  const [verifyUser, { isLoading, isSuccess, error, data }] =
    useVerifyAccountMutation();


  let errorMessage;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    errorMessage = "";
    setShow(true);

    const res = await verifyUser({
      // email: formValues.email,
      otp: formValues.otp,
    });
    if (res && isSuccess) {
      // router.push("/web/sign-in");

    }
  };

  // console.log("-------------------------------------------");

  // console.log(isLoading, isSuccess, error, data);

  if (isSuccess) {
    sessionStorage.setItem("token", data.data.access_token);
  }
  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
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
          placeholder={"Please input email"}
          validation={(val) => val.includes("@")}
          handleValue={(val) => setFormValues({ ...formValues, email: val })}
        />

        <CustomInput
          label={"OTP:"}
          placeholder={"Please input recieved OTP "}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, otp: val })}
        />
        <div className="w-full grid md:grid-cols-[200px_164px]  gap-4">
          <div className="col-span-2 justify-self-center md:justify-self-start md:col-start-2">
            <PriButton
              text="Submit"
              type="submit"
              className="w-[164px] h-[50px] rounded-[6px] text-xl font-bold mt-5   "
              onClick={() => {}}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;
