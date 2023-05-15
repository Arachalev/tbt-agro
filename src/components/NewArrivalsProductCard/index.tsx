import React from "react";

import Image from "next/image";
import { StaticImageData } from "next/image";

interface NewArrivalsProductCardProps {
  image: string;
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
    <div className="w-[200px] h-[272px] rounded-[10px] overflow-clip">
      <div className="w-full h-[169px] flex items-center justify-center bg-[#f6f6f6] rounded-t-[10px]">
        <Image
          className=" rounded-[10px] w-[130px] h-[115px] object-cover"
          width={130}
          height={115}
          src={image}
          alt={name}
        />
      </div>
      <div className="bg-white h-full p-2 rounded-b-[10px]">
        <h4 className="text-lg text-agro-black leading-none overflow-clip">
          {name}
        </h4>
        <h3 className=" font-bold text-lg my-1">{`₦ ${price}`}</h3>
        <p className=" text-sm text-[#ABABAB] font-medium leading-none overflow-clip">
          {sellerID}
        </p>
        <p className="text-sm text-agro-green font-medium">{location}</p>
      </div>
    </div>
  );
};

export default NewArrivalsProductCard;
