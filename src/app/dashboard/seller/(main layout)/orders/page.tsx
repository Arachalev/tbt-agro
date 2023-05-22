import React from "react";

import { productsTableData } from "@/store/DummyData/Dashboard/tableData";
import ProductTable from "@/components/Dashboard/ProductsTable";

const page = () => {
  return (
    <div className="min-h-[calc(100vh-96px)] p-4 sm:p-8 xl:p-[72px]  ">
      <div className="mt-10 2xl:w-[1300px] 2xl:mx-auto">
        <h4 className="pb-4 md:pb-8  text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          Order History
        </h4>
        <div>
          <form
            className="flex flex-col  md:flex-row gap-4 md:gap-8 items-center justify-center bg-white w-full rounded-[10px] p-4 text-agro-black"
            action=""
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="">Search:</label>
              <input
                type="text"
                className="w-[256px] md:w-full xl:w-[256px] h-[41px] border-gray2 border rounded-[4px] "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">From:</label>
              <input
                type="text"
                className="w-[256px] md:w-full xl:w-[256px] h-[41px] border-gray2 border rounded-[4px] "
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="">To:</label>
              <input
                type="text"
                className="w-[256px]  md:w-full xl:w-[256px] h-[41px] border-gray2 border rounded-[4px] "
              />
            </div>
          </form>
        </div>
        <div className="overflow-x-auto  w-full  mt-10">
          <ProductTable
            column={productsTableData.column}
            data={productsTableData.data}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
