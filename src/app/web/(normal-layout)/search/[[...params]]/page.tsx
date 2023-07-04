"use client";
import React, { useEffect, useState } from "react";

import { useSearchProductsMutation } from "@/store/redux/services/searchSlice/searchApiSlice";
import StatusModal from "@/components/Forms/StatusModal";
import isFetchBaseQueryErrorType from "@/store/redux/fetchErrorType";
import { useSearchParams } from "next/navigation";
import MultiProductsCard from "@/components/MultiProductsCard";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const [searchProduct, { isLoading, data, error }] =
    useSearchProductsMutation();

  const path = useSearchParams();

  let params = "";

  params = path.get("params")!;

  let errorMessage = "";

  if (error) {
    errorMessage = isFetchBaseQueryErrorType(error);
  }

  const handleSearch = async () => {
    setShowModal(true);
    const res = await searchProduct({ input: params });

    res && setShowModal(false);
    // console.log(res);
  };

  useEffect(() => {
    handleSearch();
  }, [params]);

  // console.log(data?.data?.data);

  let resultsData: any[] = [];

  if (data) {
    data?.data?.data.map(
      (item: {
        images: { image_url: string }[];
        name: string;
        sale_price: number;
        user: { seller_id: string };
        location: string;
        id: number;
        category: { name: string };
      }) =>
        resultsData.push({
          image: item.images[0] ? item.images[0].image_url : "",
          name: item.name,
          price: item.sale_price,
          sellerID: item.user.seller_id,
          location: item.location,
          id: item.id,
          category: item.category,
        })
    );
  }
  // console.log(resultsData[0]);

  return (
    <div className="min-h-[100vh] py-12 bg-agro-body">
      {showModal && (
        <StatusModal
          onClose={() => setShowModal(false)}
          loading={isLoading}
          error={error ? errorMessage : ""}
          data={data ? data?.message : ""}
          dataFunc={() => {
            setShowModal(false);
            // setOpenShipping(false);
          }}
        />
      )}
      <div className=" px-4 xl:px-[70px] ">
        <div className="mb-4">
          <h4 className="inline  text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
            Search results for :
          </h4>{" "}
          <span className="text-lg md:text-xl xl:text-2xl">{`"${params}"`}</span>
        </div>
        <div className="m-auto  grid justify-center justify-items-center md:grid-cols-4 gap-3 md:gap-5  w-full  2xl:w-[1400px] h-full">
          {/* {resultsData && */}

          {resultsData.length > 0 && resultsData.slice(0, 6).length > 0 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={resultsData[1]?.category?.name}
                products={resultsData.slice(0, 8)}
                type="cropProducts"
              />
            </div>
          )}
          {resultsData.length > 0 && resultsData.slice(8, 16).length > 0 && (
            <div className="col-span-4 md:col-span-2 w-full ">
              <MultiProductsCard
                title={resultsData[1]?.category?.name}
                products={resultsData.slice(8, 16)}
                type="cropProducts"
              />
            </div>
          )}

          {/* } */}
        </div>
      </div>
    </div>
  );
};

export default Page;
