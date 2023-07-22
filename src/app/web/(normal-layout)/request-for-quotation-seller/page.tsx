"use client";
import React, { useState, useEffect } from "react";

import Select from "react-select";
import BuyerLeadsCard from "@/components/BuyerLeadsCard";
// import { buyerLeadsData } from "@/store/DummyData/buyerLeadsData";
import { useGetCategoriesQuery } from "@/store/redux/services/categorySlice/categoryApiSlice";
import { useGetAllBuyerLeadsQuery } from "@/store/redux/services/sellerSlice/buyerLeadsSlice/buyerLeadsApiSlice";
import StatusModal from "@/components/Forms/StatusModal";
import PaginationButtons from "@/components/PaginationButtons";

const Pages = () => {
  const [formData, setFormData] = useState({
    category: "All",
    perPage: 5,
    noCategoryData: false,
  });
  const [buyerLeadsData, setBuyerLeadsData] = useState<any[]>([]);

  const {
    data: categoryData,
    isLoading: categoryLoading,
    isError: categoryError,
  } = useGetCategoriesQuery("");
  let categoryOptions = [{ value: "All", label: "All" }];

  if (categoryData) {
    categoryData.data.map(
      (item: { id: number; name: string }) =>
        categoryOptions.push({ value: item.name, label: item.name })
      // categoryOptions.push({ value: item.id.toString(), label: item.name })
    );
  }

  const { data: leadsData } = useGetAllBuyerLeadsQuery("");

  const fetchOtherPages = async (
    total: number,
    pageLimit: number,
    pageUrl: string
  ) => {
    const tempData: any[] = [];
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

          data.data.data.map((item: any) => {
            let category = categoryData.data.find(
              (cat: any) => cat.id === item.category_id
            );

            tempData.push({
              rfq_id: item.rfq_id,
              id: item.id,
              state: item.state.name,
              category: category.name,
              name: item.commodity_name,
              quantity: item.quantity,
              description: item.description,
              // time={item.created_at}
            });
          });
        }
      })
    );

    // console.log(tempData);

    if (formData.category === "All") {
      setBuyerLeadsData(tempData);
    } else {
      const filteredData = tempData.filter(
        (item) => item.category === formData.category
      );
      setBuyerLeadsData(filteredData);
    }
  };

  useEffect(() => {
    if (leadsData) {
      if (categoryData) {
        const pageUrl = leadsData.data.first_page_url.split("=")[0];
        fetchOtherPages(leadsData.data.total, leadsData.data.per_page, pageUrl);
      }
    }
  }, [leadsData, categoryData, formData]);

  return (
    <main className="bg-agro-gray pt-[88px] pb-[160px] ">
      <div className="flex flex-col gap-2 md:gap-5 px-4 xl:px-[72px]">
        <h3 className="text-2xl xl:text-[40px] h-10 font-semibold overflow-clip">
          Request For Quotation List
        </h3>
        <p className="text-lg font-semibold xl:font-bold">Product Category</p>
        <div className=" ">
          <form action="" className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Select
              className="w-full z-50 sm:w-[309px] "
              onChange={(e) => {
                setFormData({
                  ...formData,
                  category: e?.label ? e.label : "",
                });
              }}
              defaultValue={{ label: "All", value: "All" }}
              value={{ label: formData.category, value: formData.category }}
              options={categoryOptions}
              placeholder="Please choose a category"
            />
            <div className="flex h-[47px]">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, category: "All" })}
                className="ml-3 sm:ml-7 bg-none border-agro-orange border h-full w-[130px] sm:w-[140px] font-medium text-agro-orange text-sm rounded-[44px]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <section className="relative mt-16 pb-20 pt-5 px-4   xl:px-[72px] z-[1] 2xl:w-[1450px] 2xl:mx-auto">
        <div className="h-full w-[100vw] absolute bg-agro-blue top-0 right-0  -z-[10]" />
        <h4 className="overflow-clip w-fit h-14 text-2xl xl:text-[40px] mb-[25px] font-semibold  text-agro-black z-[100]">
          Buyer Leads
        </h4>
        <div className="z-10 grid md:grid-cols-2 gap-x-3 xl:gap-x-5 gap-y-4 xl:gap-y-7  w-full">
          {buyerLeadsData.length > 0 ? (
            buyerLeadsData.map((item) => {
              return (
                <BuyerLeadsCard
                  id={item.id}
                  rfq_id={item.rfq_id}
                  key={item.rfq_id}
                  state={item.state}
                  category={item.category}
                  name={item.name}
                  quantity={item.quantity}
                  specs={item.description}
                  // time={item.created_at}
                />
              );
            })
          ) : (
            <p className="lg:text-2xl xl:text-4xl ">
              No requests for {formData.category}
            </p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Pages;
