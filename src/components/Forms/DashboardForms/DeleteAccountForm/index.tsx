"use client";

import React from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";

const DeleteAccountForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-7 sm:w-fit ">
        <CustomInput
          variant="dashboard"
          label={"Email Address:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={function (val: string): void {
            null;
          }}
        />

        <CustomInput
          type="password"
          variant="dashboard"
          label={"Password:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={function (val: string): void {
            null;
          }}
        />
        <PriButton
          text={"Delete Account"}
          className="w-[178px] h-[42px] rounded-[6px] text-lg font-bold mt-5 self-end  "
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default DeleteAccountForm;
