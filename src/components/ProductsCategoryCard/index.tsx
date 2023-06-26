import React from "react";
import { productCategoryData } from "@/store/DummyData/productsCategory";
import getUniqueID from "@/hooks/getUniqueID";
import Link from "next/link";
import Image from "next/image";

interface ItemCardProps {
  name: string;
  icon?: string;
  Icon?: React.FC;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, icon, Icon }) => {
  return (
    <Link
      href={`/web/home?category=${name}`}
      className="flex gap-2 sm:gap-3 items-center"
    >
      <span className="w-8">
        {/* <Image src={icon} height={20} width={20} alt={name} /> */}
        {Icon && <Icon />}
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
