"use client";
import React, { useState, useEffect } from "react";

import MobileNav from "./MobileNav";
import WebNav from "./WebNav";

const NavBar = () => {
  const [deviceDimension, setDeviceDimension] = useState(1440);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDeviceDimension(window.outerWidth);
    });

    return window.removeEventListener("resize", () => {
      setDeviceDimension(window.outerWidth);
    });
  }, [deviceDimension]);

  useEffect(() => {
    setDeviceDimension(window.outerWidth);
  }, []);


  return deviceDimension > 640 ? <WebNav /> : <MobileNav />;
};

export default NavBar;
