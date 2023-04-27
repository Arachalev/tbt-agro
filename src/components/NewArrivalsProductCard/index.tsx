import React from "react";

import Image from "next/image";
import { StaticImageData } from "next/image";

interface NewArrivalsProductCardProps {
  image: StaticImageData;
  name: string;
  price: number;
  sellerID: string;
  location: string;
}

const NewArrivalsProductCard: React.FC<NewArrivalsProductCardProps> = ({
  image,
  name,
  price,
  sellerID,
  location,
}) => {
  return (
    <div className="w-[200px] h-[272px]   ">
      <div className="w-full h-[169px] flex items-center justify-center bg-[#f6f6f6] rounded-t-[10px]">
        <Image className=" rounded-[10px]" src={image} alt={name} />
      </div>
      <div className="bg-white p-2 rounded-b-[10px]">
        <h4 className="text-sm text-agro-black mt-[6px] ">{name}</h4>
        <h3 className=" font-bold text-sm my-1">{`₦ ${price}`}</h3>
        <p className=" text-[10px] text-[#ABABAB] font-medium">{sellerID}</p>
        <p className="text-[10px] text-agro-green font-medium">{location}</p>
      </div>
    </div>
  );
};

export default NewArrivalsProductCard;
