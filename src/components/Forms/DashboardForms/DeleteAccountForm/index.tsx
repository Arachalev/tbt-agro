"use client";

import React, { useState } from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";
import { useDeleteAccountMutation } from "@/store/redux/services/authSlice/authApiSlice";
import StatusModal from "../../StatusModal";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/redux/hooks";
import { logOut } from "@/store/redux/services/authSlice/authSlice";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const DeleteAccountForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const [deleteAccount, { data, isSuccess, isLoading, error }] =
    useDeleteAccountMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formHandler = async (e: any) => {
    e.preventDefault();
    setShowModal(true);

    try {
      deleteAccount(formData);
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
          data={data ? data.message : ""}
          error={error ? errorMessage : ""}
          loading={isLoading}
          dataFunc={() => {
            dispatch(logOut());
            router.push("/web/home");
          }}
        />
      )}
      <form
        action=""
        onSubmit={formHandler}
        className="flex flex-col gap-7 sm:w-fit "
      >
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
          type="submit"
          className="w-[178px] h-[42px] rounded-[6px] text-lg font-bold mt-5 self-end  "
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default DeleteAccountForm;
