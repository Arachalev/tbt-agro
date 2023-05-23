"use client";
import React from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";

const PasswordSettingsForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-7 sm:w-fit ">
        <CustomInput
          type="password"
          variant="dashboard"
          label={"Current Password:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          type="password"
          variant="dashboard"
          label={"New Password:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          type="password"
          variant="dashboard"
          label={"Confirm Password:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          variant="dashboard"
          label={"Email Address:"}
          placeholder={"Yinka"}
        />

        <PriButton
          text={"Save Changes"}
          className="w-[178px] h-[42px] rounded-[6px] text-lg font-bold mt-5 self-end  "
          onClick={function () {
            throw new Error("Function not implemented.");
          }}
        />
      </form>
    </div>
  );
};

export default PasswordSettingsForm;
