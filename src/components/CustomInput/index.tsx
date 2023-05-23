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
    <div className="grid w-full sm:w-fit md:grid-cols-[200px_1fr] md:items-center gap-4">
      <label
        className={`text-sm ${
          variant === "normal" ? "text-agro-black" : "text-gray2 "
        } font-bold  md:justify-self-end md:text-end w-[200px]`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className={`${
          variant === "normal" ? "w-full sm:w-[309px]" : "w-full sm:w-[419px]"
        } h-12 pl-3 rounded-[4px] bg-white border border-gray2`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
