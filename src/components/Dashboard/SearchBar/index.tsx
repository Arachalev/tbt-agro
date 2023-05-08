import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Search:</label>
          <input
            className="w-[256px] bg-white border border-agro-gray h-10 rounded-[4px]"
            type="text"
          />
        </div>
        <div className={`flex flex-col gap-2`}>
          <label htmlFor="">Search:</label>
          <input
            className={`w-[256px] px-2   border border-agro-gray h-10 rounded-[4px]  `}
            type="date"
            placeholder="asasdsads"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Search:</label>
          <input
            className="w-[256px] bg-white border border-agro-gray h-10 rounded-[4px]"
            type="date"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
