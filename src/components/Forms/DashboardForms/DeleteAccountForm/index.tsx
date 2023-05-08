import React from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";

const DeleteAccountForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col gap-7 ">
        <CustomInput
          variant="dashboard"
          label={"Email Address:"}
          placeholder={"Yinka"}
        />

        <CustomInput
          type="password"
          variant="dashboard"
          label={"Password:"}
          placeholder={"Yinka"}
        />
        <PriButton
          text={"Save Changes"}
          className="w-[178px] h-[42px] rounded-[6px] text-lg font-bold mt-5 self-end mr-[205px]  "
          onClick={function () {
            throw new Error("Function not implemented.");
          }}
        />
      </form>
    </div>
  );
};

export default DeleteAccountForm;
