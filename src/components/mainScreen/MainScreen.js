import React from "react";
import "./MainScreen.css";
import p95 from "../../assets/P95.png";
import prc from "../../assets/PRC.png";
import { Link } from "react-router-dom";

const MainScreen = () => {
  return (
    <div className="mainScreen">
      <div className="mainScreen__container">
        <div className="mainScreen__containerTop">
          <h1>Welcome to the Pro navigation guide!</h1>
          <h2>(Click on the equipment you want to navigate)</h2>
        </div>
        <div className="mainScreen__containerBottom">
          <div className="mainScreen__bottomCards">
            <Link to="/p95" className="mainScreen__p95">
              <img src={p95} alt="" />
            </Link>

            <Link to="/prc" className="mainScreen__prc">
              <img src={prc} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
