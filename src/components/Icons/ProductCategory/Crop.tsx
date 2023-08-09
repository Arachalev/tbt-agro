import React from "react";

const Crop = ({ fill = "#4C6538" }: { fill?: string }) => {
  return (
    <svg
      width="20"
      height="28"
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2.61867 0.00171479C2.45392 0.0128532 2.29529 0.0685862 2.15978 0.162948C2.02427 0.25731 1.91697 0.386748 1.84937 0.537406C1.78177 0.688064 1.75641 0.854269 1.77601 1.01823C1.79561 1.18219 1.85943 1.33774 1.96064 1.46821C2.07934 1.62439 2.21469 1.78994 2.33911 1.95028C1.90775 1.9953 1.49136 2.13369 1.11885 2.35582C0.546203 2.7067 0.0906876 3.39075 0.00999625 4.19975C-0.0753804 5.05872 0.396794 5.88646 1.0189 6.27794C1.60508 6.646 2.25686 6.77146 2.91749 6.84018C2.8542 7.01181 2.80373 7.18791 2.76652 7.36701C2.59576 8.19995 3.06221 9.06569 3.66818 9.47175C4.09454 9.75704 4.56463 9.9205 5.0618 10.034C4.85219 10.5007 4.78833 11.0198 4.87855 11.5234C5.03733 12.4157 5.70628 12.9774 6.39815 13.372C6.92967 13.6755 7.52939 13.8926 8.13483 14.0805C7.81571 14.4236 7.57884 14.8614 7.56219 15.3706C7.53303 16.2321 8.00989 16.987 8.61221 17.468C9.21454 17.949 9.95325 18.2426 10.744 18.429C12.2241 18.7773 13.8728 18.7648 15.2008 18.2135C15.4017 18.5691 15.6084 18.9225 15.7937 19.2828C16.9885 21.6077 17.8501 24.0321 18.1812 26.5533C18.1904 26.6771 18.2248 26.7977 18.2823 26.9078C18.3399 27.0178 18.4193 27.1149 18.5157 27.1931C18.6121 27.2713 18.7235 27.329 18.843 27.3626C18.9625 27.3962 19.0876 27.4051 19.2107 27.3886C19.3337 27.3721 19.4521 27.3306 19.5585 27.2668C19.665 27.2029 19.7573 27.1179 19.8297 27.017C19.9021 26.9162 19.9531 26.8016 19.9797 26.6803C20.0062 26.5591 20.0077 26.4336 19.984 26.3118C19.6196 23.535 18.6825 20.9164 17.4149 18.4509C17.1952 18.024 16.9547 17.6065 16.7173 17.189C17.5882 16.3076 18.1983 15.0926 18.5107 13.8634C18.7085 13.0878 18.7866 12.3017 18.6388 11.5499C18.4909 10.7982 18.0583 10.0465 17.3081 9.64615C16.8094 9.38065 16.2456 9.39731 15.7511 9.54984C15.8145 9.16644 15.8472 8.77858 15.8489 8.38997C15.8458 7.60909 15.6782 6.7522 14.9946 6.17642C14.4579 5.72455 13.7582 5.49966 13.1101 5.61263C12.8831 5.65492 12.6641 5.73238 12.4609 5.84221C12.4324 5.56266 12.3838 5.28552 12.3157 5.01291C12.1199 4.25545 11.717 3.48654 10.932 3.08204C10.3895 2.80301 9.75491 2.74574 9.22911 2.92222C9.2036 2.48441 9.14842 2.04919 8.99381 1.63012C8.75121 0.971052 8.18325 0.309904 7.37321 0.123012C6.65792 -0.0420147 5.92077 0.14748 5.44963 0.539484C4.98891 0.924199 4.75569 1.41147 4.60107 1.86126C4.17731 1.34952 3.77177 0.847672 3.41205 0.370292C3.32156 0.2469 3.20143 0.148303 3.06276 0.0836099C2.9241 0.0189167 2.77136 -0.00978613 2.61867 0.000152991V0.00171479ZM6.72352 1.87011C6.7662 1.86126 6.83128 1.87011 6.96403 1.89874C7.13374 1.93779 7.17851 1.97006 7.28627 2.26315C7.39404 2.55625 7.44661 3.0633 7.42839 3.61669C7.40705 4.06831 7.35837 4.51823 7.28263 4.96397C6.88126 4.51106 6.50175 4.07376 6.12224 3.63959C6.12536 3.54589 6.14879 2.97949 6.31798 2.47972C6.4096 2.20849 6.53871 2.01119 6.62044 1.94247C6.66157 1.90811 6.68135 1.88208 6.72456 1.87271L6.72352 1.87011ZM2.8748 3.73486C3.21325 3.73521 3.55078 3.7701 3.88214 3.83898C4.21792 4.23359 4.58962 4.65474 4.94622 5.06184C4.35796 5.07746 3.75564 5.08735 3.2111 5.03633C2.64574 4.98427 2.17981 4.85517 1.9872 4.73439C1.79458 4.61362 1.79614 4.66984 1.82529 4.37831C1.85913 4.03628 1.92004 3.99724 2.06737 3.90978C2.21469 3.82232 2.52184 3.74007 2.8748 3.73486ZM9.86892 4.59956C9.94887 4.62615 10.0258 4.66105 10.0985 4.70368C10.2656 4.78957 10.4338 5.00041 10.5556 5.47051C10.6774 5.9406 10.7118 6.60279 10.6769 7.27279C10.6489 7.73621 10.5959 8.19778 10.5181 8.65547C10.0641 8.12343 9.62372 7.62574 9.17497 7.11453C9.26191 6.46795 9.36499 5.63553 9.57374 5.08787C9.69139 4.77552 9.83664 4.62403 9.84966 4.61622C9.86267 4.60841 9.84497 4.59644 9.86892 4.60008V4.59956ZM5.26378 6.92347C5.63965 6.88286 6.27893 7.04321 6.88854 7.27591C7.24723 7.68041 7.61112 8.09688 7.97553 8.51283C7.29877 8.49148 6.59857 8.45192 5.99001 8.35665C5.38144 8.26138 4.88375 8.09636 4.67864 7.95944C4.47353 7.82253 4.51622 7.93341 4.55734 7.73038C4.63543 7.34723 4.74788 7.17544 4.84575 7.08433C4.94362 6.99323 5.05399 6.94638 5.26222 6.92399L5.26378 6.92347ZM13.4204 7.40762C13.5146 7.39148 13.5989 7.37794 13.8249 7.56796C13.903 7.63407 14.0237 7.88031 14.0258 8.39518C14.0279 8.91004 13.9108 9.59826 13.7306 10.2849C13.5745 10.8768 13.3808 11.4552 13.2038 11.9628C13.0888 11.8128 12.9784 11.6577 12.8618 11.5093C12.6109 11.1871 12.3553 10.8758 12.1007 10.5603C12.1116 10.325 12.1288 10.0918 12.1611 9.87573C12.1949 9.71956 12.2261 9.57119 12.2589 9.39315C12.424 8.66901 12.6791 8.0797 12.944 7.75641C13.1523 7.50184 13.3267 7.42376 13.4204 7.40762ZM7.98907 10.3651C8.62211 10.3994 9.43579 10.641 10.2562 11.1819C10.6493 11.6593 11.0402 12.1413 11.4234 12.6317C11.5275 12.766 11.6269 12.9056 11.7311 13.0414C11.5629 13.0107 11.4005 12.98 11.1938 12.9415C10.5988 12.8306 9.86475 12.6812 9.15623 12.4912C8.44771 12.3012 7.76313 12.056 7.30085 11.792C6.83857 11.5281 6.68291 11.2881 6.66729 11.1996C6.61888 10.9284 6.66729 10.8295 6.76152 10.7154C6.85575 10.6014 7.05409 10.4676 7.39508 10.4005C7.59086 10.3643 7.79035 10.3522 7.98907 10.3646V10.3651ZM16.3185 11.1923C16.3445 11.1835 16.3669 11.2074 16.4554 11.2548C16.6636 11.3657 16.7782 11.5291 16.8521 11.906C16.926 12.2829 16.8995 12.8306 16.7511 13.4157C16.5601 14.1654 16.1556 14.9343 15.7099 15.5241C15.3976 15.0382 15.0779 14.5579 14.751 14.0831C14.917 13.509 15.133 12.9505 15.3965 12.4141C15.6407 11.9258 15.9484 11.5005 16.1566 11.3303C16.2607 11.2454 16.2909 11.2038 16.3164 11.1949L16.3185 11.1923ZM11.0387 15.0004C12.1668 15.0202 13.3423 15.2815 13.3647 15.2867C13.6635 15.7209 13.9514 16.1592 14.233 16.6017C13.4105 16.8412 12.1767 16.8943 11.1615 16.6538C10.5582 16.5117 10.047 16.2785 9.75022 16.0421C9.45349 15.8058 9.37852 15.6532 9.38581 15.4299C9.39206 15.2414 9.36759 15.2873 9.64923 15.1738C9.93087 15.0603 10.4712 14.989 11.0408 14.9994L11.0387 15.0004Z"
        fill={fill}
      />
    </svg>
  );
};

export default Crop;
