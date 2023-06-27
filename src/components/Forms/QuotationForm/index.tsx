"use client";

import React, { FormEvent, useState } from "react";

import Link from "next/link";
import PriButton from "@/components/PriButton";
import Select from "react-select";
import CustomInput from "@/components/CustomInput";
import { useGetCategoriesQuery } from "@/store/redux/services/categorySlice/categoryApiSlice";
import { useSubmitQuotationBuyerMutation } from "@/store/redux/services/buyerSlice/quotationSlice/quotationApiSlice";
import {
  useGetAllCountriesQuery,
  useGetCitiesInStateQuery,
  useGetStatesInCountryQuery,
} from "@/store/redux/services/locationSlice/locationApiSlice";
import StatusModal from "../StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";
import { useRouter } from "next/navigation";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const QuotationForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
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
    country_id: "",
    state_id: "",
    city_id: "",
    category: "",
    description: "",
  });

  const router = useRouter();

  const [
    submitQuote,
    {
      data: submitData,
      isLoading: submitQuoteLoading,
      error: submitQuoteError,
    },
  ] = useSubmitQuotationBuyerMutation();

  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetCategoriesQuery("");

  let categoryOptions = [{ value: "", label: "" }];

  if (categoryData) {
    categoryOptions.pop();

    categoryData.data.map((item: { id: number; name: string }) =>
      categoryOptions.push({ value: item.id.toString(), label: item.name })
    );
  }

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

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);

    const dateArr = formData.expDate.split("-");
    const data = {
      contact_person: formData.contact,
      phone_number: `${formData.countryCode}${formData.pNumber}`,
      company_name: formData.companyName,
      commodity_name: formData.commodity,
      country_id: formData.country_id,
      state_id: formData.state_id,
      city_id: formData.city_id,
      category_id: formData.category,
      quantity: formData.quantity,
      description: formData.description,
      expiring_date: `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`,
      term_condition_accepted: formData.terms ? 1 : 0,
    };
    const res = await submitQuote(data);
    console.log(res);
  };

  let errorMessage = "";

  if (submitQuoteError) {
    errorMessage = isFetchBaseQueryErrorType(submitQuoteError);
  }

  // console.log(submitData, submitQuoteError);

  return (
    <div className="min-h-screen bg-agro-floral-white pt-10 pb-[170px] flex flex-col items-center">
      {showModal && (
        <StatusModal
          onClose={() => {
            setShowModal(false);
          }}
          loading={submitQuoteLoading}
          data={submitData ? submitData?.message : ""}
          error={submitQuoteError ? errorMessage : ""}
          dataFunc={() => router.back()}
        />
      )}

      <form
        onSubmit={formHandler}
        className=" flex flex-col gap-7 items-center w-fit "
      >
        <CustomInput
          label={"Contact Person: "}
          placeholder={"Please enter"}
          validation={(val) => val.length > 2}
          handleValue={(val) => setFormData({ ...formData, contact: val })}
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
              maxLength={4}
              onChange={(e) =>
                setFormData((state) => ({
                  ...state,
                  countryCode: e.target.value,
                }))
              }
            />
            <input
              className="ml-5 h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
              type="text"
              placeholder="8185622857"
              maxLength={10}
              onChange={(e) =>
                setFormData((state) => ({
                  ...state,
                  pNumber: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <CustomInput
          label="Company/Business Name:"
          placeholder="Must be a legally registered business"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, companyName: val })}
        />

        <div className="w-full sm:w-fit grid md:grid-cols-[200px_1fr] items-center gap-4    ">
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
        <div className="grid w-full sm:w-fit md:grid-cols-[200px_1fr] items-center gap-4    ">
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
        <div className="w-full sm:w-fit grid md:grid-cols-[200px_1fr] items-center gap-4    ">
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
        <div className="w-full sm:w-fit grid md:grid-cols-[200px_1fr] items-center gap-4    ">
          <label
            className="text-sm font-bold md:text-end text-agro-black "
            htmlFor="category"
          >
            Category
          </label>
          <Select
            className="w-full sm:w-[309px] "
            onChange={(e) => {
              setFormData({
                ...formData,
                category: e?.value ? e.value : "",
              });
            }}
            options={categoryOptions}
          />
        </div>

        {/* <div className="grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label className="text-sm font-bold md:text-end ">
            Country/Region
          </label>
          <Select className="w-[309px]" options={options} />
        </div>
        <CustomInput
          label="State / Province:"
          placeholder="State"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, state: val })}
        />
        <CustomInput
          label="City:"
          placeholder="City"
          key="City"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, city: val })}
        /> */}
        <CustomInput
          label="Name of Commodity"
          placeholder="Rice"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, commodity: val })}
        />
        <CustomInput
          label="Quantity (Bags, Kg, MT):"
          placeholder="Please Enter"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, quantity: val })}
        />

        <div className=" xl:ml-44 w-fit grid md:grid-cols-[200px_1fr] items-center gap-4">
          <label
            className="text-sm font-bold md:text-end md:self-start"
            htmlFor="message"
          >
            Description:
          </label>
          <textarea
            onChange={(e) => {
              setFormData((state) => ({
                ...state,
                description: e.target.value,
              }));
            }}
            className="w-[309px] xl:min-w-[485px]  h-[216px] pl-3 pt-3 rounded-[4px] bg-white"
            placeholder="Custom message"
          />
        </div>
        <CustomInput
          label="Expiry Date of the RFQ (at least 30 days):"
          placeholder="Please Enter"
          // className="pr-2"
          type="date"
          validation={(val) => val.length > 3}
          handleValue={(val) => {
            setFormData({ ...formData, expDate: val });
          }}
        />
        <div className="grid md:grid-cols-[200px_1fr] gap-4">
          <div className="flex gap-2 md:col-start-2 w-[309px]">
            <input
              type="checkbox"
              checked={formData.terms}
              onChange={() => {
                setFormData((state) => ({
                  ...state,
                  terms: !state.terms,
                }));
              }}
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
