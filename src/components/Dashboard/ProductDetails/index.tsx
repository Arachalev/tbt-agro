import React from "react";

import DetailsCard from "./DetailsCard";
import InfoCard from "./InfoCard";

const ProductDetails = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <DetailsCard
        img={"https://picsum.photos/300/350"}
        sellerId={"S154AS"}
        name={"RAW CASHEW NUTS – 30,000KG"}
        category={"Crop Products"}
        availableQuantity={"50 MT"}
        location={"Ogbomosho, Oyo State."}
        cost={"₦700,000 / MT"}
        minimumPurchase={"5,000Kg"}
        ratings={3.5}
        ratingsAmount={2389}
      />
      <InfoCard />
    </div>
  );
};

export default ProductDetails;
