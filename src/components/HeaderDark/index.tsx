"use client";
import React from "react";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  newArrivalsData,
  topRankingNavData,
  aboutUsNavData,
} from "@/store/DummyData/darkHeaderData";

const HeaderDark = () => {
  const router = useRouter();
  const path = usePathname();
  const newArrivalsPath = path === "/web/new-arrivals" ? true : false;
  const topRankingPath = path === "/web/top-ranking" ? true : false;

  return (
    <div className="h-[166px] w-screen flex flex-col justify-center items-center gap-11 bg-agro-black text-white">
      <h2 className=" text-agro-yellow text-[40px] font-semibold">
        {newArrivalsPath
          ? "New Arrivals"
          : topRankingPath
          ? "Top Ranking"
          : "Get to Know Us"}
      </h2>
      <ul className="flex gap-6">
        {(newArrivalsPath
          ? newArrivalsData
          : topRankingPath
          ? topRankingNavData
          : aboutUsNavData
        ).map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${item.name === "All" ? "font-bold" : ""} text-sm `}
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
