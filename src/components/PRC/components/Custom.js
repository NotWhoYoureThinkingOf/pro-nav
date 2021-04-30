import React, { useState } from "react";
import "./Custom.css";
import { Link } from "react-router-dom";
import { Add, Home, Remove, Timer, Whatshot } from "@material-ui/icons";
import { grab } from "../../../features/cureResin/cureResinSlice";
import { useDispatch } from "react-redux";

const Custom = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(10);
  const [heat, setHeat] = useState(30);

  const getCustomSpecs = () => {
    dispatch(
      grab({
        resin: "Custom Profile",
        customTime: time,
        customHeat: heat,
      })
    );
  };

  const addTime = () => {
    if (time >= 60) {
      setTime(60);
    } else setTime(time + 1);
  };

  const minusTime = () => {
    if (time <= 1) {
      setTime(1);
    } else {
      setTime(time - 1);
    }
  };

  const addHeat = () => {
    if (heat >= 60) {
      setHeat(60);
    } else {
      setHeat(heat + 10);
    }
  };

  const minusHeat = () => {
    if (heat <= 0) {
      setHeat(0);
    } else {
      setHeat(heat - 10);
    }
  };

  return (
    <div className="custom">
      <div className="custom__header">
        <Link to="/prc" className="custom__nextPage">
          <Home />
        </Link>
        <h2>Custom Profile</h2>
        <Link to="/prc" className="custom__home">
          <Home />
        </Link>
      </div>
      <div className="custom__container">
        <div className="custom__time">
          <div className="custom__remove" onClick={minusTime}>
            <Remove />
          </div>
          <div className="custom__timer">
            <Timer />
          </div>

          <p>{time} Mins</p>
          <div className="custom__add" onClick={addTime}>
            <Add />
          </div>
        </div>
        <div className="custom__heat">
          <div className="custom__remove" onClick={minusHeat}>
            <Remove />
          </div>
          <div className="custom__heater">
            <Whatshot />
          </div>

          <p>{heat} °C</p>
          <div className="custom__add" onClick={addHeat}>
            <Add />
          </div>
        </div>
      </div>
      <Link
        to="/prc/customCure"
        className="custom__start"
        onClick={getCustomSpecs}
      >
        <h2>Start</h2>
      </Link>
    </div>
  );
};

export default Custom;
