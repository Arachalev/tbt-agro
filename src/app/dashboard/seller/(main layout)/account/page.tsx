import React from "react";

import ProductTable from "@/components/Dashboard/ProductsTable";
import { HiPlusSm } from "react-icons/hi";
import { productsTableData } from "@/store/DummyData/Dashboard/tableData";
import TopRankingMultiProductsCard from "@/components/TopRankingMultiProductsCard";
import { topRankingMultiProductsCardData } from "@/store/DummyData/topRankingMultiProductsData";

const Page = () => {
  return (
    <div className="  min-h-[calc(100vh-96px)] p-4 sm:p-8 xl:p-[72px] ">
      <div className=" pt-8  ">
        <div className="flex justify-between w-full">
          <h4 className="text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
            Welcome, Yinka
          </h4>
          <button className="flex items-center text-sm sm:text-base xl:text-lg font-bold bg-agro-yellow px-6 py-2 rounded-[5px] ">
            <HiPlusSm />
            Add Product
          </button>
        </div>
        <div className="overflow-x-auto  w-full  mt-3">
          <ProductTable
            column={productsTableData.column}
            data={productsTableData.data}
          />
        </div>
        <div className="self-start sm:w-[420px] mt-12">
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
