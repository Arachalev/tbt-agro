"use client";

import React, { useState } from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";
import StatusModal from "../../StatusModal";
import { useChangeBuyerPwdMutation } from "@/store/redux/services/buyerSlice/profileSlice/profileApiSlice";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const PasswordSettingsForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    old_password: "",
    password_confirmation: "",
  });
  const [showModal, setShowModal] = useState(false);

  const [updatePwd, { isLoading, isSuccess, data, error }] =
    useChangeBuyerPwdMutation();

  const formHandler = async (e: any) => {
    e.preventDefault();

    setShowModal(true);

    try {
      updatePwd(formData);
    } catch (error) {
      console.log(error);
    }
  };

  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }

  return (
    <div>
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          data={data ? data?.message : ""}
          error={error ? errorMessage : ""}
        />
      )}
      <form
        onSubmit={formHandler}
        action=""
        className="flex flex-col gap-7 sm:w-fit "
      >
        <CustomInput
          type="password"
          variant="dashboard"
          label={"Current Password:"}
          placeholder={"12345678"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, old_password: val })}
        />
        <CustomInput
          type="password"
          variant="dashboard"
          label={"New Password:"}
          placeholder={"new password"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, password: val })}
        />
        <CustomInput
          type="password"
          variant="dashboard"
          label={"Confirm Password:"}
          placeholder={"confirm password"}
          validation={(val) => formData.password === val}
          handleValue={(val) =>
            setFormData({ ...formData, password_confirmation: val })
          }
        />
        {/* <CustomInput
          variant="dashboard"
          label={"Email Address:"}
          placeholder={"Yinka"}
          validation={(val) => val.includes("@")}
          handleValue={function (val: string): void {
            null;
          }}
        /> */}

        <PriButton
          text={"Save Changes"}
          type="submit"
          className="w-[178px] h-[42px] rounded-[6px] text-lg font-bold mt-5 self-end  "
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default PasswordSettingsForm;
