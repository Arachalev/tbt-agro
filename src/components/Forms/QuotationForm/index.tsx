"use client";

import React, { useState } from "react";

import Link from "next/link";
import PriButton from "@/components/PriButton";
import Select from "react-select";
import CustomInput from "@/components/CustomInput";
import signUpData from "@/store/DummyData/FormData/signUpData";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const QuotationForm = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    countryCode: "",
    pNumber: "",
    userType: "",
    terms: false,
    contact: "",
    state: "",
    city: "",
    commodity: "",
    quantity: "",
    expDate: "",
  });
  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[170px] flex flex-col items-center">
      <form className=" flex flex-col gap-7 items-center w-fit ">
        <CustomInput
          label={"Contact Person: "}
          placeholder={"Please enter"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, contact: val })}
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
          label="Company/Business Name:"
          placeholder="Must be a legally registered business"
          validation={(val) => val.length > 3}
          handleValue={(val) =>
            setFormValues({ ...formValues, companyName: val })
          }
        />

        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label className="text-sm font-bold md:text-end ">
            Country/Region
          </label>
          <Select className="w-[309px]" options={options} />
        </div>
        <CustomInput
          label="State / Province:"
          placeholder="State"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, state: val })}
        />
        <CustomInput
          label="City:"
          placeholder="City"
          key="City"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, city: val })}
        />
        <CustomInput
          label="Name of Commodity"
          placeholder="Rice"
          validation={(val) => val.length > 3}
          handleValue={(val) =>
            setFormValues({ ...formValues, commodity: val })
          }
        />
        <CustomInput
          label="Quantity (Bags, Kg, MT):"
          placeholder="Please Enter"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, quantity: val })}
        />

        <div className=" xl:ml-44 w-fit grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label
            className="text-sm font-bold md:text-end md:self-start"
            htmlFor="message"
          >
            Other Information:
          </label>
          <textarea
            className="w-[309px] xl:min-w-[485px]  h-[216px] pl-3 pt-3 rounded-[4px] bg-white"
            placeholder="Custom message"
          />
        </div>
        <CustomInput
          label="Expiry Date of the RFQ (at least 30 days):"
          placeholder="Please Enter"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormValues({ ...formValues, expDate: val })}
        />
        <div className="grid md:grid-cols-[200px_1fr] gap-4">
          <div className="flex gap-2 md:col-start-2 w-[309px]">
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

export default QuotationForm;
