import React from "react";
import "./CustomCure.css";
import { Timer } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { selectCureResin } from "../../../features/cureResin/cureResinSlice";
import { useSelector } from "react-redux";
import { RiTempHotLine } from "react-icons/ri";
import { BsFillDropletFill } from "react-icons/bs";

const CustomCure = () => {
  const resin = useSelector(selectCureResin);

  return (
    <div className="customCure">
      <div className="customCure__details">
        <div className="customCure__titleBox">
          <BsFillDropletFill />
          <h2 className="customCure__title">Custom Profile</h2>
        </div>

        <div className="customCure__time">
          <div className="customCure__timer">
            <Timer />
            <h2>{resin.customTime} Mins</h2>
          </div>
          <div className="customCure__heating">
            <RiTempHotLine />
            <h2>{resin.customHeat} °C</h2>
          </div>
        </div>
        <div className="customCure__processing">
          <RiTempHotLine />
          <h2>
            Heating to target temp. {Math.floor(resin.customHeat * 0.8)} /
            {resin.customHeat} °C
          </h2>
        </div>
      </div>
      <Link to="/prc" className="customCure__cancel">
        <h2>Cancel</h2>
      </Link>
    </div>
  );
};

export default CustomCure;
