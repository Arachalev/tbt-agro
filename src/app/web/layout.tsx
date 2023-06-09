import React from "react";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className="overflow-x-hidden">{children}</section>;
};

export default WebLayout;
