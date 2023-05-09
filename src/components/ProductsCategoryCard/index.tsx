import React from "react";
import { productCategoryData } from "@/store/DummyData/productsCategory";

interface ItemCardProps {
  name: string;
  Icon: React.FC;
}
const ItemCard: React.FC<ItemCardProps> = ({ name, Icon }) => {
  return (
    <div className="flex gap-5 items-center">
      <Icon />
      <p className="text-agro-green text-sm font-medium">{name}</p>
    </div>
  );
};

const ProductsCategoryCard = () => {
  return (
    <div className="bg-white w-[210px] h-[412px] py-4 px-5 rounded-[10px]  ">
      <h4 className="text-agro-black text-lg font-bold mb-5">Products</h4>
      <div className="flex flex-col gap-4">
        {productCategoryData.map((item) => (
          <ItemCard name={item.name} Icon={item.Icon} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategoryCard;
