import React from "react";

import { BsCheckLg } from "react-icons/bs";

interface PackageHistoryProps {
  historyData: {
    title: string;
    date?: string;
    isCompleted: boolean;
  }[];
}

interface PackageHistoryItemProps {
  title: string;
  date?: string;
  isCompleted: boolean;
}
const PackageHistoryItem = ({
  title,
  date,
  isCompleted,
}: PackageHistoryItemProps) => {
  return (
    <li className="flex items-center gap-5 ">
      <span
        className={`h-[26px] w-[26px] rounded-full border-2 ${
          isCompleted ? "border-agro-green" : "border-gray2"
        } flex items-center justify-center`}
      >
        <BsCheckLg
          className={`${
            isCompleted ? "text-agro-green " : "text-gray2"
          } font-bold`}
        />
      </span>
      <div className="border border-gray2 rounded-[4px] py-3 pl-2 pr-5">
        <p className={`${isCompleted ? "text-agro-green " : "text-gray2"}`}>
          {title}
        </p>
        <p className="text-agro-black">{isCompleted ? date : null}</p>
      </div>
    </li>
  );
};

const PackageHistory = ({ historyData }: PackageHistoryProps) => {
  return (
    <div className="w-[967px] h-[571px] bg-white rounded-[10px] py-9 px-[65px]">
      <ul className="flex flex-col gap-5">
        {historyData.map((item) => (
          <PackageHistoryItem
            title={item.title}
            date={item.date}
            key={item.title}
            isCompleted={item.isCompleted}
          />
        ))}
        <li>
          {historyData.map((item, index) => {
            let contentStyle = "";

            if (item.title === "DELIVERED" && item.isCompleted === true) {
              contentStyle = "text-agro-green";
            } else {
              contentStyle = "text-gray2";
            }
            let content = (
              <p className={contentStyle}>Your item/order has been delivered</p>
            );

            return item.title === "DELIVERED" ? content : null;
          })}
        </li>
      </ul>
    </div>
  );
};

export default PackageHistory;
