"use client";
import React, { useEffect, useState } from "react";

import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import PriButton from "@/components/PriButton";
import { useSubmitQuotationMutation } from "@/store/redux/services/buyerSlice/quotationSlice/quotationApiSlice";
import {
  useGetAllCountriesQuery,
  useGetCitiesInStateQuery,
  useGetStatesInCountryQuery,
} from "@/store/redux/services/locationSlice/locationApiSlice";
import Select from "react-select";
import { useGetSellerProfileQuery } from "@/store/redux/services/sellerSlice/profileSlice/profileApiSlice";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import {
  selectSellerProfile,
  setSellerProfile,
} from "@/store/redux/services/sellerSlice/profileSlice/profileSlice";
import useInput from "@/hooks/useInput";

const InformdationDetailsForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    country_id: "",
    state_id: "",
    city_id: "",
    company_name: "",
    company_address: "",
    focus_area: "",
    valid_id_card_type: "",
    website: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    reason_for_change_request: "",
  });

  const sellerDetails = useAppSelector(selectSellerProfile);
  const dispatch = useAppDispatch();

  const {
    data: sellerProfile,
    isLoading: profileLoading,
    error: profileError,
  } = useGetSellerProfileQuery("");

  const {
    data: countries,
    isLoading: countriesLoading,
    error: countriesError,
  } = useGetAllCountriesQuery("");

  const {
    data: states,
    isLoading: statesLoading,
    error: statesError,
  } = useGetStatesInCountryQuery(formData.country_id, {
    skip: formData.country_id ? false : true,
  });

  const {
    data: city,
    isLoading: cityLoading,
    error: cityError,
  } = useGetCitiesInStateQuery(formData.state_id, {
    skip: formData.state_id ? false : true,
  });
  let countryOptions = [{ value: "", label: "" }];
  let stateOptions = [{ value: "", label: "" }];
  let cityOptions = [{ value: "", label: "" }];

  // Populate country options when data is loaded
  if (countries) {
    countryOptions.pop();

    countries.data.map((item: { id: number; name: string }) =>
      countryOptions.push({ value: item.id.toString(), label: item.name })
    );
  }

  // Populate state options when data is loaded
  if (states) {
    stateOptions.pop();

    states.data.map((item: { id: number; name: string }) =>
      stateOptions.push({ value: item.id.toString(), label: item.name })
    );
  }

  // Populate state options when data is loaded
  if (city) {
    cityOptions.pop();

    city.data.map((item: { id: number; name: string }) =>
      cityOptions.push({ value: item.id.toString(), label: item.name })
    );
  }

  const {
    value: addressValue,
    enteredInputHandler: addressHandler,
    hasError: addressHasError,
    onBlurHandler: addressBlurHandler,
    onFocusHandler: addressFocusHandler,
    reset: resetAddress,
  } = useInput((val) => val.length > 3);
  const {
    value: reasonValue,
    enteredInputHandler: reasonHandler,
    hasError: reasonHasError,
    onBlurHandler: reasonBlurHandler,
    onFocusHandler: reasonFocusHandler,
    reset: resetReason,
  } = useInput((val) => val.length > 3);

  useEffect(() => {
    if (sellerProfile) {
      dispatch(setSellerProfile({ userData: sellerProfile.data }));
      setFormData({
        ...formData,
        address: sellerDetails.address,
        first_name: sellerDetails.fName,
        last_name: sellerDetails.lName,
        company_name: sellerDetails.companyName,
        company_address: sellerDetails.companyAddress,
        country_id: sellerDetails.country?.id
          ? sellerDetails.country.id.toString()
          : "",
        state_id: sellerDetails.state,
        city_id: sellerDetails.city,
      });
    }
  }, [sellerProfile, sellerDetails, dispatch]);

  console.log(sellerDetails);

  const formHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className=" px-4 py-20 flex flex-col gap-9 items-center justify-center bg-agro-floral-white">
      <h4 className=" text-xl md:text-2xl xl:text-[40px] font-semibold text-agro-black">
        Your Information Details
      </h4>
      <form
        action=""
        className=" flex flex-col gap-7 items-center w-full  sm:w-fit"
      >
        <CustomInput
          label="First Name:"
          placeholder={formData.first_name}
          key="first name"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, first_name: val })}
        />
        <CustomInput
          label="Last Name:"
          placeholder={formData.last_name}
          key="last name"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, last_name: val })}
        />

        {/* <div className="grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label className="text-sm font-bold md:text-end ">
            Phone Number:
          </label>
          <div>
            <input
              className="w-[90px] h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, countryCode: e.target.value })
              }
              placeholder="+234"
              maxLength={4}
            />
            <input
              className="ml-5 h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              placeholder="85622857"
              onChange={(e) =>
                setFormData({ ...formData, pNumber: e.target.value })
              }
            />
          </div>
        </div> */}

        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4    ">
          <label
            className="text-sm font-bold md:text-end text-agro-black "
            htmlFor="country"
          >
            Country/Region
          </label>
          <Select
            className="w-full sm:w-[309px] "
            onChange={(e) => {
              setFormData({
                ...formData,
                country_id: e?.value ? e.value : "",
              });
            }}
            options={countryOptions}
          />
        </div>
        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4    ">
          <label
            className="text-sm font-bold md:text-end text-agro-black "
            htmlFor="country"
          >
            State
          </label>
          <Select
            className="w-full sm:w-[309px] "
            onChange={(e) => {
              setFormData({
                ...formData,
                state_id: e?.value ? e.value : "",
              });
            }}
            options={stateOptions}
          />
        </div>
        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4    ">
          <label
            className="text-sm font-bold md:text-end text-agro-black "
            htmlFor="country"
          >
            City
          </label>
          <Select
            className="w-full sm:w-[309px] "
            onChange={(e) => {
              setFormData({
                ...formData,
                city_id: e?.value ? e.value : "",
              });
            }}
            options={cityOptions}
          />
        </div>
        
        <CustomInput
          label="Company / Business Name:"
          placeholder={formData.company_name}
          key="Business name"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, company_name: val })}
        />

        <div className="grid w-full sm:w-fit md:grid-cols-[200px_1fr] items-center gap-4">
          <label
            className={`text-sm  text-agro-black 
        first-letter: font-bold md:justify-self-end text-end w-[200px]`}
          >
            Company / Business Address
          </label>
          <textarea
            onChange={addressHandler}
            onFocus={addressFocusHandler}
            onBlur={addressBlurHandler}
            value={addressValue.value}
            className={`${
              addressValue.isTouched
                ? "border-agro-yellow"
                : addressHasError
                ? " border-red-500 "
                : "border-gray2 "
            }  w-full sm:w-[309px]
             h-[103px] pl-3 rounded-[4px] bg-white border`}
            placeholder={formData.company_address}
          />
        </div>

        <CustomInput
          label="Website:"
          placeholder="Please enter your website URL"
          key="website"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, website: val })}
        />
        <CustomInput
          label="Instagram:"
          placeholder="Please enter your Instagran URL"
          key="instagram"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, instagram: val })}
        />
        <CustomInput
          label="LinkedIn:"
          placeholder="Please enter your LinkedIn URL"
          key="linkedin"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, linkedin: val })}
        />
        <CustomInput
          label="Twitter:"
          placeholder="Please enter your Twitter URL"
          key="twitter"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, twitter: val })}
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
            onChange={reasonHandler}
            onFocus={reasonFocusHandler}
            onBlur={reasonBlurHandler}
            value={reasonValue.value}
            className={`
            ${
              reasonValue.isTouched
                ? "border-agro-yellow"
                : reasonHasError
                ? " border-red-500 "
                : "border-gray2 "
            } 
            w-full sm:w-[309px] border justify-self-center xl:min-w-[485px]  h-[216px] pl-3 pt-3 rounded-[4px] bg-white`}
            placeholder="Custom message"
          />
        </div>
        {/* <div className="grid md:grid-cols-[200px_1fr] gap-4">
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
        </div> */}

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
