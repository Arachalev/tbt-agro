import React from "react";

type starVariants = "sm" | "base";

interface StarProps {
  fill?: string;
  variant?: starVariants;
}

const Star: React.FC<StarProps> = ({ fill = "#4C6538", variant = "base" }) => {
  return (
    <svg
      width={variant === "base" ? "32" : "22"}
      height={variant === "base" ? "31" : "22"}
      viewBox={variant === "base" ? "0 0 32 31" : "0 0 22 22"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          variant === "base"
            ? "M13.1468 2.78115C14.0449 0.01722 17.9551 0.0172195 18.8532 2.78115L20.4903 7.81966C20.8919 9.05573 22.0438 9.89261 23.3434 9.89261H28.6413C31.5474 9.89261 32.7557 13.6115 30.4046 15.3197L26.1186 18.4336C25.0671 19.1976 24.6272 20.5517 25.0288 21.7877L26.6659 26.8262C27.5639 29.5902 24.4005 31.8885 22.0494 30.1803L17.7634 27.0664C16.7119 26.3024 15.2881 26.3024 14.2366 27.0664L9.95064 30.1803C7.59949 31.8885 4.43605 29.5902 5.33411 26.8262L6.97122 21.7877C7.37284 20.5517 6.93287 19.1976 5.8814 18.4336L1.5954 15.3197C-0.755746 13.6115 0.452579 9.89261 3.35875 9.89261H8.65655C9.95623 9.89261 11.1081 9.05573 11.5097 7.81966L13.1468 2.78115Z"
            : "M9.01519 2.10862C9.63992 0.185888 12.3601 0.185892 12.9848 2.10863L14.1237 5.61368C14.4031 6.47355 15.2044 7.05573 16.1085 7.05573H19.7939C21.8156 7.05573 22.6562 9.64275 21.0206 10.8311L18.039 12.9973C17.3076 13.5287 17.0015 14.4707 17.2809 15.3306L18.4197 18.8356C19.0445 20.7584 16.8438 22.3572 15.2083 21.1689L12.2267 19.0027C11.4952 18.4713 10.5048 18.4713 9.77332 19.0027L6.79174 21.1689C5.15617 22.3573 2.95552 20.7584 3.58025 18.8356L4.71911 15.3306C4.9985 14.4707 4.69243 13.5287 3.96098 12.9973L0.979402 10.8311C-0.656174 9.64275 0.184403 7.05573 2.20609 7.05573H5.89151C6.79564 7.05573 7.59694 6.47355 7.87633 5.61368L9.01519 2.10862Z"
        }
        fill={fill}
      />
    </svg>
  );
};

export default Star;
