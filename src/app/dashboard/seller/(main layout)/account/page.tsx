import ProductTable from "@/components/Dashboard/ProductsTable";
import React from "react";

import { HiPlusSm } from "react-icons/hi";
import { productsTableData } from "@/store/DummyData/Dashboard/tableData";
import TopRankingMultiProductsCard from "@/components/TopRankingMultiProductsCard";
import { topRankingMultiProductsCardData } from "@/store/DummyData/topRankingMultiProductsData";

const Page = () => {
  return (
    <div className="  min-h-[calc(100vh-96px)]  py-[72px] ">
      <div className="w-[947px] mx-auto">
        <div className="flex justify-between w-full">
          <h4 className="text-3xl text-agro-green font-semibold overflow-clip">
            Welcome, Yinka
          </h4>
          <button className="flex items-center text-lg font-bold bg-agro-yellow px-6 py-2 rounded-[5px] ">
            <HiPlusSm />
            Add Product
          </button>
        </div>
        <div className="w-full overflow-x-  mt-3">
          <ProductTable
            column={productsTableData.column}
            data={productsTableData.data}
          />
        </div>
        <div className="self-start mt-12">
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
