import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  onClick: () => any | unknown;
}

const PriButton: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${className} bg-agro-yellow rounded-[4px] font-bold text-agro-black`}
    >
      {text}
    </button>
  );
};

export default PriButton;
