import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface SideBarLinkProps {
  Icon?: React.FC<{ stroke?: string }>;
  name: string;
  href: string;
  showLinks: boolean;
}

const SideBarLink = ({ Icon, name, href, showLinks }: SideBarLinkProps) => {
  const pathArr = usePathname().trim().split("/");

  const hrefArr = href.split("/");


  const isCurrentPath = pathArr[3] === hrefArr[3];


  return (
    <Link
      href={href}
      className={`flex items-center gap-5 ${
        isCurrentPath ? "text-agro-orange font-semibold" : ""
      }`}
    >
      {Icon && <Icon stroke={isCurrentPath ? "#F48924" : "#1A1A1A"} />}
      {showLinks && <div className="text-sm">{name}</div>}
    </Link>
  );
};

export default SideBarLink;
