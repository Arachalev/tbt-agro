import React from "react";

import Link from "next/link";
import { CgArrowLongLeft } from "react-icons/cg";
import OrderDetails from "@/components/Dashboard/OrderDetails";


const Page = ({ params }: { params: { id: string } }) => {
   
  return (
    <div className="pt-8 px-5 pb-40">
      <div className="flex items-center gap-4 mb-5">
        <Link
          className="flex items-center gap-1 text-agro-orange"
          href="/dashboard/buyer/orders"
        >
          <CgArrowLongLeft /> <p className="text-sm font-medium">Back</p>
        </Link>
        <h4 className=" text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          Order Details
        </h4>
      </div>
      <div>
        <OrderDetails
          id={"ASA15641A"}
          amount={3}
          cost={"N700,000"}
          date={"15-05-2023"}
          orderItems={[
            {
              img: "https://picsum.photos/200/300",
              name: "Raw Cashew Nuts ",
              amount: "30,000KG",
              id: "12W321SSDS",
              deliveryDate: "31-05-2022",
              isReturnable: false,
              cost: "500,000",
              returnDate: "12-02-2023",
              quantity: 1,
            },
            {
              img: "https://picsum.photos/200/300",
              name: "Raw Cashew Nuts ",
              amount: "30,000KG",
              id: "12W32lgSDS",
              deliveryDate: "31-05-2022",
              isReturnable: true,
              cost: "500,000",
              returnDate: "12-06-2023",
              quantity: 1,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
