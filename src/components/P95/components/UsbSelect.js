import React from "react";
import "./UsbSelect.css";
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

const UsbSelect = () => {
  return (
    <div className="usbSelect">
      <div className="p95usbSelect__header">
        <Link to="/p95/print-from-usb" className="p95usbSelect__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>John Smith Maxillary</h2>
      </div>
    </div>
  );
};

export default UsbSelect;
