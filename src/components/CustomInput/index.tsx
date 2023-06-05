"use client";

import React, { HTMLInputTypeAttribute, useMemo, useEffect } from "react";

type variantTypes = "normal" | "dashboard";
import useInput from "@/hooks/useInput";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: HTMLInputTypeAttribute;
  //   htmlFor: string;
  placeholder?: string;
  variant?: variantTypes;
  validation: (val: string) => boolean;
  handleValue: (val: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  //   htmlFor,
  type = "text",
  placeholder,
  variant = "normal",
  validation,
  handleValue,
  ...props
}) => {
  const {
    value: inputValue,
    hasError,
    reset,
    onFocusHandler,
    onBlurHandler,
    enteredInputHandler,
  } = useInput(validation);

  const { value, isTouched, lostFocus } = inputValue;

  useEffect(() => {
    handleValue(value);
  }, [value]);

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
        onChange={(e) => {
          enteredInputHandler(e);
        }}
        value={value}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        className={`${
          variant === "normal" ? "w-full sm:w-[309px]" : "w-full sm:w-[419px]"
        } ${
          isTouched
            ? "border-agro-yellow"
            : hasError
            ? " border-red-500 "
            : "border-gray2 "
        }  h-12 pl-3 rounded-[4px] bg-white border outline-none`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default CustomInput;
