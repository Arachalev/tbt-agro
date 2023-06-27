"use client";
import React, { FormEvent, useState } from "react";

import Image from "next/image";
import PriButton from "@/components/PriButton";
import upload from "../../../../../public/icons/upload.svg";
import { useSubmitQuoteSellerMutation } from "@/store/redux/services/buyerSlice/quotationSlice/quotationApiSlice";
import StatusModal from "../../StatusModal";
import useInput from "@/hooks/useInput";
import { RiCloseLine } from "react-icons/ri";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";
import { useRouter, usePathname } from "next/navigation";

const SubmitQuoteForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState<{
    images: File[];
    fileName: string[];
  }>({
    images: [],
    fileName: [],
  });

  const id = usePathname().split("/")[4];
  // console.log(id);
  const router = useRouter();
  const [submitQuote, { data, isLoading, error }] =
    useSubmitQuoteSellerMutation();

  const {
    value: fNameValue,
    enteredInputHandler: fNameHandler,
    onBlurHandler: fNameBlurHandler,
    onFocusHandler: fNameFocusHandler,
    hasError: fNameHasError,
    reset: resetFName,
  } = useInput((val) => val.length > 3);

  const {
    value: lNameValue,
    enteredInputHandler: lNameHandler,
    onBlurHandler: lNameBlurHandler,
    onFocusHandler: lNameFocusHandler,
    hasError: lNameHasError,
    reset: resetLName,
  } = useInput((val) => val.length > 3);

  const {
    value: emailValue,
    enteredInputHandler: emailHandler,
    onBlurHandler: emailBlurHandler,
    onFocusHandler: emailFocusHandler,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput((val) => val.includes("@"));

  const {
    value: pNumberValue,
    enteredInputHandler: pNumberHandler,
    onBlurHandler: pNumberBlurHandler,
    onFocusHandler: pNumberFocusHandler,
    hasError: pNumberHasError,
    reset: resetPNumber,
  } = useInput((val) => val.length > 9);

  const {
    value: countryCodeValue,
    enteredInputHandler: countryCodeHandler,
    onBlurHandler: countryCodeBlurHandler,
    onFocusHandler: countryCodeFocusHandler,
    hasError: countryCodeHasError,
    reset: resetCountryCode,
  } = useInput((val) => val.length > 2);

  const {
    value: companyNameValue,
    enteredInputHandler: companyNameHandler,
    onBlurHandler: companyNameBlurHandler,
    onFocusHandler: companyNameFocusHandler,
    hasError: companyNameHasError,
    reset: resetCompanyName,
  } = useInput((val) => val.length > 2);

  const {
    value: productNameValue,
    enteredInputHandler: productNameHandler,
    onBlurHandler: productNameBlurHandler,
    onFocusHandler: productNameFocusHandler,
    hasError: productNameHasError,
    reset: resetProductName,
  } = useInput((val) => val.length > 2);

  const {
    value: salePriceValue,
    enteredInputHandler: salePriceHandler,
    onBlurHandler: salePriceBlurHandler,
    onFocusHandler: salePriceFocusHandler,
    hasError: salePriceHasError,
    reset: resetSalePrice,
  } = useInput((val) => (val ? true : false));

  const {
    value: tbtPriceValue,
    enteredInputHandler: tbtPriceHandler,
    onBlurHandler: tbtPriceBlurHandler,
    onFocusHandler: tbtPriceFocusHandler,
    hasError: tbtPriceHasError,
    reset: resetTbtPrice,
  } = useInput((val) => (val ? true : false));

  const {
    value: availableQuantityValue,
    enteredInputHandler: availableQuantityHandler,
    onBlurHandler: availableQuantityBlurHandler,
    onFocusHandler: availableQuantityFocusHandler,
    hasError: availableQuantityHasError,
    reset: resetAvailQuantity,
  } = useInput((val) => (val ? true : false));

  const {
    value: minQuantityValue,
    enteredInputHandler: minQuantityHandler,
    onBlurHandler: minQuantityBlurHandler,
    onFocusHandler: minQuantityFocusHandler,
    hasError: minQuantityHasError,
    reset: resetMinQuantity,
  } = useInput((val) => (val ? true : false));

  const {
    value: specsValue,
    enteredInputHandler: specsHandler,
    onBlurHandler: specsBlurHandler,
    onFocusHandler: specsFocusHandler,
    hasError: specsHasError,
    reset: resetSpecs,
  } = useInput((val) => (val ? true : false));

  const {
    value: locationValue,
    enteredInputHandler: locationHandler,
    onBlurHandler: locationBlurHandler,
    onFocusHandler: locationFocusHandler,
    hasError: locationHasError,
    reset: resetLocation,
  } = useInput((val) => (val ? true : false));

  const {
    value: infoValue,
    enteredInputHandler: infoHandler,
    onBlurHandler: infoBlurHandler,
    onFocusHandler: infoFocusHandler,
    hasError: infoHasError,
    reset: resetInfo,
  } = useInput((val) => (val ? true : false));

  // Delete one uploaded file
  const deleteFile = (id: number) => {
    let files = images.images;
    let names: string[] = [];

    const uploadedImages = Array.from(files);

    let filteredFiles = uploadedImages.filter(
      (item) => uploadedImages.indexOf(item) !== id
    );
    filteredFiles.forEach((item) => names.push(item.name));

    setImages({
      images: [...filteredFiles],
      fileName: [...names],
    });
  };

  // Function to handle Image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    let names: string[] = [];

    if (files) {
      let uploadedImages;
      uploadedImages = Array.from(files);
      console.log(uploadedImages);
      uploadedImages.forEach((item) => names.push(item.name));
      setImages({ images: uploadedImages, fileName: names });
    }
  };

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    const formInfo = {
      first_name: fNameValue.value,
      last_name: lNameValue.value,
      email: emailValue.value,
      phone_number: `${countryCodeValue.value}${pNumberValue.value}`,
      company_name: companyNameValue.value,
      product_name: productNameValue.value,
      sale_price: salePriceValue.value,
      tbt_price: tbtPriceValue.value,
      available_quantity: availableQuantityValue.value,
      available_quantity_specification: specsValue.value,
      product_location: locationValue.value,
      minimum_purchase_quantity: minQuantityValue.value,
      other_info: infoValue.value,
      buyer_quotation_id: id,
    };

    let formData: any = new FormData();

    const formNamesArray = Object.keys(formInfo);
    formNamesArray.map((item) =>
      formData.append(item, formInfo[item as keyof typeof formInfo])
    );

    // Append images in formData
    images.images.forEach((item) => {
      formData.append("images[]", item);
    });

    await submitQuote(formData);
  };
  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }

  console.log(data, error);

  return (
    <div className="2xl:w-[1300px] 2xl:mx-auto">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          data={data ? data?.message : ""}
          dataFunc={() => router.push("/dashboard/seller/account")}
          error={error ? errorMessage : ""}
        />
      )}
      <form
        onSubmit={formHandler}
        action=""
        className="flex flex-col gap-6 text-agro-black"
      >
        <div className="flex flex-col gap-6 bg-white rounded-[10px] p-5 ">
          <h4 className="text-lg font-bold ">Information & Product Details</h4>

          <div className="grid md:grid-cols-3  gap-5 items-center">
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                First Name
              </label>
              <input
                onChange={fNameHandler}
                value={fNameValue.value}
                onBlur={fNameBlurHandler}
                onFocus={fNameFocusHandler}
                required
                type="text"
                className={`w-full h-12 rounded-[4px] border  ${
                  fNameValue.isTouched
                    ? "border-agro-yellow"
                    : fNameHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5 `}
                placeholder="Name"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Last Name
              </label>
              <input
                onChange={lNameHandler}
                value={lNameValue.value}
                onBlur={lNameBlurHandler}
                onFocus={lNameFocusHandler}
                required
                type="text"
                className={`w-full h-12 rounded-[4px] border  ${
                  lNameValue.isTouched
                    ? "border-agro-yellow"
                    : lNameHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5 `}
                placeholder="Name"
              />
            </div>
            <div className="">
              <label className="text-sm font-bold text-end ">
                Phone Number:
              </label>
              <div className="mt-2 flex items-center gap-6">
                <input
                  onChange={countryCodeHandler}
                  value={countryCodeValue.value}
                  onBlur={countryCodeBlurHandler}
                  onFocus={countryCodeFocusHandler}
                  required
                  className={`w-[90px] h-12 rounded-[4px] border  ${
                    countryCodeValue.isTouched
                      ? "border-agro-yellow"
                      : countryCodeHasError
                      ? " border-red-500 "
                      : "border-gray2 "
                  } outline-none bg-gray3 mt-2 pl-3  `}
                  type="text"
                  maxLength={4}
                  placeholder="+234"
                />
                <input
                  onChange={pNumberHandler}
                  value={pNumberValue.value}
                  onBlur={pNumberBlurHandler}
                  onFocus={pNumberFocusHandler}
                  required
                  className={`w-full h-12 rounded-[4px] border  ${
                    pNumberValue.isTouched
                      ? "border-agro-yellow"
                      : pNumberHasError
                      ? " border-red-500 "
                      : "border-gray2 "
                  } outline-none bg-gray3 mt-2 pl-3  `}
                  type="text"
                  maxLength={10}
                  placeholder="8185622857"
                />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 items-center">
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Email Address
              </label>
              <input
                onChange={emailHandler}
                value={emailValue.value}
                onBlur={emailBlurHandler}
                onFocus={emailFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  emailValue.isTouched
                    ? "border-agro-yellow"
                    : emailHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="email"
                placeholder="tunji@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Company&apos;s Name
              </label>
              <input
                onChange={companyNameHandler}
                value={companyNameValue.value}
                onBlur={companyNameBlurHandler}
                onFocus={companyNameFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  companyNameValue.isTouched
                    ? "border-agro-yellow"
                    : companyNameHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="Orion"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Name of Product
              </label>
              <input
                onChange={productNameHandler}
                value={productNameValue.value}
                onBlur={productNameBlurHandler}
                onFocus={productNameFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  productNameValue.isTouched
                    ? "border-agro-yellow"
                    : productNameHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="Cassava"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-3   gap-5 items-center">
            <div className=" col-span-2">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Products Location
              </label>
              <input
                onChange={locationHandler}
                value={locationValue.value}
                onBlur={locationBlurHandler}
                onFocus={locationFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  locationValue.isTouched
                    ? "border-agro-yellow"
                    : locationHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="Lagos, Ikeja"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Available Quantity
              </label>
              <input
                onChange={availableQuantityHandler}
                value={availableQuantityValue.value}
                onBlur={availableQuantityBlurHandler}
                onFocus={availableQuantityFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  availableQuantityValue.isTouched
                    ? "border-agro-yellow"
                    : availableQuantityHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="500"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-3  gap-5 items-center">
            <div className=" col-span-2">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Available Quality/Specification
              </label>
              <input
                onChange={specsHandler}
                value={specsValue.value}
                onBlur={specsBlurHandler}
                onFocus={specsFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  specsValue.isTouched
                    ? "border-agro-yellow"
                    : specsHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="20% moisture content"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Minimum Purchase Quantity *
              </label>
              <input
                onChange={minQuantityHandler}
                value={minQuantityValue.value}
                onBlur={minQuantityBlurHandler}
                onFocus={minQuantityFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  minQuantityValue.isTouched
                    ? "border-agro-yellow"
                    : minQuantityHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="50"
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-full sm:w-fit">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Sale Price *
              </label>
              <input
                onChange={salePriceHandler}
                value={salePriceValue.value}
                onBlur={salePriceBlurHandler}
                onFocus={salePriceFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  salePriceValue.isTouched
                    ? "border-agro-yellow"
                    : salePriceHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="0"
              />
            </div>
            <div className="w-full sm:w-fit">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                TBT Price *
              </label>
              <input
                onChange={tbtPriceHandler}
                value={tbtPriceValue.value}
                onBlur={tbtPriceBlurHandler}
                onFocus={tbtPriceFocusHandler}
                required
                className={`w-full h-12 rounded-[4px] border  ${
                  tbtPriceValue.isTouched
                    ? "border-agro-yellow"
                    : tbtPriceHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none bg-gray3 mt-2 px-5`}
                type="text"
                placeholder="0"
              />
            </div>
          </div>

          <div className="text-agro-black">
            <h4 className="text-sm font-semibold">Images *</h4>
            <p className="text-xs">
              Your image needs to be at least 300×300 pixels, preferrably a
              square image.
            </p>
          </div>
          {images.images.length > 0 ? (
            <div id="file-upload-fileName" className="flex items-center gap-2">
              {images.fileName.map((item, index) => (
                <span
                  key={`item-${item}-${index}`}
                  className="bg-gray2 px-4 py-1 rounded-[10px]  flex gap-3 items-center"
                >
                  {item}
                  <span
                    className="p-1 bg-gray-200 rounded-full "
                    onClick={() => {
                      deleteFile(index);
                    }}
                  >
                    <RiCloseLine className="text-red-500 cursor-pointer" />
                  </span>
                </span>
              ))}
              <div className="w-fit flex items-center">
                <label
                  htmlFor="file"
                  className="flex items-center gap-2 bg-[#D4E6ED] h-16 px-5 rounded-[4px] cursor-pointer"
                >
                  <Image src={upload} alt="upload icon" />
                  <p className="text-gray2">
                    {/* Drag & Drop your product images or Browse. */}
                    Upload more images.
                  </p>
                </label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  name="file"
                  id="file"
                  multiple
                  className="hidden"
                />
              </div>
            </div>
          ) : (
            <div>
              <label
                htmlFor="file"
                className="flex items-center gap-2 bg-[#D4E6ED] h-16 px-5 rounded-[4px] cursor-pointer"
              >
                <Image src={upload} alt="upload icon" />
                <p className="text-gray2">
                  {/* Drag & Drop your product images or Browse. */}
                  Browse for your product images.
                </p>
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                name="file"
                id="file"
                multiple
                className="hidden"
              />
            </div>
          )}
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Other Information<span>*</span>
            </label>
            <textarea
              onChange={infoHandler}
              value={infoValue.value}
              onBlur={infoBlurHandler}
              onFocus={infoFocusHandler}
              required
              className={`w-full h-12h-[152px] rounded-[4px] border  ${
                infoValue.isTouched
                  ? "border-agro-yellow"
                  : infoHasError
                  ? " border-red-500 "
                  : "border-gray2 "
              } outline-none bg-gray3 mt-2 px-5 pt-4`}
              placeholder="Enter information you think might be useful."
            />
          </div>
        </div>
        <PriButton
          text={"Submit Quote"}
          type="submit"
          className="w-[206px] h-12 rounded-md text-xl font-bold self-end"
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default SubmitQuoteForm;
