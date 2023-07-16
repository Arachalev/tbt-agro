"use client";

import React, { useState, useEffect } from "react";

import ProductTable from "@/components/Dashboard/ProductsTable";
import { HiPlusSm } from "react-icons/hi";
import { productsTableData } from "@/store/DummyData/Dashboard/tableData";
import Link from "next/link";
import { useGetSellersProductQuery } from "@/store/redux/services/sellerSlice/productsSlice/productsApiSlice";
import { useAppSelector } from "@/store/redux/hooks";
import { selectSellerProfile } from "@/store/redux/services/sellerSlice/profileSlice/profileSlice";
import PaginationButtons from "@/components/PaginationButtons";

const Page = () => {
  const [paginatedProducts, setPaginatedProducts] = useState([{}]);

  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useGetSellersProductQuery("");

  const profile = useAppSelector(selectSellerProfile);

  const fetchOtherPages = async (
    total: number,
    pageLimit: number,
    pageUrl: string
  ) => {
    const tempProducts: any[] = [];
    const limit = Math.ceil(total / pageLimit);
    const dataArr = new Array(limit + 1).fill("");

    await Promise.all(
      dataArr.map(async (item, index) => {
        if (index > 0) {
          const res = await fetch(`${pageUrl}=${index}`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          });
          const data = await res.json();
          data.data.data.map(
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

              let status =
                item.status.charAt(0).toUpperCase() + item.status.slice(1);

              return tempProducts.push({
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
      })
    );

    // console.log(tempProducts);
    setPaginatedProducts(tempProducts);
  };

  useEffect(() => {
    if (products) {
      const pageUrl = products.data.first_page_url.split("=")[0];

      console.log(pageUrl);

      fetchOtherPages(products.data.total, products.data.per_page, pageUrl);
    }
  }, [products]);

  // console.log(products?.data);

  const nextPageHandler = async () => {};

  const previousPageHandler = async () => {};

  const getPageHandler = async () => {};

  return (
    <div className="  min-h-[calc(100vh-96px)] p-4 sm:p-8 xl:p-[72px] ">
      <div className=" pt-8  ">
        <div className="flex justify-between w-full">
          <h4 className="text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
            Welcome, {profile.fName}
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
            // data={products ? productsTableData.data : []}
            data={products ? paginatedProducts : []}
            // data={
            //   products
            //     ? pagination.currentPage === 1
            //       ? paginatedProducts.slice(0, 10)
            //       : paginatedProducts.slice(
            //           pagination.currentPage * 10 - 9,
            //           pagination.currentPage * 10
            //         )
            //     : []
            // }
          />
        </div>
        <div className="mt-4 flex flex-col "></div>
        {/* <div className="self-start sm:w-[420px] mt-12">
          <TopRankingMultiProductsCard
            products={topRankingMultiProductsCardData.products}
            href={topRankingMultiProductsCardData.href}
            title={topRankingMultiProductsCardData.title}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
