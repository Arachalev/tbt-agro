import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  //   htmlFor: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  //   htmlFor,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div className=" grid grid-cols-2 items-center  gap-4">
      <label
        className="text-sm font-bold   justify-self-end text-end w-[200px]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-[309px] h-12 pl-3 rounded-[4px] bg-white border border-[#ABABAB]"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
