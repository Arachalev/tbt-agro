"use client";

import React, { FormEvent } from "react";

import { productsTableData } from "@/store/DummyData/Dashboard/tableData";
import ProductTable from "@/components/Dashboard/ProductsTable";
import { useGetAllOrdersQuery } from "@/store/redux/services/OrdersSlice/ordersApiSlice";
import "./style.css";
import { useSearchOrderMutation } from "@/store/redux/services/OrdersSlice/ordersApiSlice";
import useInput from "@/hooks/useInput";

const Page = () => {
  const {
    data: ordersData,
    isLoading: ordersLoading,
    error: ordersError,
  } = useGetAllOrdersQuery("");

  const [
    searchOrder,
    { data: searchData, isLoading: searchLoading, error: searchError },
  ] = useSearchOrderMutation();

  const {
    enteredInputHandler: searchHandler,
    value: searchValue,
    hasError: searchHasError,
    onBlurHandler: searchBlurHandler,
    onFocusHandler: searchFocusHandler,
    reset: resetSearch,
  } = useInput((val) => val.length > 0);

  const {
    enteredInputHandler: fromHandler,
    value: fromValue,
    hasError: fromHasError,
    onBlurHandler: fromBlurHandler,
    onFocusHandler: fromFocusHandler,
    reset: resetFrom,
  } = useInput((val) => val.length > 0);

  const {
    enteredInputHandler: toHandler,
    value: toValue,
    hasError: toHasError,
    onBlurHandler: toBlurHandler,
    onFocusHandler: toFocusHandler,
    reset: resetTo,
  } = useInput((val) => val.length > 0);

  let orders: {}[] = [{}];
  orders = ordersData?.data?.data;

  const formHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-[calc(100vh-96px)] p-4 sm:p-8 xl:p-[72px]  ">
      <div className="mt-10 2xl:w-[1300px] 2xl:mx-auto">
        <h4 className="pb-4 md:pb-8  text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          Order History
        </h4>
        <div>
          <form
            onSubmit={formHandler}
            className="flex flex-col  md:flex-row gap-4 md:gap-8 items-center justify-center bg-white w-full rounded-[10px] p-4 text-agro-black"
            action=""
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="">Search:</label>
              <input
                onChange={searchHandler}
                onFocus={searchFocusHandler}
                onBlur={searchBlurHandler}
                value={searchValue.value}
                type="text"
                className="w-[256px] md:w-full xl:w-[256px] h-[41px] border-gray2 border rounded-[4px] "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">From:</label>
              <input
                type="date"
                onChange={fromHandler}
                onFocus={fromFocusHandler}
                onBlur={fromBlurHandler}
                value={fromValue.value}
                className="px-4 w-[256px] md:w-full xl:w-[256px] h-[41px] border-gray2 border rounded-[4px] "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">To:</label>
              <input
                onChange={toHandler}
                onFocus={toFocusHandler}
                onBlur={toBlurHandler}
                value={toValue.value}
                type="date"
                className="px-4 w-[256px]  md:w-full xl:w-[256px] h-[41px] border-gray2 border rounded-[4px] "
              />
            </div>
          </form>
        </div>

        {ordersLoading && (
          <p className="text-xl font-semibold text-agro-green">
            Loading Orders...
          </p>
        )}

        {orders && orders.length > 0 ? (
          <div className="overflow-x-auto  w-full  mt-10">
            <ProductTable
              column={productsTableData.column}
              data={productsTableData.data}
            />
          </div>
        ) : (
          <p className="text-xl sm:text-4xl mt-4 font-semibold text-agro-green">
            No Orders Yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
