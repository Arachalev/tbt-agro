import React from "react";

// import Router from "next/router";

// import { useRouter } from "next/router";

import { useRouter } from "next/navigation";
import Link from "next/link";

interface SideBarLinkProps {
  Icon: React.FC;
  name: string;
  href: string;
}

const SideBarLink = ({ Icon, name, href }: SideBarLinkProps) => {
  return (
    <Link href={href} className="flex items-center gap-5 ">
      <Icon /> <span className="text-sm">{name}</span>
    </Link>
  );
};

export default SideBarLink;
