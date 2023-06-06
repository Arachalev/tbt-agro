import dashboard from "../../../public/icons/navProfile/dashboard.svg";
import profile from "../../../public/icons/navProfile/profile.svg";
import orders from "../../../public/icons/navProfile/orders.svg";
import logout from "../../../public/icons/navProfile/logout.svg";

export const navProfileData = [
  {
    icon: dashboard,
    text: "Dashboard",
    href: "/dashboard/buyer/account",
  },
  {
    icon: profile,
    text: "Account",
    href: "/dashboard/buyer/edit-profile",
  },
  {
    icon: orders,
    text: "Orders",
    href: "/dashboard/buyer/orders",
  },
  {
    icon: logout,
    text: "Logout",
    href: "/dashboard/buyer/logout",
  },
];

export const sellerProfileData = [
  {
    icon: dashboard,
    text: "Dashboard",
    href: "/dashboard/seller/account",
  },
  {
    icon: profile,
    text: "Account",
    href: "/dashboard/seller/account",
  },
  {
    icon: orders,
    text: "Orders",
    href: "/dashboard/seller/orders",
  },
  {
    icon: logout,
    text: "Logout",
    href: "/dashboard/seller/logout",
  },
];
 
