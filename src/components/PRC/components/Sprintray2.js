import React, { useState } from "react";
import "./Sprintray2.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "@material-ui/icons";
import {
  grab,
  release,
  selectCureResin,
} from "../../../features/cureResin/cureResinSlice";
import { useDispatch, useSelector } from "react-redux";

const Sprintray2 = () => {
  const [selectedResin, setSelectedResin] = useState("");
  const dispatch = useDispatch();

  const getResin = (e) => {
    setSelectedResin(e.target.innerText);
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="sprintray2">
      <div className="sprintray2__header">
        <Link to="/prc/sprintray" className="sprintray2__nextPage">
          <ChevronLeft />
        </Link>
        <h2>SprintRay Resins</h2>
        <Link to="/prc" className="sprintray2__home">
          <Home />
        </Link>
      </div>
      <div className="sprintray2__container">
        <div className="sprintray2__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Castable 2</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Surgical Guide 2</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>Castable 2</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>Surgical Guide 2</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>Castable 2</h3>
          </Link>
          <Link to="/prc/cure" className="filler" onClick={(e) => getResin(e)}>
            <h3>Surgical Guide 2</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sprintray2;
