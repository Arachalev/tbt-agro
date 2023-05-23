"use client";
import React from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";

const ProfileDetailsForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-7 w-fit ">
        <CustomInput
          variant="dashboard"
          label={"First Name:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          variant="dashboard"
          label={"Last Name:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          variant="dashboard"
          label={"Email Address:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          variant="dashboard"
          label={"Company/Business Name:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          variant="dashboard"
          label={"Phone Number:"}
          placeholder={"Yinka"}
        />
        <CustomInput
          variant="dashboard"
          label={"Location:"}
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

export default ProfileDetailsForm;
