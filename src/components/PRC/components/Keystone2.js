import React, { useState } from "react";
import "./Keystone2.css";
import { Link } from "react-router-dom";
import { ChevronLeft, Home } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const Keystone2 = () => {
  const [selectedResin, setSelectedResin] = useState("");
  const dispatch = useDispatch();

  const getResin = (e) => {
    setSelectedResin(e.target.innerText);
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="keystone2">
      <div className="keystone2__header">
        <Link to="/prc/keystone" className="sprintray2__nextPage">
          <ChevronLeft />
        </Link>
        <h2>KeyStone Resins</h2>
        <Link to="/prc" className="keystone2__home">
          <Home />
        </Link>
      </div>
      <div className="keystone2__container">
        <div className="keystone2__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>KeyMask</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>KeyGuide</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>KeyTray</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>KeyCast</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>KeyModel</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>KeyOrthoModel</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Keystone2;
