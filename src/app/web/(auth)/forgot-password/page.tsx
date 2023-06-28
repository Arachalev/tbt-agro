"use client";

import React, { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";
import CustomInput from "@/components/CustomInput";
import {
  useLoginMutation,
  useForgotPwdSendOttpMutation,
} from "@/store/redux/services/authSlice/authApiSlice";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";
import StatusModal from "@/components/Forms/StatusModal";
import PriButton from "@/components/PriButton";

const Page = () => {
  const [formValues, setFormValues] = useState({ email: "" });
  const [show, setShow] = useState(false);

  const router = useRouter();

  const [sendOtp, { data, error, isLoading }] = useForgotPwdSendOttpMutation();

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    setShow(true);
    await sendOtp({ email: formValues.email });
  };

  let errorMessage;

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
          dataFunc={() => router.push("/web/reset-password")}
        />
      )}
      <h4 className="text-agro-green text-xl md:text-2xl xl:text-4xl mb-10 font-semibold text-center ">
        Reset Password
      </h4>
      <form
        action=""
        onSubmit={formHandler}
        className=" flex flex-col gap-7 items-center justify-center w-fit "
      >
        <CustomInput
          required
          label={"Email Address:"}
          placeholder={"Please enter your email address"}
          validation={(val) => val.includes("@")}
          handleValue={(val) => setFormValues({ ...formValues, email: val })}
        />
        <div className="w-full grid md:grid-cols-[200px_164px]  gap-4">
          <div className="flex items-center gap-8 col-span-2 justify-self-center md:justify-self-start md:col-start-2">
            <PriButton
              text="Submit"
              type="submit"
              className="px-6  h-10 rounded-[6px]   font-bold   "
              onClick={() => {}}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
