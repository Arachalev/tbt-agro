"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  newArrivalsData,
  topRankingNavData,
  aboutUsNavData,
} from "@/store/DummyData/darkHeaderData";

const HeaderDark = () => {
  const path = usePathname();
  const newArrivalsPath = path === "/web/new-arrivals" ? true : false;
  const topRankingPath = path === "/web/top-ranking" ? true : false;

  return (
    <div className="h-20 sm:h-[166px] w-screen flex flex-col justify-center items-center sm:gap-11 bg-agro-black text-white">
      <h2 className=" text-agro-yellow text-2xl xl:text-[40px] font-semibold overflow-clip">
        {newArrivalsPath
          ? "New Arrivals"
          : topRankingPath
          ? "Top Ranking"
          : "Get to Know Us"}
      </h2>
      <ul className="flex gap-2 md:gap-6">
        {(newArrivalsPath
          ? newArrivalsData
          : topRankingPath
          ? topRankingNavData
          : aboutUsNavData
        ).map((item) => (
          <li key={item.href}>
            <button
              // href={""}
              // href={item.href}
              className={`${
                item.name === "All" ? "font-bold" : ""
              } text-[9px] sm:text-sm whitespace-nowrap`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderDark;
