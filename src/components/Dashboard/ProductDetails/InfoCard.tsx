import React from "react";

interface InforCardProps {
  productDetails: string;
  specifications?: {
    [key: string]: string;
  };
}

const InfoCard = ({ productDetails, specifications }: InforCardProps) => {
  let specificationKeys;
  if (specifications) {
    specificationKeys = Object.keys(specifications);
  }
  return (
    <div className=" xl:w-[857px] p-5 sm:p-10 bg-white rounded-[10px]">
      <div>
        <h4 className="font-semibold text-sm ">Product Details: </h4>
        <p className="text-sm mt-2 w-[90%]">{productDetails}</p>
      </div>
      {specifications && (
        <div className="mt-5">
          <h4 className="font-semibold text-sm "> Specifications:</h4>
          <ul className="flex flex-col gap-1 mt-5">
            {specificationKeys &&
              specificationKeys.map((item) => (
                <li className="flex items-center gap-7" key={item}>
                  <div className="bg-black h-2 w-2 rounded-full" />
                  <p className=" font-semibold text-sm ">
                    {item}:{" "}
                    <span className=" font-normal ">
                      {specifications && specifications[item]}
                    </span>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
