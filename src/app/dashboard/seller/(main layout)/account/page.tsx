"use client";

import React from "react";

import ProductTable from "@/components/Dashboard/ProductsTable";
import { HiPlusSm } from "react-icons/hi";
import { productsTableData } from "@/store/DummyData/Dashboard/tableData";
import TopRankingMultiProductsCard from "@/components/TopRankingMultiProductsCard";
import { topRankingMultiProductsCardData } from "@/store/DummyData/topRankingMultiProductsData";
import Link from "next/link";
import { useGetSellersProductQuery } from "@/store/redux/services/sellerSlice/productsSlice/productsApiSlice";

const Page = () => {
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useGetSellersProductQuery("");

  let tableData: {}[] = [];
  if (products) {
    products?.data?.data.map(
      (item: {
        created_at: string;
        status: string;
        name: string;
        tbt_price: number;
        quantity: number;
        clicks: number;
      }) => {
        let dateArr = item.created_at.split("T")[0];
        let modDate = dateArr.split("-");
        let date = `${modDate[2]}/${modDate[1]}/${modDate[0]}`;

        let status = item.status.charAt(0).toUpperCase() + item.status.slice(1);

        return tableData.push({
          Name: item.name,
          Price: item.tbt_price,
          Quantity: item.quantity,
          Clicks: `${item.clicks} clicks`,
          "Date Uploaded": date,
          Status: status,
        });
      }
    );
  }

  // console.log(products?.data?.data);
  return (
    <div className="  min-h-[calc(100vh-96px)] p-4 sm:p-8 xl:p-[72px] ">
      <div className=" pt-8  ">
        <div className="flex justify-between w-full">
          <h4 className="text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
            Welcome, Yinka
          </h4>
          <Link
            href="/dashboard/seller/add-product"
            className="flex items-center text-sm sm:text-base xl:text-lg font-bold bg-agro-yellow px-6 py-2 rounded-[5px] "
          >
            <HiPlusSm />
            Add Product
          </Link>
        </div>
        <div className="overflow-x-auto  w-full  mt-3">
          <ProductTable
            column={productsTableData.column}
            data={products ? tableData : []}
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
