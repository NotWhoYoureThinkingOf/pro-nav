import React from "react";
import "./PrintFromRayware.css";
import stl from "../../../assets/stlfile.png";
import {
  InvertColors,
  Layers,
  Close,
  Visibility,
  Pause,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const PrintFromRayware = () => {
  return (
    <div className="printFromRayware">
      <div className="p95Print__buttons">
        <Link to="/p95" className="p95Main__print">
          <p>Print</p>
        </Link>
        <div className="p95Main__print">
          <p>History</p>
        </div>
        <Link to="/p95/settings" className="p95Main__print">
          <p>Settings</p>
        </Link>
      </div>
      <div className="p95Print__details">
        <div className="p95Print__detailsContainer">
          <div className="p95Print__detailsLeft">
            <img className="p95Print__stl" src={stl} />
          </div>
          <div className="p95Print__detailsRight">
            <div className="p95Print__filename">
              <h3>5627134-maxillary</h3>
            </div>
            <div className="p95Print__progress">
              <div className="p95Print__time">
                <div className="p95Print__total">
                  <h3>Total</h3>
                  <h2>39 Mins</h2>
                </div>
                <div className="p95Print__process">
                  <h3>INITIALIZING</h3>
                </div>
                <div className="p95Print__remaining">
                  <h3>Remaining</h3>
                  <h2>39 Mins</h2>
                </div>
              </div>
              <div className="p95Print__totalLayers">
                <h5>Layer 1/203</h5>
              </div>
            </div>
            <div className="p95Print__info">
              <div className="p95Print__resin">
                <InvertColors />
                <h5>SprintRay Die and Model Tan</h5>
              </div>
              <div className="p95Print__microns">
                <Layers />
                <h5>100 µm</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p95Print__controls">
        <div className="p95Print__cancel control">
          <Close />
          <p>Cancel</p>
        </div>
        <div className="p95Print__layer control">
          <Visibility />
          <p>Layer</p>
        </div>
        <div className="p95Print__pause control">
          <Pause />
          <p>Pause</p>
        </div>
      </div>
    </div>
  );
};

export default PrintFromRayware;
