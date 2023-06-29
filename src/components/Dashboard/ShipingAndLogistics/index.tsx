"use client";

import React, { useState, FormEvent, CSSProperties } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import woosh from "../../../../public/images/wooshLogistics.svg";
import {
  useGetShippingAddressQuery,
  useUpdateShippingAddressMutation,
} from "@/store/redux/services/buyerSlice/shippingAddressSlice/shippingAddressApiSlice";
import useInput from "@/hooks/useInput";
import PriButton from "@/components/PriButton";
import StatusModal from "@/components/Forms/StatusModal";
import Select, {
  components,
  SetValueAction,
  Props,
  StylesConfig,
  GroupBase,
} from "react-select";
import {
  useGetAllCountriesQuery,
  useGetCitiesInStateQuery,
  useGetStatesInCountryQuery,
} from "@/store/redux/services/locationSlice/locationApiSlice";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";

const ShipingAndLogistics = () => {
  const [openShipping, setOpenShipping] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    country_id: "",
    state_id: "",
    city_id: "",
  });

  const {
    data: address,
    error: addressError,
    isLoading: addressLoading,
  } = useGetShippingAddressQuery("");

  const [updateAddress, { data, error, isLoading }] =
    useUpdateShippingAddressMutation();

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

  const selectStyling = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      width: "100%",
      minHeight: 10,
      maxHeight: 30,
      overflow: "clip",
      padding: 0,
      margin: 0,
      backgroundColor: "inherit",
      border: "none",
    }),
    indicatorsContainer: (base: any, props: any) => ({
      ...base,
      height: "100%",
    }),
  };

  const {
    value: fNameValue,
    hasError: fNameError,
    enteredInputHandler: fNameHandler,
    onBlurHandler: fNameBlur,
    onFocusHandler: fNameFocus,
    reset: resetFName,
  } = useInput((val) => val.length > 3);

  const {
    value: lNameValue,
    hasError: lNameError,
    enteredInputHandler: lNameHandler,
    onBlurHandler: lNameBlur,
    onFocusHandler: lNameFocus,
    reset: resetLName,
  } = useInput((val) => val.length > 3);

  const {
    value: pickUpValue,
    hasError: pickUpError,
    enteredInputHandler: pickUpHandler,
    onBlurHandler: pickUpBlur,
    onFocusHandler: pickUpFocus,
    reset: resetPickUp,
  } = useInput((val) => val.length > 3);

  const {
    value: addressValue,
    hasError: deliveryAddressError,
    enteredInputHandler: addressHandler,
    onBlurHandler: addressBlur,
    onFocusHandler: addressFocus,
    reset: resetAddress,
  } = useInput((val) => val.length > 3);

  const {
    value: deliveryDateValue,
    hasError: deliveryDateError,
    enteredInputHandler: deliveryDateHandler,
    onBlurHandler: deliveryDateBlur,
    onFocusHandler: deliveryDateFocus,
    reset: resetDeliveryDate,
  } = useInput((val) => val.length > 0);

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);

    const deliveryDateArr = deliveryDateValue.value.split("-");
    const delivery_date = `${deliveryDateArr[2]}/${deliveryDateArr[1]}/${deliveryDateArr[0]}`;

    const data = {
      first_name: fNameValue.value,
      last_name: lNameValue.value,
      pickup_location: pickUpValue.value,
      delivery_address: addressValue.value,
      country_id: formData.country_id,
      state_id: formData.state_id,
      city_id: formData.city_id,
      delivery_date,
    };

    console.log(data);

    const res = await updateAddress(data);
  };

  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }

  // console.log(data, error);

  return openShipping ? (
    <div className="rounded-[10px] bg-white w-full 2xl:w-[966px] ">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          error={error ? errorMessage : ""}
          data={data ? data?.message : ""}
          dataFunc={() => {
            setShowModal(false);
            setOpenShipping(false);
          }}
        />
      )}
      <div className="flex items-center justify-between pb-4 pt-6 px-8 border-b border-b-gray2 ">
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="text-agro-green text-xl  " />{" "}
          <p className="font-semibold  text-sm sm:text-base text-agro-black">
            1. SHIPPING & LOGISTICS
          </p>
        </div>
        <button
          className="font-semibold  text-sm sm:text-base text-agro-green"
          onClick={() => setOpenShipping((state) => !state)}
        >
          CHANGE
        </button>
      </div>
      <div className="px-8 pb-[70px] pt-1">
        <div className=" sm:pl-8 mb-6 flex flex-col sm:flex-row items-center justify-between   w-full">
          <div>
            <h4 className="font-bold">
              Where would you like your products to be delivered?
            </h4>
            <p className="text-sm mt-1">
              Receive quick quotation from our partners by filling the form
              below
            </p>
          </div>
          <Image src={woosh} alt="logistics" />
        </div>
        <div>
          <form
            onSubmit={formHandler}
            action=""
            className="flex flex-col gap-6 text-agro-black"
          >
            <div className="flex flex-col gap-6 ">
              <div className="grid grid-cols-1 md:grid-cols-3   gap-5 items-center">
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    First Name
                  </label>
                  <input
                    onChange={fNameHandler}
                    onBlur={fNameBlur}
                    onFocus={fNameFocus}
                    value={fNameValue.value}
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={lNameHandler}
                    onBlur={lNameBlur}
                    onFocus={lNameFocus}
                    value={lNameValue.value}
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Pick up or Product Location
                  </label>
                  <input
                    onChange={pickUpHandler}
                    onBlur={pickUpBlur}
                    onFocus={pickUpFocus}
                    value={pickUpValue.value}
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                {/* <div className="">
                  <label className="text-[10px] font-bold block">
                    Phone Number:
                  </label>
                  <div className="mt-1 flex items-center gap-4">
                    <input
                      className=" placeholder:text-[10px] text-[10px] w-[90px] h-8 pl-3 rounded-[4px] border border-gray2 bg-gray3"
                      type="text"
                      placeholder="+234"
                    />
                    <input
                      className=" placeholder:text-[10px] text-[10px] w-full h-8 pl-3 rounded-[4px] border border-gray2 bg-gray3"
                      type="text"
                      placeholder="08185622857"
                    />
                  </div>
                </div> */}
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Name of Product
                  </label>
                  <input
                    type="email"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
              </div> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                <div className=" col-span-2">
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Country
                  </label>
                  <Select
                    styles={selectStyling}
                    className=" placeholder:text-[10px] text-[10px] w-full h-8  rounded-[4px] border border-gray2 bg-gray3 mt-1 "
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        country_id: e?.value ? e.value : "",
                      });
                    }}
                    options={countryOptions}
                  />
                </div>
                {/* <div className=" col-span-2">
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div> */}
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    State
                  </label>
                  <Select
                    styles={selectStyling}
                    className=" placeholder:text-[10px] text-[10px] w-full h-8  rounded-[4px] border border-gray2 bg-gray3 mt-1 "
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        state_id: e?.value ? e.value : "",
                      });
                    }}
                    options={stateOptions}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                <div className=" col-span-2">
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    City
                  </label>
                  <Select
                    styles={selectStyling}
                    className=" placeholder:text-[10px] text-[10px] w-full h-8  rounded-[4px] border border-gray2 bg-gray3 mt-1 "
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        city_id: e?.value ? e.value : "",
                      });
                    }}
                    options={cityOptions}
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    {/* Local Government Area */}
                    Delivery Address
                  </label>
                  <input
                    onChange={addressHandler}
                    onBlur={addressBlur}
                    onFocus={addressFocus}
                    value={addressValue.value}
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
                <div className=" col-span-2">
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Expected Delivery Date
                  </label>
                  <input
                    onChange={deliveryDateHandler}
                    onBlur={deliveryDateBlur}
                    onFocus={deliveryDateFocus}
                    value={deliveryDateValue.value}
                    type="date"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
              </div>
              <PriButton
                text={"Submit"}
                className="  w-fit px-4  h-8"
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="rounded-[10px] bg-white w-full 2xl:w-[966px] ">
      <div className="flex items-center justify-between pb-4 pt-6 px-8 ">
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="text-agro-green text-xl  " />{" "}
          <p className="font-semibold  text-sm sm:text-base  text-agro-black">
            1. SHIPPING & LOGISTICS
          </p>
          <p className="ml-10 font-semibold">
            {address?.data?.delivery_address
              ? address?.data?.delivery_address
              : addressLoading
              ? "Loading..."
              : addressError
              ? "Error getting address"
              : "No Address"}
          </p>
        </div>
        <button
          className="font-semibold text-sm sm:text-base text-agro-green"
          onClick={() => setOpenShipping((state) => !state)}
        >
          CHANGE
        </button>
      </div>
    </div>
  );
};

export default ShipingAndLogistics;
