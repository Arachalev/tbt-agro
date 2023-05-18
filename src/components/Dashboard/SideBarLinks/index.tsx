import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideBarLinkProps {
  Icon: React.FC<{ stroke?: string }>;
  name: string;
  href: string;
}

const SideBarLink = ({ Icon, name, href }: SideBarLinkProps) => {
  const pathArr = usePathname().trim().split("/");
  // console.log(pathArr[3], href);

  const isCurrentPath = pathArr[3] === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-5 ${
        isCurrentPath ? "text-agro-orange font-semibold" : ""
      }`}
    >
      <Icon stroke={isCurrentPath ? "#F48924" : "#1A1A1A"} />
      <span className="text-sm">{name}</span>
    </Link>
  );
};

export default SideBarLink;
