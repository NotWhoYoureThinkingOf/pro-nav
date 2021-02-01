import React from "react";
import "./WifiStatus.css";
import { ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

const WifiStatus = ({ network, onClick }) => {
  return (
    <div className="wifiStatus">
      <div className="wifiStatus__top">
        <div className="wifiStatus__detail">
          <p>Network SSID</p>
          <p>{network}</p>
        </div>
        <div className="wifiStatus__detail configure">
          <p>Configure IP</p>
          <div className="configure__details">
            <p>Automatic</p>
            <ChevronRight />
          </div>
        </div>
        <div className="wifiStatus__detail">
          <p>Printer IP Address</p>
          <p>192.168.0.111</p>
        </div>
        <div className="wifiStatus__detail">
          <p>Subnet Mask</p>
          <p>255.255.255.0</p>
        </div>
        <div className="wifiStatus__detail">
          <p>Router</p>
          <p>192.168.1.111</p>
        </div>
      </div>
      <Link to="/p95/settings" onClick={onClick} className="wifiStatus__bottom">
        <h2>Forget This Network</h2>
      </Link>
    </div>
  );
};

export default WifiStatus;
