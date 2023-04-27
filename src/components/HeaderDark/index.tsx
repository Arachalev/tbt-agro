import React from "react";

import Link from "next/link";
import { newArrivalsData } from "@/store/DummyData/darkHeaderData";

const HeaderDark = () => {
  return (
    <div className="h-[166px] w-screen flex flex-col justify-center items-center gap-11 bg-agro-black text-white">
      <h2 className=" text-agro-yellow text-[40px] font-semibold">
        New Arrivals
      </h2>
      <ul className="flex gap-6">
        {newArrivalsData.map((item) => (
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
