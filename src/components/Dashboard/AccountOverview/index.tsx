import React from "react";

import EditIcon from "@/components/Icons/EditIcon";

interface AccountOverviewProps {
  name: string;
  email: string;
  shippingAddress: {
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
    };
    phone: string;
  };
}

const AccountOverview = ({
  name,
  email,
  shippingAddress,
}: AccountOverviewProps) => {
  return (
    <div className="2xl:w-[1077px] md:h-[322px] rounded-[10px] bg-white flex flex-col md:flex-row items-center gap-5 p-6 ">
      <div className=" w-full md:w-1/2 h-full border border-gray2 rounded-md ">
        <h4 className="text-agro-black px-10 pt-4 h-14">ACCOUNT DETAILS</h4>
        <div className=" border-t border-t-gray2 p-5 sm:p-10 ">
          <p className=" text-agro-green ">{name}</p>
          <p className="font-medium text-gray2 ">{email}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full border border-gray2 rounded-md overflow-clip ">
        <div className="flex items-center justify-between px-5 sm:px-10 h-14">
          <h4 className="text-agro-black ">ADDRESS BOOK</h4>
          <EditIcon />
        </div>
        <div className=" border-t border-t-gray2 p-5 sm:p-10  ">
          <p className="text-agro-green mb-6 ">
            Your default shipping address:
          </p>
          <div className="text-gray2 font-medium ">
            <p>{shippingAddress.name}</p>
            <p>{shippingAddress.address.street},</p>
            <p>
              {shippingAddress.address.city}, {shippingAddress.address.state}
            </p>
            <p>{shippingAddress.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;
