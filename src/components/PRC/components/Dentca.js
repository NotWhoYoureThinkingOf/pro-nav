import React from "react";
import "./Dentca.css";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const Dentca = () => {
  const dispatch = useDispatch();

  const getResin = (e) => {
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="dentca">
      <div className="dentca__header">
        <Link to="/prc" className="dentca__home">
          <Home />
        </Link>
        <h2>DENTCA Resins</h2>
        <Link to="/prc/dentca2" className="dentca__nextPage">
          <ChevronRight />
        </Link>
      </div>
      <div className="dentca__container">
        <div className="dentca__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Light Pink</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Original Pink</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Dark Pink</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Reddish Pink</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Teeth A1</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Teeth A2</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dentca;
