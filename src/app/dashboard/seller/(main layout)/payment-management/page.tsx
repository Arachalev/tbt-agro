"use client";

import React, { FormEvent, useState } from "react";

import {
  useGetAllBanksQuery,
  useSetBankAccountMutation,
  useValidateBankAccountMutation,
} from "@/store/redux/services/paymentSlice/paymentApiSlice";
import Select from "react-select";
import PriButton from "@/components/PriButton";
import StatusModal from "@/components/Forms/StatusModal";
import useInput from "@/hooks/useInput";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const Page = () => {
  const [formData, setFormData] = useState({
    bank_code: "",
    account_number: "",
    account_name: "",
  });

  const [showModal, setShowModal] = useState({
    validation: false,
    setAccount: false,
  });

  const {
    data: banks,
    isLoading: loadingBanks,
    error: errorBanks,
  } = useGetAllBanksQuery("");

  const [
    setBankAccount,
    {
      data: setBankAccountData,
      isSuccess: setBankAccountSuccess,
      error: setBankAccountError,
      isLoading: setBankAccountLoading,
    },
  ] = useSetBankAccountMutation();

  const [
    validateAccount,
    {
      data: validateData,
      isSuccess: validateSuccess,
      error: validateError,
      isLoading: validateLoading,
    },
  ] = useValidateBankAccountMutation();

  const bankOptions = [{ value: "", label: "" }];

  if (banks) {
    bankOptions.pop();
    banks.data.map((item: { code: string; name: string }) =>
      bankOptions.push({ value: item.code, label: item.name })
    );
  }

  const {
    value: accountValue,
    enteredInputHandler: accountHandler,
    hasError: accountError,
    onBlurHandler: accountBlur,
    onFocusHandler: accountFocus,
    reset: accountReset,
  } = useInput((val) => val.length > 9);

  const handleValidate = async () => {
    setShowModal({ validation: true, setAccount: false });
    const res = await validateAccount({
      bank_code: formData.bank_code,
      account_number: accountValue.value,
    });
    // help

    if ("data" in res) {
      setFormData({ ...formData, account_name: res?.data?.data.account_name });
    }
  };

  // if (
  //   accountValue.value.length > 9 &&
  //   formData.bank_code !== "" &&
  //   !validateLoading &&
  //   !validateData
  // ) {
  //   handleValidate();
  // }

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    setShowModal({ validation: false, setAccount: true });

    console.log(formData);

    await setBankAccount({
      bank_code: formData.bank_code,
      account_number: accountValue.value,
    });
  };

  // console.log(setBankAccountData, setBankAccountError);

  let errorMessage = "";
  let errorName;
  if (setBankAccountError) {
    if ("data" in setBankAccountError) {
      const tempError: any = setBankAccountError.data;
      if ("data" in tempError) {
        errorName = tempError.data?.account_name;
      }
    }
  }

  if (validateError || setBankAccountError) {
    errorMessage = isFetchBaseQueryErrorType(
      validateError ? validateError : setBankAccountError
    );
  }

  return (
    <div className="p-4 sm:p-8 xl:p-[72px]   ">
      {/* Validation Modal  */}
      {showModal.validation && (
        <StatusModal
          onClose={() => setShowModal({ validation: false, setAccount: false })}
          loading={validateLoading}
          data={validateData ? validateData.message : ""}
          error={errorMessage}
        />
      )}

      {/* Set Account Modal */}
      {showModal.setAccount && (
        <StatusModal
          onClose={() => setShowModal({ validation: false, setAccount: false })}
          loading={setBankAccountLoading}
          data={setBankAccountData ? setBankAccountData.message : ""}
          error={errorMessage}
        />
      )}
      <div className="mt-10 2xl:w-[1300px] 2xl:mx-auto">
        <h4 className="pb-4 md:pb-8  text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          Payment Details
        </h4>
        <div>
          <form
            onSubmit={formHandler}
            action=""
            className="bg-white border-4 w-full 2xl:w-fit rounded-[10px] px-4 pt-4 pb-16 text-agro-black"
          >
            <p className="text-sm font-bold mb-4 md:mb-9">
              Fill in your account details
            </p>
            <div className="flex flex-col  md:flex-row gap-4 md:gap-8 items-center  ">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Bank Name</label>
                <Select
                  placeholder="Bank Name"
                  options={bankOptions}
                  onChange={(val) =>
                    setFormData({
                      ...formData,
                      bank_code: val?.value ? val.value : "",
                    })
                  }
                  className="w-[256px] md:w-full xl:w-[256px] 2xl:w-[350px] h-[41px] border-gray2 border rounded-[4px] "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Account Number</label>
                <input
                  value={accountValue.value}
                  onChange={accountHandler}
                  onBlur={accountBlur}
                  onFocus={accountFocus}
                  maxLength={10}
                  type="text"
                  className="px-4 w-[256px] md:w-full xl:w-[256px] 2xl:w-[350px]  h-[41px] border-gray2 border rounded-[4px] "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Name on Account</label>
                <p
                  // type="text"
                  // value={formData.account_name}
                  className="px-4 w-[256px] font-semibold  md:w-full xl:w-[256px] 2xl:w-[350px]  h-[41px]  "
                >
                  {setBankAccountData
                    ? setBankAccountData?.data?.data?.account_name
                    : setBankAccountError
                    ? errorName
                    : "---"}
                </p>
              </div>
            </div>
            <PriButton
              text={"Submit"}
              type="submit"
              className="px-4 py-2 mt-5 "
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
