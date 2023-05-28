"use client";

import React, { useState } from "react";

import PriButton from "@/components/PriButton";
import CustomInput from "@/components/CustomInput";
import sellOnTbt from "@/store/DummyData/FormData/sellOnTbt";

const SellOnTbtForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    fName: "",
    lName: "",
    countryCode: "",
    pNumber: "",
    userType: "",
    location:""
  });
  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[142px] flex flex-col items-center">
      <form className=" flex flex-col gap-7 items-center  w-fit">
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
      
        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label className="text-sm font-bold md:text-end ">
            Phone Number:
          </label>
          <div>
            <input
              className="w-[90px] h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              placeholder="+234"
            />
            <input
              className="ml-5 h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              placeholder="08185622857"
            />
          </div>
        </div>
        <CustomInput
          label="Location"
          placeholder="Please enter your state"
          key="Location"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, location: val })}
        />
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
