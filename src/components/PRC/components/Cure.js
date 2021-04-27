import React, { useEffect } from "react";
import "./Cure.css";
import { Timer, HotTub } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { selectCureResin } from "../../../features/cureResin/cureResinSlice";
import { useSelector } from "react-redux";

const Cure = () => {
  const resin = useSelector(selectCureResin);

  useEffect(() => {
    console.log(resin);
  }, []);

  return (
    <div className="cure">
      <div className="cure__resin">
        <h2>{resin.resin}</h2>
      </div>
      <hr />
      <div className="cure__details">
        <div className="cure__time">
          <Timer />
          <h2>14 min 58 s</h2>
        </div>
        <div className="cure__heating">
          <HotTub />
          <h2>Heating to 26/30 °C</h2>
        </div>
      </div>
      <Link to="/prc" className="cure__cancel">
        <h2>Cancel</h2>
      </Link>
    </div>
  );
};

export default Cure;
