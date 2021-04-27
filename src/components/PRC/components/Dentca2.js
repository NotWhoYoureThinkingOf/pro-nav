import React, { useState } from "react";
import "./Dentca2.css";
import { Link } from "react-router-dom";
import { ChevronLeft, Home } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const Dentca2 = () => {
  const [selectedResin, setSelectedResin] = useState("");
  const dispatch = useDispatch();

  const getResin = (e) => {
    setSelectedResin(e.target.innerText);
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="dentca2">
      <div className="dentca2__header">
        <Link to="/prc/dentca" className="sprintray2__nextPage">
          <ChevronLeft />
        </Link>
        <h2>DENTCA Resins</h2>
        <Link to="/prc" className="dentca2__home">
          <Home />
        </Link>
      </div>
      <div className="dentca2__container">
        <div className="dentca2__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Teeth A3</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Teeth A3.5</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Teeth B1</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Teeth B2</h3>
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

export default Dentca2;
