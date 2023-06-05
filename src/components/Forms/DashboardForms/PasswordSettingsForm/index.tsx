"use client";

import React, { useState } from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";

const PasswordSettingsForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    old_password: "",
    password_confirmation: "",
  });

  const formHandler = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={formHandler}
        action=""
        className="flex flex-col gap-7 sm:w-fit "
      >
        <CustomInput
          type="password"
          variant="dashboard"
          label={"Current Password:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, old_password: val })}
        />
        <CustomInput
          type="password"
          variant="dashboard"
          label={"New Password:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, password: val })}
        />
        <CustomInput
          type="password"
          variant="dashboard"
          label={"Confirm Password:"}
          placeholder={"Yinka"}
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
