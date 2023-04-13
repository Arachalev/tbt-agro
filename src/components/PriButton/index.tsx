import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  onClick: () => any | unknown;
}

const PriButton: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button onClick={() => onClick()} className={`${className} bg-agro-yellow rounded-[4px] font-bold text-agro-black`}>
      {text}
    </button>
  );
};

export default PriButton;
