import getUniqueID from "@/hooks/getUniqueID";
import React from "react";

interface ProductTableProps {
  column: string[];

  //   object index signature || Record utility type Record<string,string>
  data: { [key: string]: string }[];
}

const ProductTable = ({ column, data }: ProductTableProps) => {
  const tableColumn = [];

  const indexColumn = (
    <div className="flex flex-col gap-[18px] ">
      <span className="h-[30px]" />
      <ul className="flex flex-col">
        {data.map((item, index) => (
          <li
            className=" border-r  flex items-center h-[50px] w-fit"
            key={getUniqueID()}
          >
            <span className="mr-5 h-5 w-5  text-xs flex items-center justify-center rounded-full bg-[#D4E6ED] overflow-hidden">
              {index + 1}
            </span>
          </li>
        ))}
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
            data.map((tableRowData) => {
              let colItem;
              if (tableRowData[item]) {
                colItem = tableRowData[item];
              }
              const statusStyle = `w-[86px] h-8 mt-1 rounded-[70px] flex items-center justify-center font-semibold ${
                tableRowData["Status"] === "Active"
                  ? "bg-[#D4E6ED]  text-agro-green"
                  : "text-white bg-[#f48924]/50 "
              } `;
              return (
                <li
                  className={`h-[50px] flex items-center justify-center`}
                  key={getUniqueID()}
                >
                  {/* ${item === "Status" ? statusStyle : ""} */}
                  {item === "Status" ? (
                    <span className={statusStyle}>{colItem}</span>
                  ) : (
                    colItem
                  )}

                  {/* {colItem} */}
                </li>
              );
            })
          ) : (
            <li>No Data</li>
          )}
        </ul>
      </div>
    );
    tableColumn.push(content);
  });

  //   const style = ` grid-cols-[50px]`;

  return (
    <div className="min-w-[967px] pt-[85px] pb-[55px] px-11  bg-white rounded-[10px]">
      <div className={`grid grid-cols-[50px] grid-flow-col min-w-[100%] `}>
        {/* {column.map((item) => (
          <h4 className="border-4" key={item}>
            {item}
          </h4>
        ))} */}
        {tableColumn.map((item) => (
          <div key={getUniqueID()}>{item}</div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProductTable;
