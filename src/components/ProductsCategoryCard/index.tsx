import React from "react";
import { productCategoryData } from "@/store/DummyData/productsCategory";

interface ItemCardProps {
  name: string;
  Icon: React.FC;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, Icon }) => {
  return (
    <div className="flex gap-2 sm:gap-3 items-center">
      <span className="w-8">
        <Icon />
      </span>
      <p className="text-agro-green text-sm font-medium">{name}</p>
    </div>
  );
};

const ProductsCategoryCard = () => {
  return (
    <div className="bg-white  md:w-[210px]  md:h-[412px] py-4 px-5 rounded-[10px]  ">
      <h4 className="text-agro-black text-lg font-bold mb-5">Products</h4>
      <div className=" grid grid-cols-2 md:flex md:flex-col gap-4">
        {productCategoryData.map((item) => (
          <ItemCard name={item.name} Icon={item.Icon} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategoryCard;
