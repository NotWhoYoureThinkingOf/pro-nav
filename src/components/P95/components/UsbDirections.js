import React from "react";
import "./UsbDirections.css";
import { InvertColors, ChevronLeft, PlayArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";

const UsbDirections = () => {
  return (
    <div className="usbDirections">
      <div className="usbDirections__header">
        <Link to="/p95/usb-select" className="usbDirections__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>John Smith Maxillary</h2>
      </div>
    </div>
  );
};

export default UsbDirections;
