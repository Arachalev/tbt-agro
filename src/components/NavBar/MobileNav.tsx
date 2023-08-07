import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillBellFill } from "react-icons/bs";

import Cart from "../Cart";
import logo from "../../assets/logo/logo1.png";
import SideBar from "./SideBar";
import NavProfile from "../NavProfile";
import SellerNav from "./SellerNav";
import { useAppDispatch, useAppSelector } from "@/store/redux/hooks";
import {
  addToCart,
  selectCart,
} from "@/store/redux/services/cartSlice/cartSlice";
import {
  updateProductCategory,
  selectProductsCategory,
} from "@/store/redux/features/productsCategory";

import { useGetCartItemsQuery } from "@/store/redux/services/cartSlice/cartApiSlice";
import { useGetCategoriesQuery } from "@/store/redux/services/categorySlice/categoryApiSlice";
import { productCategoryData } from "@/store/DummyData/productsCategory";
import getUniqueID from "@/hooks/getUniqueID";
import { ItemCard } from "../ProductsCategoryCard";

const MobileNav = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showNavProfile, setShowNavProfile] = useState(false);

  const { data: cartData } = useGetCartItemsQuery("");

  const pathArr = usePathname().trim().split("/");
  const router = useRouter();

  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const reduxProductsCategory = useAppSelector(selectProductsCategory);

  const { data: categories } = useGetCategoriesQuery("");

  useEffect(() => {
    dispatch(addToCart(cartData?.data));
  }, [cartData, dispatch]);

  useEffect(() => {
    if (categories?.data) {
      const categoryLinks = categories.data.map((item: any) => ({
        name: item.name,
        icon: item.icon,
        id: item.id,
      }));

      dispatch(updateProductCategory(categoryLinks));
    }
  }, [categories?.data, dispatch]);

  const seller = pathArr[2] === "seller";

  

  return seller ? (
    <SellerNav />
  ) : (
    <nav>
      {showSideBar && (
        <SideBar
          closePanel={() => {
            setShowSideBar(false);
          }}
        />
      )}
      {/* {showNavProfile && (
        <div className=" fixed top-0 right-0 w-screen h-screen flex items-center justify-center bg-gray-400/50 z-[100]">
          <NavProfile
            hideSettings={() => {
              setShowSettings(false);
            }}
          />
        </div>
      )} */}
      <div className="bg-agro-green h-16 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2">
          <span
            onClick={() => {
              setShowSideBar(true);
            }}
          >
            <RxHamburgerMenu className="text-lg text-white " />
          </span>

          <Link href="/web/home" className="w-[30px] h-[16px] relative">
            <Image src={logo} className="h-full" alt="logo" />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {/* <BsFillPersonFill
            onClick={() => router.push("/dashboard/buyer/account")}
            className="text-white text-lg"
          /> */}
          <BsFillBellFill className="text-white" />
          <Link
            href="/dashboard/buyer/shopping-cart"
            className=" flex items-center relative text-sm h-8"
          >
            <Cart /> <p className="text-white ">Cart</p>
            <span className="absolute top-0  left-2 text-agro-yellow font-medium">
              {cart?.product ? cart.product.length : 0}
            </span>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto px-4  sm:hidden bg-agro-yellow h-14 flex items-center gap-3">
        {productCategoryData.map((item) => (
          <ItemCard
            name={item.name}
            variant="mobile"
            Icon={item.Icon}
            key={getUniqueID()}
          />
        ))}
        {/* {reduxProductsCategory.map((item) => (
          <ItemCard name={item.name} Icon={item.Icon} key={getUniqueID()} />
        ))} */}
      </div>
 
    </nav>
  );
};

export default MobileNav;
