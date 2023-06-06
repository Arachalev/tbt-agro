import React from "react";

import Link from "next/link";
import Image from "next/image";

const NavProfile = ({
  profileData,
}: {
  profileData: { text: string; icon: string; href: string }[];
}) => {
  return (
    <div className="bg-white h-[158px] w-[200px] px-5 py-3 text-agro-black rounded-[4px]">
      <ul className="flex flex-col gap-4">
        {profileData.map((item) => (
          <li className="flex items-center gap-2" key={item.text}>
            <div className="w-5">
              <Image src={item.icon} alt={item.text} />
            </div>
            <Link className="text-sm font-medium" href={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavProfile;
