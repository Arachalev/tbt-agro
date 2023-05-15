import React from "react";

const FooterItem = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div>
      <h4 className="text-sm font-bold mb-6">{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <p className="text-sm font-medium leading-6">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem