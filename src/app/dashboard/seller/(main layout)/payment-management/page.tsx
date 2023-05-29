import React from "react";

const page = () => {
  return (
    <div className="p-4 sm:p-8 xl:p-[72px]   ">
      <div className="mt-10 2xl:w-[1300px] 2xl:mx-auto">
        <h4 className="pb-4 md:pb-8  text-xl md:text-2xl xl:text-3xl text-agro-green font-semibold overflow-clip">
          Payment Details
        </h4>
        <div>
          <form
            action=""
            className="bg-white border-4 w-full 2xl:w-fit rounded-[10px] px-4 pt-4 pb-16 text-agro-black"
          >
            <p className="text-sm font-bold mb-4 md:mb-9">
              Fill in your account details
            </p>
            <div className="flex flex-col  md:flex-row gap-4 md:gap-8 items-center  ">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Bank Name</label>
                <input
                  type="text"
                  className="w-[256px] md:w-full xl:w-[256px] 2xl:w-[350px] h-[41px] border-gray2 border rounded-[4px] "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Account Number</label>
                <input
                  type="text"
                  className="w-[256px] md:w-full xl:w-[256px] 2xl:w-[350px]  h-[41px] border-gray2 border rounded-[4px] "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Name on Account</label>
                <input
                  type="text"
                  className="w-[256px]  md:w-full xl:w-[256px] 2xl:w-[350px]  h-[41px] border-gray2 border rounded-[4px] "
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
