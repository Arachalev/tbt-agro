import React from "react";

type ButtonVariants = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  onClick: () => any | unknown;
  variant?: ButtonVariants;
}

const PriButton: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  variant = "primary",
  ...props
}) => {
  let styling = ``;

  switch (variant) {
    case "primary": {
      styling = "bg-agro-yellow rounded-[4px] font-bold text-agro-black";
      break;
    }
    case "secondary": {
      styling =
        " border-agro-yellow border bg-white h-[47px] w-[175px] font-medium text-agro-yellow text-sm rounded-[44px]";
      break;
    }
  }
  return (
    <button {...props} onClick={onClick} className={`${className} ${styling} `}>
      {text}
    </button>
  );
};

export default PriButton;
