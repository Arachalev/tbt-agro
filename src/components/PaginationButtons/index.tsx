import getUniqueID from "@/hooks/getUniqueID";
import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface PaginationProps {
  //   url: string;

  total: number;
  perPage: number;
  currentPage: number;
  // fetchData: () => void;
  // nextPageHandler: () => void;
  // previousPageHandler: () => void;
  // getPageHandler: (id: number) => void;
}

const PaginationButtons: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  // nextPageHandler,
  // previousPageHandler,
  // getPageHandler,
}) => {
  const btnAmount = new Array(Math.ceil(total / perPage)).fill("");

  // console.log(btnAmount);
  return (
    <div className="  self-end  bg-white py-2 px-4 rounded-lg">
      <div className="flex items-center gap-2">
        <GrFormPrevious
          // onClick={() => previousPageHandler()}
          className="cursor-pointer text-agro-green"
        />

        {currentPage - 1 !== 0 && (
          <p
            // onClick={() => getPageHandler(index)}
            key={getUniqueID()}
            className={`${"bg-white text-agro-green"} cursor-pointer h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
          >
            {currentPage - 1}
          </p>
        )}

        <p
          // onClick={() => getPageHandler(index)}
          key={getUniqueID()}
          className={`${"bg-agro-green text-white"} cursor-pointer  h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
        >
          {currentPage}
        </p>

        {btnAmount.length > 2 && total / perPage - currentPage > 1 && (
          <AiOutlineEllipsis className="text-2xl" />
        )}

        {total / perPage !== currentPage && (
          <p
            // onClick={() => getPageHandler(index)}
            key={getUniqueID()}
            className={`${"bg-white text-agro-green"} cursor-pointer  h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
          >
            {total / perPage}
          </p>
        )}

        <GrFormNext
          // onClick={() => nextPageHandler()}
          className="cursor-pointe cursor-not-allowed text-agro-green"
        />
      </div>
    </div>
  );
};

export default PaginationButtons;
