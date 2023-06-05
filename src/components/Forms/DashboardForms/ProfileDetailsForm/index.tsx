"use client";
import React, { useState, useEffect, useCallback } from "react";

import CustomInput from "@/components/CustomInput";
import PriButton from "@/components/PriButton";
import { useUpdateBuyerAccountMutation } from "@/store/redux/services/buyerSlice/profileSlice/profileApiSlice";
import StatusModal from "../../StatusModal";
import Select from "react-select";
import {
  useGetAllCountriesQuery,
  useGetCitiesInStateQuery,
  useGetStatesInCountryQuery,
} from "@/store/redux/services/locationSlice/locationApiSlice";
import { useAppSelector, useAppDispatch } from "@/store/redux/hooks";
import {
  selectBuyerProfile,
  setBuyerProfile,
} from "@/store/redux/services/buyerSlice/profileSlice/profileSlice";
import { useGetBuyerProfileQuery } from "@/store/redux/services/buyerSlice/profileSlice/profileApiSlice";

const ProfileDetailsForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [, updateState] = useState({});
  const [locationData, setLocationData] = useState({
    countryID: "",
    countryName: "",
    stateID: "",
    stateName: "",
    cityID: "",
    cityName: "",
  });
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    company_address: "",
    // profile_picture: "",
    email: "",
    phone_number: "",
    address: "",
    country_id: "",
    state_id: "",
    city_id: "",
  });

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

  const [updateProfile, { isLoading, isSuccess, data, error }] =
    useUpdateBuyerAccountMutation();

  const {
    data: buyerProfile,
    isLoading: profileLoading,
    error: profileError,
  } = useGetBuyerProfileQuery("");

  const dispatch = useAppDispatch();
  const buyerDetails = useAppSelector(selectBuyerProfile);

  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    if (buyerProfile) {
      dispatch(setBuyerProfile({ userData: buyerProfile.data }));
      setFormData({
        ...formData,
        address: buyerDetails.address,
        first_name: buyerDetails.fName,
        last_name: buyerDetails.lName,
        company_name: buyerDetails.companyName,
        company_address: buyerDetails.companyAddress,
        country_id: buyerDetails.country?.id
          ? buyerDetails.country.id.toString()
          : "",
        state_id: buyerDetails.state,
        city_id: buyerDetails.city,
      });
      setLocationData({
        ...locationData,
        countryID: buyerDetails.country?.id
          ? buyerDetails.country.id.toString()
          : "",
        countryName: buyerDetails.country?.name
          ? buyerDetails.country?.name
          : "",
      });
    }
    forceUpdate();
  }, [buyerProfile, buyerDetails, dispatch]);

  console.log(locationData, "buyer profile");

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

  const formHandler = async (e: any) => {
    e.preventDefault();
    // e.target.reset()

    setShowModal(true);

    try {
      updateProfile(formData);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(data, error);

  return (
    <div>
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          data={data ? data.data?.message : ""}
          // error={error ? error?.message : ""}
        />
      )}
      <form
        id="edit-profile"
        onSubmit={formHandler}
        action=""
        className="flex flex-col gap-7 w-fit "
      >
        <CustomInput
          variant="dashboard"
          label={"First Name:"}
          placeholder={buyerDetails.fName}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, first_name: val })}
        />
        <CustomInput
          variant="dashboard"
          label={"Last Name:"}
          placeholder={buyerDetails.lName}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, last_name: val })}
        />
        <CustomInput
          variant="dashboard"
          label={"Email Address:"}
          placeholder={buyerDetails.email}
          validation={(val) => val.includes("@")}
          handleValue={(val) => setFormData({ ...formData, email: val })}
        />
        <CustomInput
          variant="dashboard"
          label={"Company/Business Name:"}
          placeholder={buyerDetails.companyName}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, company_name: val })}
        />
        <CustomInput
          variant="dashboard"
          label={"Company Address:"}
          placeholder={buyerDetails.companyAddress}
          validation={(val) => val.length > 3}
          handleValue={(val) =>
            setFormData({ ...formData, company_address: val })
          }
        />
        <CustomInput
          variant="dashboard"
          label={"Phone Number: "}
          placeholder={buyerDetails.pNumber}
          validation={(val) => val.length > 10}
          handleValue={(val) => setFormData({ ...formData, phone_number: val })}
        />
        <CustomInput
          variant="dashboard"
          label={"Address : "}
          placeholder={buyerDetails.address}
          validation={(val) => val.length > 10}
          handleValue={(val) => setFormData({ ...formData, address: val })}
        />
        <div className="grid md:grid-cols-[200px_1fr] items-center gap-4    ">
          <label
            className="text-sm font-bold md:text-end text-gray2 "
            htmlFor="country"
          >
            Country/Region
          </label>
          <Select
            defaultValue={{
              value: locationData.countryID,
              label: locationData.countryName,
              // label: buyerDetails.country
              //   ? buyerDetails.country.name
              //   : "testtt",
            }}
            className="w-full sm:w-[419px]"
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
            className="text-sm font-bold md:text-end text-gray2 "
            htmlFor="country"
          >
            State
          </label>
          <Select
            className="w-full sm:w-[419px]"
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
            className="text-sm font-bold md:text-end text-gray2 "
            htmlFor="country"
          >
            City
          </label>
          <Select
            className="w-full sm:w-[419px]"
            onChange={(e) => {
              setFormData({
                ...formData,
                city_id: e?.value ? e.value : "",
              });
            }}
            options={cityOptions}
          />
        </div>
        {/* <CustomInput
          variant="dashboard"
          label={"Company Address:"}
          placeholder={"Ikeja, Lagos"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, company_name: val })}
        /> */}
        {/* 
        <CustomInput
          variant="dashboard"
          label={"Address:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, address: val })}
        /> */}
        {/* <CustomInput
          variant="dashboard"
          label={"Country:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, address: val })}
        /> */}
        {/* <CustomInput
          variant="dashboard"
          label={"State:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, address: val })}
        /> */}
        {/* <CustomInput
          variant="dashboard"
          label={"City:"}
          placeholder={"Yinka"}
          validation={(val) => val.length > 3}
          handleValue={(val) => setFormData({ ...formData, address: val })}
        /> */}
        <PriButton
          text={"Save Changes"}
          type="submit"
          className="w-[178px] h-[42px] rounded-[6px] text-lg font-bold mt-5 self-end  "
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default ProfileDetailsForm;
