import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import woosh from "../../../../public/images/wooshLogistics.svg";

const ShipingAndLogistics = () => {
  return (
    <div className="rounded-[10px] bg-white w-[966px] ">
      <div className="flex items-center justify-between pb-4 pt-6 px-8 border-b border-b-gray2 ">
        <div className="flex items-center gap-2">
          <FaRegCheckCircle className="text-agro-green text-xl  " />{" "}
          <p className="font-semibold text-agro-black">
            2. SHIPPING & LOGISTICS
          </p>
        </div>
        <button className="font-semibold text-agro-green">CHANGE</button>
      </div>
      <div className="px-8 pb-[70px] pt-1">
        <div className=" pl-8 mb-6 flex items-center justify-between   w-full">
          <div>
            <h4 className="font-bold">
              Where would you like your products to be delivered?
            </h4>
            <p className="text-sm mt-1">
              Receive quick quotation from our partners by filling the form
              below
            </p>
          </div>
          <Image src={woosh} alt="logistics" />
        </div>
        <div>
          <form action="" className="flex flex-col gap-6 text-agro-black">
            <div className="flex flex-col gap-6 ">
              <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div className="">
                  <label className="text-[10px] font-bold block">
                    Phone Number:
                  </label>
                  <div className="mt-1 flex items-center gap-4">
                    <input
                      className=" placeholder:text-[10px] text-[10px] w-[90px] h-8 pl-3 rounded-[4px] border border-gray2 bg-gray3"
                      type="text"
                      placeholder="+234"
                    />
                    <input
                      className=" placeholder:text-[10px] text-[10px] w-full h-8 pl-3 rounded-[4px] border border-gray2 bg-gray3"
                      type="text"
                      placeholder="08185622857"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Name of Product
                  </label>
                  <input
                    type="email"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Pick up or Product Location
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
                <div className=" col-span-2">
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Local Government Area
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
                <div className=" col-span-2">
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 grid-flow-col gap-5 items-center">
                <div className=" col-span-2">
                  <label
                    htmlFor=""
                    className="font-bold text-[10px] text-agro-black block"
                  >
                    Expected Delivery Date
                  </label>
                  <input
                    type="text"
                    className=" placeholder:text-[10px] text-[10px] w-full h-8 rounded-[4px] border border-gray2 bg-gray3 mt-1 px-5"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShipingAndLogistics;
