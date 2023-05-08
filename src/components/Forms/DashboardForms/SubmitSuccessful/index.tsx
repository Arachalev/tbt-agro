import React from "react";

import Image from "next/image";
import Link from "next/link";
import check from "../../../../../public/icons/check.svg";

const SubmitSuccessful = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-agro-black">
      <Image src={check} alt="check icon" />
      <h4 className="text-[40px] font-semibold mt-[70px] mb-5 ">Submitted Successfully</h4>
      <p className="text-center text-sm ">
        Welldone! Your form has been successfully received. Click the button
        below to go the <br/> dashboard.
      </p>
      <Link
        href=""
        className="text-agro-black font-bold text-xl bg-agro-yellow w-[171px] h-[50px] rounded-md flex items-center justify-center mt-10"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default SubmitSuccessful;
