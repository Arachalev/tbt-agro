"use client";
import React from "react";

import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import PriButton from "@/components/PriButton";

const InformdationDetailsForm = () => {
  return (
    <div className=" px-4 py-20 flex flex-col gap-9 items-center justify-center bg-agro-floral-white">
      <h4 className=" text-xl md:text-2xl xl:text-[40px] font-semibold text-agro-black">
        Your Information Details
      </h4>
      <form action="" className=" flex flex-col gap-7 items-center w-full  sm:w-fit">
        <CustomInput
          label="First Name:"
          placeholder="Adeola"
          key="first name"
        />
        <CustomInput label="Last Name:" placeholder="Osho" key="last name" />

        <div className="grid w-full sm:w-fit md:grid-cols-[200px_1fr] items-center gap-4">
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
          label="Country / Region:"
          placeholder="Nigeria"
          key="last name"
        />
        <CustomInput
          label="Company / Business Name:"
          placeholder="Must be a legally registered business"
          key="last name"
        />
        <CustomInput
          label="Company Country / Region:"
          placeholder="Nigeria"
          key="last name"
        />
        <div className="grid w-full sm:w-fit md:grid-cols-[200px_1fr] items-center gap-4">
          <label
            className={`text-sm  text-agro-black 
        first-letter: font-bold md:justify-self-end text-end w-[200px]`}
          >
            Company / Business Address
          </label>
          <textarea
            className={`w-full sm:w-[309px]
             h-[103px] pl-3 rounded-[4px] bg-white border border-gray2`}
            placeholder="Please type address"
          />
        </div>
        <CustomInput
          label="State / Province:"
          placeholder="Please enter"
          key="last name"
        />
        <CustomInput
          label="Website:"
          placeholder="Please enter your website URL"
          key="last name"
        />
        <CustomInput
          label="Instagram:"
          placeholder="Please enter your Instagran URL"
          key="last name"
        />
        <CustomInput
          label="LinkedIn:"
          placeholder="Please enter your LinkedIn URL"
          key="last name"
        />
        <CustomInput
          label="Twitter:"
          placeholder="Please enter your Twitter URL"
          key="last name"
        />
        <div className=" xl:ml-44 w-full sm:w-fit grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label
            className="text-sm w-[309px] md:w-auto font-bold md:text-end md:self-start"
            htmlFor="message"
          >
            Provide a reason for change request (e.g., Current mobile number not
            correct):
          </label>
          <textarea
            className="w-full sm:w-[309px] justify-self-center xl:min-w-[485px]  h-[216px] pl-3 pt-3 rounded-[4px] bg-white"
            placeholder="Custom message"
          />
        </div>
        <div className="grid md:grid-cols-[200px_1fr] gap-4">
          <div className="flex  gap-2 md:col-start-2 sm:w-[309px]">
            <input
              type="checkbox"
              className="min-w-[16px] h-4"
              name=""
              id=" "
            />
            <p className=" text-sm font-semibold ">
              , By submitting this form, I confirm that I have read and agree
              with
              <Link className="font-semibold text-agro-green" href="">
                TBT Terms of Use.
              </Link>{" "}
              I acknowledge that the above information may be used by TBT for
              incorporation in all or any of its databases for direct marketing
              or business matching purposes, and for any other purposes as
              stated in TBT’s Privacy Policy Statement.
            </p>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-[200px_164px]  gap-4">
          <div className="col-span-2 justify-self-center md:justify-self-start md:col-start-3">
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

<p>
  By submitting this form, I confirm that I have read and agree with TBT Terms
  of Use. I acknowledge that the above information may be used by TBT for
  incorporation in all or any of its databases for direct marketing or business
  matching purposes, and for any other purposes as stated in TBT’s Privacy
  Policy Statement.
</p>;
export default InformdationDetailsForm;
