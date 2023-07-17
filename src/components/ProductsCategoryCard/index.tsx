"use client";
import React from "react";
import { productCategoryData } from "@/store/DummyData/productsCategory";
import getUniqueID from "@/hooks/getUniqueID";
import Link from "next/link";
// import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BsCheckLg } from "react-icons/bs";
import { useEffect } from "react";

interface ItemCardProps {
  name: string;
  icon?: string;
  Icon?: React.FC;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, icon, Icon }) => {
  const search = useSearchParams();
  const category = search.get("category");

  let href = `/web/home?category=${name}`;

  if (name === "All Categories") {
    href = `/web/home`;
  }

  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }, [search]);

  return (
    <Link
      href={href}
      className={`flex gap-2 ${category ? "" : "sm:gap-3"} items-center`}
    >
      <span className={`${category ? "" : "w-8"}`}>
        {/* <Image src={icon} height={20} width={20} alt={name} /> */}
        {Icon && !category && <Icon />}
        {category && (
          <div className="bg-white h-4 w-4 rounded-[2px] border-gray2 border flex items-center justify-center">
            {category === name && (
              <BsCheckLg className="text-sm text-agro-green" />
            )}
          </div>
        )}
      </span>
      <p className="text-agro-green text-sm font-medium">{name}</p>
    </Link>
  );
};

const ProductsCategoryCard = ({
  productsCategoryData,
}: {
  productsCategoryData: { name: string; icon: string }[];
}) => {
  return (
    <div className="bg-white  md:w-[210px]  md:h-[412px] py-4 px-5 rounded-[10px]  ">
      <h4 className="text-agro-black text-lg font-bold mb-5">Products</h4>
      <div className=" grid grid-cols-2 md:flex md:flex-col gap-4">
        {productCategoryData.map((item) => (
          <ItemCard name={item.name} Icon={item.Icon} key={getUniqueID()} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategoryCard;
