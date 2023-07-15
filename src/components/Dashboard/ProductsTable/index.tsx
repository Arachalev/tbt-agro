import PaginationButtons from "@/components/PaginationButtons";
import getUniqueID from "@/hooks/getUniqueID";
import React, { useEffect, useState } from "react";

interface ProductTableProps {
  column: string[];

  //   object index signature || Record utility type Record<string,string>
  data: { [key: string]: string }[];
}

const ProductTable = ({ column, data = [] }: ProductTableProps) => {
  const [pagination, setPagination] = useState({
    lastPage: Math.ceil(data.length / 10),
    currentPage: 2,
    // nextPage: 0,
  });

  // to update the pagination state when data is finally loaded
  useEffect(() => {
    setPagination((state) => ({
      ...state,
      lastPage: Math.ceil(data.length / 10),
    }));
  }, [data]);

  // scroll to top whenever table changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pagination]);

  const isLastPage = pagination.lastPage === pagination.currentPage;
  const isFirstPage = pagination.currentPage === 1;

  const nextPageHandler = () => {
    if (!isLastPage) {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage + 1,
      });
    }
  };

  const prevPageHandler = () => {
    if (!isFirstPage) {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage - 1,
      });
    }
  };
  const getPageHandler = (id: number) => {
    if (id <= pagination.lastPage) {
      setPagination({
        ...pagination,
        currentPage: id,
      });
    }
  };

  console.log(pagination.currentPage, pagination.lastPage);

  const tableColumn = [];

  const indexColumn = (
    <div className="flex flex-col gap-[18px] ">
      <span className="h-[30px]" />
      <ul className="flex flex-col">
        {data.map((item, index) => {
          const isFirstPage = pagination.currentPage === 1;

          if (isFirstPage && index < 10) {
            return (
              <li
                className=" border-r  flex items-center h-[50px] w-fit"
                key={getUniqueID()}
              >
                <span className="mr-5 h-5 w-5  text-xs flex items-center justify-center rounded-full bg-[#D4E6ED] overflow-hidden">
                  {index + 1}
                </span>
              </li>
            );
          } else if (
            pagination.currentPage > 1 &&
            index >= pagination.currentPage * 10 - 10 &&
            index <= pagination.currentPage * 10 - 1
          ) {
            return (
              <li
                className=" border-r  flex items-center h-[50px] w-fit"
                key={getUniqueID()}
              >
                <span className="mr-5 h-5 w-5  text-xs flex items-center justify-center rounded-full bg-[#D4E6ED] overflow-hidden">
                  {index + 1}
                </span>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );

  tableColumn.push(indexColumn);

  column.forEach((item, index) => {
    const content = (
      <div
        key={`${item.length * index} ${item}`}
        className=" flex flex-col gap-6 items-center"
      >
        <h4 className="text-lg font-bold text-agro-green h-[30px]">{item}</h4>
        <ul className="flex flex-col ">
          {data.length > 0 ? (
            data.map((tableRowData, index) => {
              let colItem;

              if (tableRowData[item]) {
                colItem = tableRowData[item];
              }
              const statusStyle = `w-[86px] h-8 mt-1 rounded-[70px] flex items-center justify-center font-semibold ${
                tableRowData["Status"] === "Approved"
                  ? "bg-[#D4E6ED] text-agro-green"
                  : "text-white bg-[#f48924]/50"
              } `;
              const isFirstPage = pagination.currentPage === 1;

              if (isFirstPage && index < 10) {
                return (
                  <li
                    className={`h-[50px] flex items-center justify-center`}
                    key={getUniqueID()}
                  >
                    {item === "Status" ? (
                      <span className={statusStyle}>{colItem}</span>
                    ) : (
                      colItem
                    )}
                  </li>
                );
              } else if (
                pagination.currentPage > 1 &&
                index >= pagination.currentPage * 10 - 10 &&
                index <= pagination.currentPage * 10 - 1
              ) {
                return (
                  <li
                    className={`h-[50px] flex items-center justify-center`}
                    key={getUniqueID()}
                  >
                    {item === "Status" ? (
                      <span className={statusStyle}>{colItem}</span>
                    ) : (
                      colItem
                    )}
                  </li>
                );
              }
            })
          ) : (
            <li>No Data</li>
          )}
        </ul>
      </div>
    );
    tableColumn.push(content);
  });

  return (
    <div className="min-w-[967px] pt-[85px] pb-[55px] px-11  bg-white rounded-[10px]">
      <div className={`grid grid-cols-[50px] grid-flow-col min-w-[100%] `}>
        {tableColumn.map((item) => (
          <div key={getUniqueID()}>{item}</div>
        ))}
      </div>
      <div className=" flex justify-end ">
        <div className="">
          <PaginationButtons
            nextPageHandler={nextPageHandler}
            previousPageHandler={prevPageHandler}
            getPageHandler={getPageHandler}
            total={data.length}
            perPage={10}
            currentPage={pagination.currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
