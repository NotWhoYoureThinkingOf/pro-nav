import React, { useState } from "react";
import "./Dreve.css";
import { Link } from "react-router-dom";
import { ChevronLeft, Home } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const Dreve = () => {
  const [selectedResin, setSelectedResin] = useState("");
  const dispatch = useDispatch();

  const getResin = (e) => {
    setSelectedResin(e.target.innerText);
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="dreve">
      <div className="dreve__header">
        <Link to="/prc" className="dreve__nextPage">
          <Home />
        </Link>
        <h2>Dreve Resins</h2>
        <Link to="/prc" className="dreve__home">
          <Home />
        </Link>
      </div>
      <div className="dreve__container">
        <div className="dreve__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Dreve IBT</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Dreve Guide</h3>
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

export default Dreve;
