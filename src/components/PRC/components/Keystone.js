import React from "react";
import "./Keystone.css";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const Keystone = () => {
  const dispatch = useDispatch();

  const getResin = (e) => {
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="keystone">
      <div className="keystone__header">
        <Link to="/prc" className="keystone__home">
          <Home />
        </Link>
        <h2>KeyStone Resins</h2>
        <Link to="/prc/keystone2" className="keystone__nextPage">
          <ChevronRight />
        </Link>
      </div>
      <div className="keystone__container">
        <div className="keystone__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>KeySplint Soft</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>KeyGuide</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>KeyTray</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>KeyCast</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>KeyModel</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>KeyOrthoModel</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Keystone;
