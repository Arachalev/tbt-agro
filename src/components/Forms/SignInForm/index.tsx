"use client";

import React, { useState } from "react";

import Link from "next/link";
import PriButton from "@/components/PriButton";
import Select from "react-select";
import CustomInput from "@/components/CustomInput";
import signUpData from "@/store/DummyData/FormData/signUpData";
import {
  useLoginMutation
} from "@/store/redux/services/authSlice/authApiSlice";
import useInput from "@/hooks/useInput";
import StatusModal from "./StatusModal";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { isLoading, isSuccess, error, data }] =
    useLoginMutation();

  const handleSubmit = async (e: any) => {
    setShow(true);
    e.preventDefault();

    const res = await loginUser({
      email: formValues.email,
      password: formValues.password,
    });

    console.log(res);
  };

  console.log("-------------------------------------------");

  console.log(isLoading, isSuccess, error, data);

  if (isSuccess) {
    sessionStorage.setItem("token", data.data.access_token);
  }

  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      {show && (
        <StatusModal
          data={data ? data.message : ""}
          error={error ? error?.data.message : ""}
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
