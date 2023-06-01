"use client";

import React, { useState } from "react";

import Link from "next/link";
import PriButton from "@/components/PriButton";
import Select from "react-select";
import CustomInput from "@/components/CustomInput";
import { useSignUpMutation } from "@/store/redux/services/authSlice/authApiSlice";
import StatusModal from "./StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    fName: "",
    lName: "",
    countryCode: "",
    pNumber: "",
    userType: "",
    terms: false,
  });

  const [registerUser, { isLoading, isSuccess, error, data }] =
    useSignUpMutation();

  let errorMessage;

  const handleSubmit = async (e: any) => {
    setShow(true);
    e.preventDefault();
    errorMessage = "";

    registerUser({
      first_name: formValues.fName,
      last_name: formValues.lName,
      email: formValues.email,
      phone_number: formValues.countryCode + formValues.pNumber,
      password: formValues.password,
      password_confirmation: formValues.confirmPassword,
      country_id: 3,
      company_name: formValues.companyName,
      user_type: formValues.userType,
      term_condition_accepted: formValues.terms ? 1 : 0,
    });
  };

  if (isSuccess) {
    sessionStorage.setItem("token", data.data.access_token);
  }

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }

  console.log(errorMessage, data, isSuccess);

  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      {show && (
        <StatusModal
          data={data ? data.message : ""}
          error={error ? errorMessage : ""}
          loading={isLoading}
          onClose={() => setShow(false)}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-7 items-center justify-center w-fit "
      >
        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4    ">
          <label className="text-sm font-bold md:text-end  " htmlFor="country">
            Country/Region
          </label>
          <Select
            className="w-[309px] "
            onChange={(e) =>
              setFormValues({ ...formValues, country: e?.value ? e.value : "" })
            }
            options={options}
          />
        </div>
        <div className="grid md:grid-cols-[200px_1fr]  items-center gap-4">
          <label className="text-sm font-bold md:text-end">
            Please select trade role
          </label>
          <div className="flex items-center gap-4 w-full sm:w-[309px]">
            <div className="flex gap-1 items-center">
              <input
                className="w-3 h-3 rounded-full bg-white border border-[#ABABAB]"
                type="radio"
                onChange={(e) =>
                  setFormValues({ ...formValues, userType: e.target.value })
                }
                value="Buyer"
                checked={formValues.userType === "Buyer"}
              />
              <label htmlFor="">Buyer</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                className="w-3 h-3 rounded-full bg-white border border-[#ABABAB]"
                type="radio"
                onChange={(e) =>
                  setFormValues({ ...formValues, userType: e.target.value })
                }
                value="Seller"
                checked={formValues.userType === "Seller"}
              />
              <label htmlFor="">Seller</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                className="w-3 h-3 rounded-full bg-white border border-[#ABABAB]"
                type="radio"
                onChange={(e) =>
                  setFormValues({ ...formValues, userType: e.target.value })
                }
                value="Both"
                checked={formValues.userType === "Both"}
              />
              <label htmlFor="">Both</label>
            </div>
          </div>
        </div>

        <CustomInput
          label={"Email Address:"}
          placeholder={"Please set the email as the login name"}
          validation={(val) => val.includes("@")}
          handleValue={(val) => setFormValues({ ...formValues, email: val })}
        />

        <CustomInput
          label={"Login Password:"}
          placeholder={"Please set the login password  "}
          validation={(val) => val.length > 6}
          handleValue={(val) => setFormValues({ ...formValues, password: val })}
        />
        <CustomInput
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
        <div className="flex gap-2 self-end w-[309px]">
          <input
            type="checkbox"
            onChange={() =>
              setFormValues({ ...formValues, terms: !formValues.terms })
            }
            className="min-w-[16px] h-4"
            name=""
            id=" "
          />
          <p className=" text-sm  ">
            While creating an account: I agree to abide by the
            <Link className="font-semibold text-agro-green" href="">
              tbt.com.ng Membership Agreement.
            </Link>
            Willing to receive emails from tbt.com.ng members and services.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-[200px_164px]  gap-4">
          <div className="col-span-2 justify-self-center md:justify-self-start md:col-start-2">
            <PriButton
              text="Submit"
              type="submit"
              // onClick={handleSubmit}
              className="w-[164px] h-[50px] rounded-[6px] text-xl font-bold mt-5   "
              onClick={function () {
                console.log("submitted");
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
