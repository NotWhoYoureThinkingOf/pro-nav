import React from "react";
import "./UsbSelect.css";
import { InvertColors, ChevronLeft, PlayArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";
import stl from "../../../assets/stlfile.png";

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
      <div className="p95usbSelect__details">
        <div className="usbSelect___detailsContainer">
          <div className="usbSelect__left">
            <img src={stl} alt="" />
          </div>
          <div className="usbSelect__right">
            <h2>John Smith Maxillary</h2>
            <div className="usbSelect__resin">
              <InvertColors />
              <p>SprintRay Die and Model Tan</p>
            </div>
            <div className="usbSelect__time">
              <h3>Print Time</h3>
              <h3>39 Mins</h3>
            </div>
            <div className="usbSelect__volume">
              <h3>Print Volume</h3>
              <h3>29 mL</h3>
            </div>
          </div>
        </div>
        <Link to="/p95/usb-directions" className="usbSelect__print">
          <PlayArrow />
          <h2>Print</h2>
        </Link>
      </div>
    </div>
  );
};

export default UsbSelect;
