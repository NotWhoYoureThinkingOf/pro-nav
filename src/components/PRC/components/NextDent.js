import React, { useState } from "react";
import "./NextDent.css";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const NextDent = () => {
  const [selectedResin, setSelectedResin] = useState("");
  const dispatch = useDispatch();

  const getResin = (e) => {
    setSelectedResin(e.target.innerText);
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="nextDent">
      <div className="nextDent__header">
        <Link to="/prc" className="nextDent__home">
          <Home />
        </Link>
        <h2>NextDent Resins</h2>
        <Link to="/prc/nextDent2" className="nextDent__nextPage">
          <ChevronRight />
        </Link>
      </div>
      <div className="nextDent__container">
        <div className="nextDent__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Ortho Clear</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Denture Base</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Ortho IBT</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Tray</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>CB</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>MFH_Bleach</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextDent;
