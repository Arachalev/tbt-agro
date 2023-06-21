"use client";
import React, { useEffect, useState } from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";
import { useRouter } from "next/navigation";
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
import { useUpdateSellerAccountMutation } from "@/store/redux/services/sellerSlice/profileSlice/profileApiSlice";
import StatusModal from "../../StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const InformdationDetailsForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<{
    first_name: string;
    last_name: string;
    address: string;
    country_id: string;
    state_id: string;
    city_id: string;
    company_name: string;
    company_address: string;
    focus_area: string;
    valid_id_card_type: string;
    valid_id_card: File;
    website: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    twitter: string;
    reason_for_change_request: string;
  }>({
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
    valid_id_card: new File([""], "filename"),
    website: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    twitter: "",
    reason_for_change_request: "",
  });

  const sellerDetails = useAppSelector(selectSellerProfile);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    data: sellerProfile,
    isLoading: profileLoading,
    error: profileError,
  } = useGetSellerProfileQuery("");

  const [updateAccount, { isLoading, data, error }] =
    useUpdateSellerAccountMutation();

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

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    // let filesArr: File[] = [];
    if (files) {
      // console.log(files[0]);
      // filesArr = Array.from(files);
      return files[0];
    } else {
      return new File([""], "filename");
    }
  };

  const formHandler = async (e: any) => {
    e.preventDefault();
    setShowModal(true);

    const form = new FormData();

    const formNamesArray = Object.keys(formData);

    console.log(formNamesArray);

    formNamesArray.map((item) => {
      form.append(`${item}`, formData[item as keyof typeof formData]);
    });

    form.append("valid_id_card", formData.valid_id_card);

    // for (let pair of form.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    await updateAccount(form);
  };

  console.log(data, error);

  // console.log(formData);

  // console.log(formData.valid_id_card);
  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }

  return (
    <div className=" px-4 py-20 flex flex-col gap-9 items-center justify-center bg-agro-floral-white">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          data={data ? data?.message : ""}
          dataFunc={() => router.push("/dashboard/seller/account")}
          error={error ? errorMessage : ""}
        />
      )}

      <h4 className=" text-xl md:text-2xl xl:text-[40px] font-semibold text-agro-black">
        Your Information Details
      </h4>
      <form
        onSubmit={formHandler}
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

        <CustomInput
          label="Address:"
          placeholder={formData.address}
          key="Address"
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, address: val })}
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

        <div className="grid md:grid-cols-[200px_1fr] sm:ml-24 items-center gap-4">
          <label className="text-sm font-bold md:text-end w-[200px] ">
            Focus Area
          </label>
          <div className="flex items-center gap-4 w-full flex-wrap sm:w-[409px]">
            <div className="flex gap-1 items-center">
              <input
                className="w-3 h-3 rounded-full bg-white border border-[#ABABAB]"
                type="radio"
                onChange={(e) =>
                  setFormData({ ...formData, focus_area: e.target.value })
                }
                value="Sales and Exports"
                checked={formData.focus_area === "Sales and Exports"}
              />
              <label htmlFor="">Sales and Exports</label>
            </div>
            <div className="flex  gap-1 items-center">
              <input
                className="w-3 h-3 rounded-full bg-white border border-[#ABABAB]"
                type="radio"
                onChange={(e) =>
                  setFormData({ ...formData, focus_area: e.target.value })
                }
                value="Farming"
                checked={formData.focus_area === "Farming"}
              />
              <label htmlFor="">Farming </label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                className="w-3 h-3 rounded-full bg-white border border-[#ABABAB]"
                type="radio"
                onChange={(e) =>
                  setFormData({ ...formData, focus_area: e.target.value })
                }
                value="Processing"
                checked={formData.focus_area === "Processing"}
              />
              <label htmlFor="">Processing</label>
            </div>
            <div className="flex gap-1 items-center">
              <input
                className="w-3 h-3 rounded-full bg-white border border-[#ABABAB]"
                type="radio"
                onChange={(e) => {
                  setFormData({ ...formData, focus_area: e.target.value });
                }}
                value="Aggregation and Comodity Exchange"
                checked={
                  formData.focus_area === "Aggregation and Comodity Exchange"
                }
              />
              <label htmlFor="">Aggregation and Comodity Exchange </label>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-[200px_1fr] sm:ml-24 items-center gap-4">
          <label className="text-sm font-bold md:text-end w-[200px] ">
            Upload Valid ID Card:
          </label>
          <div className="flex items-center gap-4 w-full flex-wrap sm:w-[409px]">
            <div className="flex gap-1 items-center">
              <span
                className={`w-3 h-3  flex items-center justify-center rounded-full border border-gray-500`}
              >
                <span
                  className={` ${
                    formData.valid_id_card_type === "Drivers License"
                      ? "bg-gray-400"
                      : "bg-white"
                  } w-2 h-2 flex self-center rounded-full `}
                />
              </span>

              <input
                className={`hidden`}
                type={"file"}
                name="drivers"
                id="drivers"
                onChange={(e) => {
                  const files = handleUpload(e);
                  setFormData({
                    ...formData,
                    valid_id_card_type: "Drivers License",
                    valid_id_card: files,
                  });
                }}
                checked={formData.focus_area === "Drivers License"}
              />
              <label htmlFor="drivers" className="cursor-pointer">
                Driver&apos;s License
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <span
                className={`w-3 h-3  flex items-center justify-center rounded-full border border-gray-500`}
              >
                <span
                  className={` ${
                    formData.valid_id_card_type === "Voters Card"
                      ? "bg-gray-400"
                      : "bg-white"
                  } w-2 h-2 flex self-center rounded-full `}
                />
              </span>

              <input
                className={`hidden`}
                type={"file"}
                name="voters"
                id="voters"
                onChange={(e) => {
                  const files = handleUpload(e);
                  setFormData({
                    ...formData,
                    valid_id_card_type: "Voters Card",
                    valid_id_card: files,
                  });
                }}
                checked={formData.focus_area === "Voters Card"}
              />
              <label htmlFor="voters" className="cursor-pointer">
                Voter&apos;s Card
              </label>
            </div>
            <div className="flex gap-1 items-center">
              <span
                className={`w-3 h-3  flex items-center justify-center rounded-full border border-gray-500`}
              >
                <span
                  className={` ${
                    formData.valid_id_card_type === "Internation Passport"
                      ? "bg-gray-400"
                      : "bg-white"
                  } w-2 h-2 flex self-center rounded-full `}
                />
              </span>

              <input
                className={`hidden`}
                type={"file"}
                name="passport"
                id="passport"
                onChange={(e) => {
                  const files = handleUpload(e);
                  setFormData({
                    ...formData,
                    valid_id_card_type: "Internation Passport",
                    valid_id_card: files,
                  });
                }}
                checked={formData.focus_area === "International Passport"}
              />
              <label htmlFor="passport" className="cursor-pointer">
                International Passport
              </label>
            </div>
          </div>
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
