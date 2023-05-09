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
      <InfoCard
        productDetails="Cashew nuts are fruits that grow on tropical evergreen cashew trees. 
        The cashew nuts are usually processed into cashew kernels, cashew cheese or cashew butter.
         Nigeria is reported to be the 4th largest producer of RCN in the world, 
         growing the nuts in about 19 states of the country. Our RCN is good quality
          with the specifications below."
        specifications={{
          Origin: "Nigeria",
          "Nut Count": "(170 - 200)/Kg",
          "Out turn": "44 - 52 lbs/80Kg",
          "Defective nuts": "< 8%",
          "Moisture content": "< 8%",
          Admixture: "< 2%",
          "Float rate": "< 18%",
          Packing: "50kg pp bags net weight, 20ft container FCL (18mt)",
        }}
      />
    </div>
  );
};

export default ProductDetails;
