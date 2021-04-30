import React, { useEffect } from "react";
import "./Cure.css";
import { Timer, HotTub } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { selectCureResin } from "../../../features/cureResin/cureResinSlice";
import { useSelector } from "react-redux";
import { RiTempHotLine } from "react-icons/ri";
import { BsFillDropletFill } from "react-icons/bs";

const Cure = () => {
  const resin = useSelector(selectCureResin);

  useEffect(() => {
    console.log(resin);
  }, []);

  return (
    <div className="cure">
      <div className="cure__details">
        <div className="cure__titleBox">
          <BsFillDropletFill />
          <h2 className="cure__title">
            {resin?.resin ? resin.resin : "Die and Model"}
          </h2>
        </div>

        <div className="cure__time">
          <div className="cure__timer">
            <Timer />
            <h2>15 Mins</h2>
          </div>
          <div className="cure__heating">
            <RiTempHotLine />
            <h2>30 °C</h2>
          </div>
        </div>
        <div className="cure__processing">
          <RiTempHotLine />
          <h2>Heating to target temp. 19 /30 °C</h2>
        </div>
      </div>
      <Link to="/prc" className="cure__cancel">
        <h2>Cancel</h2>
      </Link>
    </div>
  );
};

export default Cure;
