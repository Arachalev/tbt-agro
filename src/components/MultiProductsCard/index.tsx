import React from "react";
import Image from "next/image";

import pro from "../../assets/images/product.png";

interface MultiProductsCardProps {
  title: string;
  products: {
    image: string;
    name: string;
    price: number;
    sellerID: string;
    location: string;
  }[];
}

const MultiProductsCard: React.FC<MultiProductsCardProps> = ({
  title,
  products,
}) => {
  return (
    <div className="p-5 rounded-[10px] bg-white w-full">
      <h4 className="text-lg  font-bold text-agro-black mb-3">{title}</h4>
      <div className=" grid grid-rows-2 grid-flow-col gap-4 w-fit  ">
        {products.map((item) => {
          return (
            <div key={item.sellerID}>
              <Image
                height={114}
                width={132}
                className=" rounded-[10px]"
                src={pro}
                alt=""
              />
              <h4 className="text-sm text-agro-black mt-[6px] ">{item.name}</h4>
              <h3 className=" font-bold text-sm my-1">{`₦ ${item.price}`}</h3>
              <p className=" text-[10px] text-[#ABABAB] font-medium">
                {item.sellerID}
              </p>
              <p className="text-[10px] text-agro-green font-medium">
                {item.location}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultiProductsCard;
