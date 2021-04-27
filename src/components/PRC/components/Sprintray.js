import React, { useState } from "react";
import "./Sprintray.css";
import {
  Link,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import { ChevronRight, Home } from "@material-ui/icons";
import {
  grab,
  release,
  selectCureResin,
} from "../../../features/cureResin/cureResinSlice";
import { useDispatch, useSelector } from "react-redux";
import Sprintray2 from "./Sprintray2";

const Sprintray = () => {
  const [selectedResin, setSelectedResin] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const getResin = (e) => {
    setSelectedResin(e.target.innerText);
    dispatch(grab({ resin: e.target.innerText }));
  };

  return (
    <div className="sprintray">
      <div className="sprintray__header">
        <Link to="/prc" className="sprintray__home">
          <Home />
        </Link>
        <h2>SprintRay Resins</h2>
        <Link to="/prc/sprintray2" className="sprintray__nextPage">
          <ChevronRight />
        </Link>
      </div>
      <div className="sprintray__container">
        <div className="sprintray__resins">
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Die and Model</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Die and Model 2</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Study Model White</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Splint</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>IDB</h3>
          </Link>
          <Link to="/prc/cure" onClick={(e) => getResin(e)}>
            <h3>Try-in</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sprintray;
