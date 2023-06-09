"use client";
import React, { FormEvent, useState } from "react";

import Image from "next/image";
import PriButton from "@/components/PriButton";
import upload from "../../../../../public/icons/upload.svg";
import Link from "next/link";
import { CgArrowLongLeft } from "react-icons/cg";
import { useCreateProductMutation } from "@/store/redux/services/sellerSlice/productsSlice/productsApiSlice";
import useInput from "@/hooks/useInput";
import { useGetCategoriesQuery } from "@/store/redux/services/categorySlice/categoryApiSlice";
import StatusModal from "../../StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";
import { useGetAllBuyerLeadsQuery } from "@/store/redux/services/sellerSlice/buyerLeadsSlice/buyerLeadsApiSlice";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { RiCloseLine } from "react-icons/ri";

const AddProductForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [categoryID, setCategoryID] = useState(1);

  const [images, setImages] = useState<{ images: File[]; fileName: string[] }>({
    images: [],
    fileName: [],
  });

  const router = useRouter();

  const [createProduct, { isLoading, isSuccess, error, data }] =
    useCreateProductMutation();

  const {
    data: categories,
    isLoading: loadingCategories,
    error: errorCategories,
  } = useGetCategoriesQuery("");

  const { data: buyerLeads } = useGetAllBuyerLeadsQuery("");

  let categoryOptions: { value: number; label: string }[] = [
    { value: 1, label: "loading...." },
  ];

  if (categories?.data) {
    categoryOptions.pop();
    categories?.data.map((item: { id: number; name: string }) =>
      categoryOptions.push({ value: item.id, label: item.name })
    );
  }

  const {
    value: nameValue,
    enteredInputHandler: nameHandler,
    onBlurHandler: nameBlurHandler,
    onFocusHandler: nameFocusHandler,
    hasError: nameHasError,
    reset: resetName,
  } = useInput((val) => val.length > 3);

  const {
    value: locationValue,
    enteredInputHandler: locationHandler,
    onBlurHandler: locationBlurHandler,
    onFocusHandler: locationFocusHandler,
    hasError: locationHasError,
    reset: resetLocation,
  } = useInput((val) => val.length > 3);

  const {
    value: salePriceValue,
    enteredInputHandler: salePriceHandler,
    onBlurHandler: salePriceBlurHandler,
    onFocusHandler: salePriceFocusHandler,
    hasError: salePriceHasError,
    reset: resetSalePrice,
  } = useInput((val) => parseInt(val) > 0);

  const {
    value: tbtPriceValue,
    enteredInputHandler: tbtPriceHandler,
    onBlurHandler: tbtPriceBlurHandler,
    onFocusHandler: tbtPriceFocusHandler,
    hasError: tbtPriceHasError,
    reset: resetTbtPrice,
  } = useInput((val) => parseInt(val) > 0);

  const {
    value: descriptionValue,
    enteredInputHandler: descriptionHandler,
    onBlurHandler: descriptionBlurHandler,
    onFocusHandler: descriptionFocusHandler,
    hasError: descriptionHasError,
    reset: resetDescription,
  } = useInput((val) => val.length > 4);

  const {
    value: quantityValue,
    enteredInputHandler: quantityHandler,
    onBlurHandler: quantityBlurHandler,
    onFocusHandler: quantityFocusHandler,
    hasError: quantityHasError,
    reset: resetQuantity,
  } = useInput((val) => parseInt(val) > 0);

  const {
    value: unitValue,
    enteredInputHandler: unitHandler,
    onBlurHandler: unitBlurHandler,
    onFocusHandler: unitFocusHandler,
    hasError: unitHasError,
    reset: resetUnit,
  } = useInput((val) => (val ? true : false));

  const {
    value: minPurchaseValue,
    enteredInputHandler: minPurchaseHandler,
    onBlurHandler: minPurchaseBlurHandler,
    onFocusHandler: minPurchaseFocusHandler,
    hasError: minPurchaseHasError,
    reset: resetMinPurchase,
  } = useInput((val) => parseInt(val) > 0);

  const {
    value: infoValue,
    enteredInputHandler: infoHandler,
    onBlurHandler: infoBlurHandler,
    onFocusHandler: infoFocusHandler,
    hasError: infoHasError,
    reset: resetInfo,
  } = useInput((val) => val.length > 3);

  // Func to handle Image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    let names: string[] = [];

    let uploadedImages;
    if (files) {
      uploadedImages = Array.from(files);
      uploadedImages.forEach((item) => names.push(item.name));
      setImages({ images: uploadedImages, fileName: names });
    }
  };

  // Delete one uploaded file
  const deleteFile = (id: number) => {
    let files = images.images;
    let names: string[] = [];

    let filteredFiles = files.filter((item) => files.indexOf(item) !== id);
    filteredFiles.forEach((item) => names.push(item.name));

    setImages({
      images: [...filteredFiles],
      fileName: [...names],
    });
  };

  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    setShowModal(true);

    const formData = {
      name: nameValue.value,
      location: locationValue.value,
      sale_price: salePriceValue.value,
      tbt_price: tbtPriceValue.value,
      description: descriptionValue.value,
      unit: unitValue.value,
      minimum_purchase: minPurchaseValue.value,
      quantity: quantityValue.value,
      other_info: infoValue.value,
      category_id: categoryID,
      "images[]": images.images,
    };

    await createProduct(formData);
  };

  // console.log(data, error);
  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }
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
      <div className="mb-5">
        <Link
          className="flex items-center gap-1 text-agro-orange mb-4"
          href="/dashboard/seller/account"
        >
          <CgArrowLongLeft /> <p className="text-sm font-medium">Back</p>
        </Link>
        <h4 className=" text-xl md:text-2xl xl:text-3xl text-agro-black font-semibold overflow-clip">
          Add a Product
        </h4>
      </div>
      <form onSubmit={formHandler} action="" className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 bg-white rounded-[10px] p-5 ">
          <div className="text-agro-black">
            <h4 className="text-lg font-bold">Product Details</h4>
            <p className="text-sm">Basic Product Details.</p>
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
            </div>
          ) : (
            <div>
              <label
                htmlFor="file"
                className="flex items-center gap-2 bg-[#D4E6ED] h-16 px-5 rounded-[4px]"
              >
                <Image src={upload} alt="upload icon" />
                <p className="text-gray2">
                  Drag & Drop your product images or Browse.
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
              Name of Product <span>*</span>
            </label>
            <input
              onChange={nameHandler}
              value={nameValue.value}
              onBlur={nameBlurHandler}
              onFocus={nameFocusHandler}
              required
              type="text"
              className={`w-full h-12 rounded-[4px] border  ${
                nameValue.isTouched
                  ? "border-agro-yellow"
                  : nameHasError
                  ? " border-red-500 "
                  : "border-gray2 "
              } outline-none bg-gray3 mt-2 px-5 `}
              placeholder="Name of Product"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Product Location <span>*</span>
            </label>
            <input
              type="text"
              onChange={locationHandler}
              onBlur={locationBlurHandler}
              onFocus={locationFocusHandler}
              value={locationValue.value}
              className={` ${
                locationValue.isTouched
                  ? "border-agro-yellow"
                  : locationHasError
                  ? " border-red-500 "
                  : "border-gray2 "
              } outline-none w-full h-12 rounded-[4px] border   bg-gray3 mt-2 px-5`}
              placeholder="Please enter the location of the product"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="w-full sm:w-fit">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Sale Price <span>*</span>
              </label>
              <input
                type="text"
                value={salePriceValue.value}
                onChange={salePriceHandler}
                onBlur={salePriceBlurHandler}
                onFocus={salePriceFocusHandler}
                className={`${
                  salePriceValue.isTouched
                    ? "border-agro-yellow"
                    : salePriceHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none w-full sm:w-[209px] h-12 rounded-[4px] border bg-gray3 mt-2 px-5`}
                placeholder="0"
              />
            </div>
            <div className="w-full sm:w-fit">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                TTB Price <span>*</span>
              </label>
              <input
                type="text"
                value={tbtPriceValue.value}
                onChange={tbtPriceHandler}
                onBlur={tbtPriceBlurHandler}
                onFocus={tbtPriceFocusHandler}
                className={`${
                  tbtPriceValue.isTouched
                    ? "border-agro-yellow"
                    : tbtPriceHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none w-full sm:w-[209px] h-12 rounded-[4px] border  bg-gray3 mt-2 px-5`}
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Product Description <span>*</span>
            </label>
            <textarea
              value={descriptionValue.value}
              onChange={descriptionHandler}
              onBlur={descriptionBlurHandler}
              onFocus={descriptionFocusHandler}
              className={`${
                descriptionValue.isTouched
                  ? "border-agro-yellow"
                  : descriptionHasError
                  ? " border-red-500 "
                  : "border-gray2 "
              } outline-none w-full h-[152px] rounded-[4px] border bg-gray3 mt-2 px-5 pt-4`}
              placeholder="Enter product description."
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="w-full sm:w-fit">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Quantity <span>*</span>
              </label>
              <input
                value={quantityValue.value}
                onChange={quantityHandler}
                onBlur={quantityBlurHandler}
                onFocus={quantityFocusHandler}
                type="text"
                className={`${
                  quantityValue.isTouched
                    ? "border-agro-yellow"
                    : quantityHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none  w-full sm:w-[209px]  h-12 rounded-[4px] border bg-gray3 mt-2 px-5`}
                placeholder="0"
              />
            </div>
            <div className="w-full sm:w-fit">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Select Unit <span>*</span>
              </label>
              <input
                value={unitValue.value}
                onChange={unitHandler}
                onBlur={unitBlurHandler}
                onFocus={unitFocusHandler}
                type="text"
                className={`${
                  unitValue.isTouched
                    ? "border-agro-yellow"
                    : unitHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none  w-full sm:w-[209px]  h-12 rounded-[4px] border bg-gray3 mt-2 px-5`}
                placeholder="Kg"
              />
            </div>
            <div className="w-full sm:w-fit">
              <label
                htmlFor=""
                className="font-semibold text-sm text-agro-black block"
              >
                Minimum Purchase Requirement <span>*</span>
              </label>
              <input
                value={minPurchaseValue.value}
                onChange={minPurchaseHandler}
                onBlur={minPurchaseBlurHandler}
                onFocus={minPurchaseFocusHandler}
                type="text"
                className={`${
                  minPurchaseValue.isTouched
                    ? "border-agro-yellow"
                    : minPurchaseHasError
                    ? " border-red-500 "
                    : "border-gray2 "
                } outline-none  w-full sm:w-[209px]  h-12 rounded-[4px] border bg-gray3 mt-2 px-5`}
                placeholder="100"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Product Category <span>*</span>
            </label>
            <Select
              className=" rounded-[4px] border border-gray2 bg-gray3 mt-2"
              placeholder="Please select a category"
              options={categoryOptions}
              onChange={(val) => setCategoryID(val?.value ? val.value : 1)}
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-sm text-agro-black">
              Other Information<span>*</span>
            </label>
            <textarea
              value={infoValue.value}
              onChange={infoHandler}
              onBlur={infoBlurHandler}
              onFocus={infoFocusHandler}
              className={`${
                infoValue.isTouched
                  ? "border-agro-yellow"
                  : infoHasError
                  ? " border-red-500 "
                  : "border-gray2 "
              } outline-none w-full h-[152px] rounded-[4px] border bg-gray3 mt-2 px-5 pt-4`}
              placeholder="Enter information you think might be useful."
            />
          </div>
        </div>
        <PriButton
          text={"Create Product"}
          type="submit"
          className="w-[206px] h-12 rounded-md text-xl font-bold self-end"
          onClick={() => {}}
        />
      </form>
    </div>
  );
};

export default AddProductForm;
