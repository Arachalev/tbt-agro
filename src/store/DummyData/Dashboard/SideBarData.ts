// Seller icons
import ProfileIcon from "@/components/Icons/ProfileIcon";
import OrderIcon from "@/components/Icons/OrderIcon";
import LogOutIcon from "@/components/Icons/LogOutIcon";
import SupportIcon from "@/components/Icons/SupportIcon";

import AccountIcon from "@/components/Icons/AccountIcon";


export const sellerBarData = [
  {
    Icon: ProfileIcon,
    name: "My Account",
    href: "account",
  },
  {
    Icon: OrderIcon,
    name: "Products",
    href: "products",
  },
  {
    Icon: OrderIcon,
    name: "Orders",
    href: "orders",
  },
  {
    Icon: SupportIcon,
    name: "Support",
    href: "support",
  },
  {
    Icon: ProfileIcon,
    name: "Payment Management",
    href: "payment-management",
  },
  {
    Icon: LogOutIcon,
    name: "Logout",
    href: "logout",
  },
];

export const buyerBarData = [
  {
    Icon: ProfileIcon,
    name: "My Account",
    href: "account",
  },
  {
    Icon: OrderIcon,
    name: "Orders",
    href: "orders",
  },
  {
    Icon: SupportIcon,
    name: "Support",
    href: "support",
  },
  {
    Icon: AccountIcon,
    name: "Account",
    href: "second-account",
  },
];
