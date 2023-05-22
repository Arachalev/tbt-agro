import React from "react";

import AccountOverview from "@/components/Dashboard/AccountOverview";

const page = () => {
  return (
    <div className="pt-8 px-5 pb-40">
      <h4 className="mb-5 text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
        Account Overview
      </h4>
      <AccountOverview
        name={"Chris Morph"}
        email={"chris@gmail.com"}
        shippingAddress={{
          name: "Chris Morph",
          address: {
            street: "212 Lola",
            city: "Ikeja",
            state: "Lagos",
          },
          phone: "+234 8082654758",
        }}
      />
    </div>
  );
};

export default page;
