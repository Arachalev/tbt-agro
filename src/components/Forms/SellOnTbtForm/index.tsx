"use client";

import React, { useState } from "react";

import PriButton from "@/components/PriButton";
import CustomInput from "@/components/CustomInput";
import sellOnTbt from "@/store/DummyData/FormData/sellOnTbt";
import StatusModal from "../StatusModal";
import Select from "react-select";
import { useRouter } from "next/navigation";

import { useSignUpMutation } from "@/store/redux/services/authSlice/authApiSlice";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";
import { setCredentials } from "@/store/redux/services/authSlice/authSlice";
import { useAppDispatch } from "@/store/redux/hooks";
import { useGetAllCountriesQuery } from "@/store/redux/services/locationSlice/locationApiSlice";

const SellOnTbtForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [formValues, setFormValues] = useState({
    country_id: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    fName: "",
    lName: "",
    countryCode: "",
    pNumber: "",
    userType: "Seller",
    terms: false,
  });

  const [registerUser, { isLoading, isSuccess, error, data }] =
    useSignUpMutation();
  const {
    data: countries,
    isLoading: countriesLoading,
    error: countriesError,
  } = useGetAllCountriesQuery("");

  let countryOptions = [{ value: "", label: "" }];

  // Populate country options when data is loaded
  if (countries) {
    countryOptions.pop();

    countries.data.map((item: { id: number; name: string }) =>
      countryOptions.push({ value: item.id.toString(), label: item.name })
    );
  }
  let errorMessage;

  const handleSubmit = async (e: any) => {
    setShowModal(true);
    e.preventDefault();
    errorMessage = "";

    registerUser({
      first_name: formValues.fName,
      last_name: formValues.lName,
      email: formValues.email,
      phone_number: formValues.countryCode + formValues.pNumber,
      password: formValues.password,
      password_confirmation: formValues.confirmPassword,
      country_id: parseInt(formValues.country_id),
      company_name: formValues.companyName,
      user_type: formValues.userType,
      term_condition_accepted: 1,
    });
  };

  const dispatch = useAppDispatch();
  const router = useRouter();

  if (isSuccess) {
    dispatch(
      setCredentials({
        token: data.data.access_token,
        userType: data.data.user_type,
      })
    );
  }

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }
  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          dataFunc={() => router.push("/web/verify-email")}
          data={data ? data?.message : ""}
          error={error ? errorMessage : ""}
        />
      )}

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-7 items-center  w-fit"
      >
        <CustomInput
          label={"First Name:"}
          placeholder={"Please enter your first name"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, fName: val })}
        />
        <CustomInput
          label={"Last Name:"}
          placeholder={"Please enter your last name"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, lName: val })}
        />

        <CustomInput
          label={"Email Address:"}
          placeholder={"Please set the email as the login name"}
          validation={(val) => val.includes("@")}
          handleValue={(val) => setFormValues({ ...formValues, email: val })}
        />

        <CustomInput
          label={"Login Password:"}
          type="password"
          placeholder={"Please set the login password  "}
          validation={(val) => val.length > 6}
          handleValue={(val) => setFormValues({ ...formValues, password: val })}
        />
        <CustomInput
          type="password"
          label={"Confirm Password:"}
          placeholder={"Please enter the login password again"}
          validation={(val) =>
            formValues.password === formValues.confirmPassword
          }
          handleValue={(val) =>
            setFormValues({ ...formValues, confirmPassword: val })
          }
        />
        <CustomInput
          label={"Company/Business Name:"}
          placeholder={"Must be a legally registered business"}
          validation={(val) => val.length > 3}
          handleValue={(val) =>
            setFormValues({ ...formValues, companyName: val })
          }
        />

        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label className="text-sm font-bold md:text-end ">
            Phone Number:
          </label>
          <div>
            <input
              className="w-[90px] h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              onChange={(e) =>
                setFormValues({ ...formValues, countryCode: e.target.value })
              }
              placeholder="+234"
              maxLength={4}
            />
            <input
              className="ml-5 h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              placeholder="85622857"
              onChange={(e) =>
                setFormValues({ ...formValues, pNumber: e.target.value })
              }
            />
          </div>
        </div>
        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4    ">
          <label
            className="text-sm font-bold md:text-end text-agro-black "
            htmlFor="country"
          >
            Country/Region
          </label>
          <Select
            className="w-full sm:w-[309px]"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                country_id: e?.value ? e.value : "",
              });
            }}
            options={countryOptions}
          />
        </div>
        <div className="w-full grid md:grid-cols-[200px_164px]  gap-4">
          <div className="col-span-2 justify-self-center md:justify-self-start md:col-start-2">
            <PriButton
              text="Submit"
              type="submit"
              onClick={() => {}}
              className="w-[164px] h-[50px] rounded-[6px] text-xl font-bold mt-5   "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellOnTbtForm;
