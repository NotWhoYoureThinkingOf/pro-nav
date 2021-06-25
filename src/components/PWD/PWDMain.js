import React, { useState } from "react";
import "./PWDMain.css";
import PWDIntro from "./components/PWDIntro";
import pwd from '../../assets/PWD.png'
import { Link } from "react-router-dom";

const PWDMain = () => {
  const [intro, setIntro] = useState(true)

  return (
    <div className="pwdMain">
      <Link to="/" className="pwdMain__back">
        Back To Welcome Screen
      </Link>
      <div className="pwdMain__bg">
        <img src={pwd} alt="" />
      </div>
      <div className="pwdMain__container">
        <div className="pwdMain__screen">
          {intro && (
            <PWDIntro />
          )}

        </div>
      </div>

    </div>
  );
};

export default PWDMain;
