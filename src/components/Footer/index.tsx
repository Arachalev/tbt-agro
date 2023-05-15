"use client";

import React, { useEffect, useState } from "react";

import WebFooter from "./WebFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const [deviceDimension, setDeviceDimension] = useState(1440);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDeviceDimension(window.outerWidth);
      console.log(deviceDimension);
    });

    return window.removeEventListener("resize", () => {
      setDeviceDimension(window.outerWidth);
    });
  }, [deviceDimension]);

  useEffect(() => {
    setDeviceDimension(window.outerWidth);
  }, []);
  return deviceDimension > 640 ? <WebFooter /> : <MobileFooter />;
};

export default Footer;
