import React from "react";

interface ProductTableProps {
  //   column: { title: string; width?: string; key: string }[];
  column: string[];

  //   object index signature || Record utility type Record<string,string>
  data: { [key: string]: string }[];
}

const ProductTable = ({ column, data }: ProductTableProps) => {
  //   data[0][column[0].title]

  //   const templateCol = [];
  //   column.forEach((item, index) => {
  //     if (item.width) {
  //       templateCol.push(item.width);
  //     }
  //   });

  const tableColumn = [];

  const indexColumn = (
    <div className="flex flex-col gap-6">
      <span className=" min-h-[30px]" />
      <ul className="gap-2 flex flex-col">
        {data.map((item, index) => (
          <li
            className="h-5 w-5 rounded-full bg-[#D4E6ED] overflow-hidden"
            key={item.key}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );

  tableColumn.push(indexColumn);

  column.forEach((item, index) => {
    const content = (
      <div key={index} className="border-1 flex flex-col gap-6 items-center">
        <h4 className="text-lg font-bold text-agro-green">{item}</h4>
        <ul className="flex flex-col gap-2 ">
          {data.map((da, ind) => {
            let colItem;
            if (da[item]) {
              colItem = da[item];
              //   console.log(colItem, "itemmmm");
            }
            return <li key={colItem}>{colItem}</li>;
          })}
        </ul>
      </div>
    );
    tableColumn.push(content);
  });

  //   console.log(tableColumn);
  const cols = column.length + 1;

  const style = `grid-cols-${cols}`;

  return (
    <div className="w-[987px] pt-[85px] pb-[55px] px-11  bg-white rounded-[10px]">
      <div className={`grid ${style} grid-flow-col`}>
        {/* {column.map((item) => (
          <h4 className="border-4" key={item}>
            {item}
          </h4>
        ))} */}
        {tableColumn.map((item) => item)}
      </div>
      <div></div>
    </div>
  );
};

export default ProductTable;
