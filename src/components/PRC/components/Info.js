import React from "react";
import "./Info.css";
import { Link } from "react-router-dom";
import { Home } from "@material-ui/icons";
import logo from "../../../assets/sprintray-white-prc.png";

const Info = () => {
  return (
    <div className="infoPage">
      <div className="info__header">
        <Link to="/prc" className="info__homeButton">
          <Home />
        </Link>
      </div>
      <div className="infoPage__img">
        <img src={logo} alt="" />
      </div>
      <div className="info__content">
        <div className="info__contentDetails">
          <h2 className="info__system">Pro Cure</h2>
          <h3>Automated Post-processing System</h3>
          <h3>Firmware Ver 1.50</h3>
        </div>
      </div>
    </div>
  );
};

export default Info;
