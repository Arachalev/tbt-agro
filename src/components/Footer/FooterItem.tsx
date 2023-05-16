import React, { useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FooterItem = ({
  title,
  items,
  variant = "web",
}: {
  title: string;
  items: string[];
  variant?: "web" | "mobile";
}) => {
  const [showLinks, setShowLinks] = useState(false);

  const mobile = variant === "mobile" ? true : false;

  const handleLinks = () => {
    if (mobile) {
      setShowLinks((state) => !state);
    }
  };

  return (
    <div>
      <h4
        onClick={handleLinks}
        className={`text-sm font-bold  ${
          mobile ? "flex items-center gap-2" : "mb-6 "
        } `}
      >
        {title} {mobile && <MdOutlineKeyboardArrowDown />}
      </h4>
      {mobile && showLinks && (
        <ul>
          {items.map((item) => (
            <li key={item}>
              <p className="text-sm font-medium leading-6">{item}</p>
            </li>
          ))}
        </ul>
      )}
      {!mobile && (
        <ul>
          {items.map((item) => (
            <li key={item}>
              <p className="text-sm font-medium leading-6">{item}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterItem;
