import React, { HTMLInputTypeAttribute } from "react";

type variantTypes = "normal" | "dashboard";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: HTMLInputTypeAttribute;
  //   htmlFor: string;
  placeholder: string;
  variant?: variantTypes;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  //   htmlFor,
  type = "text",
  placeholder,
  variant = "normal",
  ...props
}) => {
  return (
    <div className=" grid grid-cols-2 items-center  gap-4">
      <label
        className={`text-sm ${
          variant === "normal" ? "text-agro-black" : "text-gray2 "
        } font-bold justify-self-end text-end w-[200px]`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`${
          variant === "normal" ? "w-[309px]" : "w-[419px]"
        } h-12 pl-3 rounded-[4px] bg-white border border-gray2`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
