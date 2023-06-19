// Seller icons
import ProfileIcon from "@/components/Icons/ProfileIcon";
import OrderIcon from "@/components/Icons/OrderIcon";
import LogOutIcon from "@/components/Icons/LogOutIcon";
import SupportIcon from "@/components/Icons/SupportIcon";
import DashboardIcon from "@/components/Icons/DashboardIcon";

import AccountIcon from "@/components/Icons/AccountIcon";

export const sellerBarData = [
  {
    Icon: DashboardIcon,
    name: "Dashboard",
    href: "/dashboard/seller/account",
  },
  // {
  //   Icon: OrderIcon,
  //   name: "Products",
  //   href: "/dashboard/seller/products",
  // },
  {
    Icon: OrderIcon,
    name: "Orders",
    href: "/dashboard/seller/orders",
  },
  // {
  //   Icon: SupportIcon,
  //   name: "Support",
  //   href: "/dashboard/seller/support",
  // },
  {
    Icon: ProfileIcon,
    name: "Payment Management",
    href: "/dashboard/seller/payment-management",
  },
  {
    Icon: AccountIcon,
    name: "My Account",
    href: "/dashboard/seller/seller-information",
  },
  {
    Icon: LogOutIcon,
    name: "Logout",
    href: "/dashboard/seller/logout",
  },
];

export const buyerBarData = [
  {
    Icon: ProfileIcon,
    name: "My Account",
    href: "/dashboard/buyer/account",
  },
  {
    Icon: OrderIcon,
    name: "Orders",
    href: "/dashboard/buyer/orders",
  },
  {
    Icon: SupportIcon,
    name: "Support",
    href: "/dashboard/buyer/support",
  },
  // {
  //   Icon: AccountIcon,
  //   name: "Account",
  //   href: "/dashboard/buyer/overview",
  // },
];
