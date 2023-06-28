import getUniqueID from "@/hooks/getUniqueID";
import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface PaginationProps {
  //   url: string;

  total: number;
  perPage: number;
  currentPage: number;
  //   fetchData: () => void;
}

const PaginationButtons: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
}) => {
  const btnAmount = new Array(Math.ceil(total / perPage)).fill("");

  console.log(btnAmount);
  return (
    <div className="  self-end  bg-white py-2 px-4 rounded-lg">
      <div className="flex items-center gap-2">
        <GrFormPrevious className="cursor-pointer text-agro-green" />
        {btnAmount.map((item, index) => {
          const isCurrent = index + 1 === currentPage;
          if (index < 2) {
            return (
              <p
                key={getUniqueID()}
                className={`${
                  isCurrent
                    ? "bg-agro-green text-white"
                    : "bg-white text-agro-green"
                }  h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
              >
                {index + 1}
              </p>
            );
          }
        })}

        {btnAmount.length > 2 && <AiOutlineEllipsis className="text-2xl" />}
        {btnAmount.map((item, index) => {
          const isCurrent = index + 1 === currentPage;
          if (index > 2) {
            return (
              <p
                key={getUniqueID()}
                className={`${
                  isCurrent
                    ? "bg-agro-green text-white"
                    : "bg-white text-agro-green"
                }  h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
              >
                {index + 1}
              </p>
            );
          }
        })}
        <GrFormNext className="cursor-pointer text-agro-green" />
      </div>
    </div>
  );
};

export default PaginationButtons;
