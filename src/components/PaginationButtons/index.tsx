import getUniqueID from "@/hooks/getUniqueID";
import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface PaginationProps {
  total: number;
  perPage: number;
  currentPage: number;
  nextPageHandler: () => void;
  previousPageHandler: () => void;
  getPageHandler: (id: number) => void;
}

const PaginationButtons: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  nextPageHandler,
  previousPageHandler,
  getPageHandler,
}) => {
  const lastPage = Math.ceil(total / perPage);
  return (
    <div className="  self-end  bg-white py-2 px-4 rounded-lg">
      <div className="flex items-center gap-2">
        <GrFormPrevious
          onClick={() => previousPageHandler()}
          className="cursor-pointer text-agro-green"
        />

        {currentPage > 2 && (
          <p
            onClick={() => getPageHandler(1)}
            key={getUniqueID()}
            className={`${"bg-white text-agro-green"} cursor-pointer h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
          >
            {1}
          </p>
        )}

        {currentPage > 2 && <AiOutlineEllipsis className="text-2xl" />}

        {currentPage > 1 && (
          <p
            onClick={() => getPageHandler(currentPage - 1)}
            key={getUniqueID()}
            className={`${"bg-white text-agro-green"} cursor-pointer h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
          >
            {currentPage - 1}
          </p>
        )}

        <p
          onClick={() => getPageHandler(currentPage)}
          key={getUniqueID()}
          className={`${"bg-agro-green text-white"} cursor-pointer  h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
        >
          {currentPage}
        </p>

        {lastPage > currentPage + 1 && (
          <p
            onClick={() => getPageHandler(currentPage + 1)}
            key={getUniqueID()}
            className={`${"bg-white text-agro-green"} cursor-pointer  h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
          >
            {currentPage + 1}
          </p>
        )}

        {lastPage > 2 && lastPage - currentPage > 2 && (
          <AiOutlineEllipsis className="text-2xl" />
        )}

        {lastPage > currentPage && (
          <p
            onClick={() => {
              // console.log(lastPage, "----");
              getPageHandler(lastPage);
            }}
            key={getUniqueID()}
            className={`${"bg-white text-agro-green"} cursor-pointer  h-7 w-7 border border-gray2 rounded-full flex items-center justify-center`}
          >
            {lastPage}
          </p>
        )}

        <GrFormNext
          onClick={() => nextPageHandler()}
          className="cursor-pointer ursor-not-allowed text-agro-green"
        />
      </div>
    </div>
  );
};

export default PaginationButtons;
