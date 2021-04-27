import React from "react";
import "./Language.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "@material-ui/icons";

const Language = () => {
  return (
    <div className="language">
      <div className="language__header">
        <Link to="/p95/settings" className="language__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>System Language</h2>
      </div>
      <div className="language__container">
        <div className="language__details">
          <h2>English</h2>
          <h2>中国人</h2>
        </div>
      </div>
    </div>
  );
};

export default Language;
