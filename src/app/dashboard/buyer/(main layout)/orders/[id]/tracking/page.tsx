import React from "react";

import Link from "next/link";
import PackageHistory from "@/components/Dashboard/PackageHistory";

import { CgArrowLongLeft } from "react-icons/cg";
import { packageHistoryData } from "@/store/DummyData/Dashboard/packageHistoryData";
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
          Package History
        </h4>
      </div>
      <div>
        <PackageHistory historyData={packageHistoryData} />
      </div>
    </div>
  );
};

export default Page;
