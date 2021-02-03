import React from "react";
import "./UsbDirections.css";
import { InvertColors, ChevronLeft, PlayArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";
import tank from "../../../assets/p95-tank.PNG";
import platform from "../../../assets/p95-platform.PNG";

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
      <div className="usbDirections__details">
        <div className="usbDirections__detailsContainer">
          <div className="usbDirections__detailsTop">
            <div className="usbDirections__topLeft">
              <div className="usbDirections__fill">
                <h3>
                  Fill Resin Tank up to <span>MIN</span>
                </h3>
              </div>
              <div className="usbDirections__resin">
                <InvertColors />
                <p>SprintRay Die and Model Tan</p>
              </div>
            </div>
            <div className="usbDirections__topRight">
              <h4>Stir Resin Before Printing</h4>
              <img src={tank} alt="p95 tank" />
            </div>
          </div>
          <hr />
          <div className="usbDirections__detailsBottom">
            <div className="usbDirections__bottomLeft">
              <h3>Ensure Print Platform is Locked</h3>
            </div>
            <div className="usbDirections__bottomRight">
              <img src={platform} alt="p95 platform" />
            </div>
          </div>
        </div>
        <Link to="/p95/usb-final" className="usbDirections__print">
          <PlayArrow />
          <h2>Print</h2>
        </Link>
      </div>
    </div>
  );
};

export default UsbDirections;
