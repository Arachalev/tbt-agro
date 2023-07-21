"use client";

import React from "react";
import { usePathname } from "next/navigation";
import DetailsCard from "./DetailsCard";
import InfoCard from "./InfoCard";
import { useGetOneProductQuery } from "@/store/redux/services/productsSlice/productsApiSlice";
import StatusModal from "@/components/Forms/StatusModal";

const ProductDetails = () => {
  const path = usePathname().split("/");

  // console.log(path);

  const { data, isLoading, error } = useGetOneProductQuery(path[3]);
  // console.log(data, error);

  const product: {
    name: string;
    location: string;
    user: { seller_id: string };
    unit: string;
    quantity: string;
    tbt_price: number;
    sale_price: number;
    category: { name: string };
    images: { image_url: string }[];
    id: number;
    minimum_purchase: number;
    description: string;
  } = data?.data;

  // console.log(product);

  return isLoading ? (
    <StatusModal
      onClose={function (): void {
        throw new Error("Function not implemented.");
      }}
      loading={isLoading}
    />
  ) : product ? (
    <div className="flex flex-col items-center gap-5 p-5">
      <DetailsCard
        id={product.id}
        img={product.images.length > 0 ? product.images[0].image_url : ""}
        sellerId={product.user.seller_id}
        name={`${product.name.toUpperCase()} - ${product.quantity}${
          product.unit
        }`}
        category={product.category.name}
        availableQuantity={`${product.quantity} ${product.unit}`}
        location={product.location}
        cost={`₦${product.tbt_price.toLocaleString()} / ${product.unit}`}
        minimumPurchase={product.minimum_purchase}
        ratings={3.5}
        ratingsAmount={2389}
      />
      <InfoCard
        productDetails={product.description}
        /**
         * "Cashew nuts are fruits that grow on tropical evergreen cashew trees. 
        The cashew nuts are usually processed into cashew kernels, cashew cheese or cashew butter.
         Nigeria is reported to be the 4th largest producer of RCN in the world, 
         growing the nuts in about 19 states of the country. Our RCN is good quality
          with the specifications below."
         * 
         * 
        //  */
        // specifications={{
        //   Origin: "Nigeria",
        //   "Nut Count": "(170 - 200)/Kg",
        //   "Out turn": "44 - 52 lbs/80Kg",
        //   "Defective nuts": "< 8%",
        //   "Moisture content": "< 8%",
        //   Admixture: "< 2%",
        //   "Float rate": "< 18%",
        //   Packing: "50kg pp bags net weight, 20ft container FCL (18mt)",
        // }}
      />
    </div>
  ) : (
    <div className="flex flex-col items-center gap-5 p-5">
      <h4 className="text-red-500 text-xl font-semibold">
        Error getting product
      </h4>
    </div>
  );
};

export default ProductDetails;
