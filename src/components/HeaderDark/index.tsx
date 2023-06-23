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

  const newArrivalsPath = path.includes("/web/new-arrivals") ? true : false;
  const topRankingPath = path === "/web/top-ranking" ? true : false;
  const aboutPath = path.includes("/web/about-us") ? true : false;

  return (
    <div className="h-20 sm:h-[166px] w-screen flex flex-col justify-center items-center sm:gap-11 bg-agro-black text-white">
      <h2 className=" text-agro-yellow text-2xl xl:text-[40px] font-semibold overflow-cli">
        {newArrivalsPath
          ? "New Arrivals"
          : topRankingPath
          ? "Top Ranking"
          : "Get to Know Us"}
      </h2>
      <ul className="flex gap-2 md:gap-6">
        {/* {(topRankingPath ? topRankingNavData : aboutUsNavData).map((item) => ( */}
        {aboutPath &&
          aboutUsNavData.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  item.name === "All" ? "font-bold" : ""
                } text-[9px] sm:text-sm whitespace-nowrap`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        {newArrivalsPath &&
          newArrivalsData.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  item.key === path.split("/")[3] ||
                  (item.name === "All" && !path.split("/")[3])
                    ? "font-bold"
                    : ""
                } text-[9px] sm:text-sm whitespace-nowrap`}
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HeaderDark;
