import React from "react";
import "./PWDMain.css";
import pwd from '../../assets/PWD.png'
import { Link } from "react-router-dom";

const PWDMain = () => {
  return (
    <div className="pwdMain">
      <Link to="/" className="pwdMain__back">
        Back To Welcome Screen
      </Link>
      <div className="pwdMain__bg">
        <img src={pwd} alt="" />
      </div>

      <h1>pwd main page</h1>
    </div>
  );
};

export default PWDMain;
