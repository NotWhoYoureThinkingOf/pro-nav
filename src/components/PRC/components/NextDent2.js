import React from "react";
import "./NextDent2.css";
import { Link } from "react-router-dom";
import { ChevronLeft, Home } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const NextDent2 = () => {
  const dispatch = useDispatch();

  const getResin = (e) => {
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="nextDent2">
      <div className="nextDent2__header">
        <Link to="/prc/nextDent" className="sprintray2__nextPage">
          <ChevronLeft />
        </Link>
        <h2>NextDent Resins</h2>
        <Link to="/prc" className="nextDent2__home">
          <Home />
        </Link>
      </div>
      <div className="nextDent2__container">
        <div className="nextDent2__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>MFH_N2</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Castable</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Ortho Rigid</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Model</h3>
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

export default NextDent2;
