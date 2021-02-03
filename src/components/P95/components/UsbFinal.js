import React from "react";
import "./UsbFinal.css";
import stl from "../../../assets/stlfile.png";
import {
  InvertColors,
  Layers,
  Close,
  Visibility,
  Pause,
} from "@material-ui/icons";
import {
  Link,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";

const UsbFinal = () => {
  return (
    <div className="usbFinal">
      <div className="usbFinal__buttons">
        <Link to="/p95" className="usbFinal__print">
          <p>Print</p>
        </Link>
        <div className="usbFinal__print">
          <p>History</p>
        </div>

        <div className="usbFinal__print">
          <p>External</p>
        </div>
        <Link to="/p95/settings" className="usbFinal__print">
          <p>Settings</p>
        </Link>
      </div>
      <div className="usbFinal__details">
        <div className="usbFinal__detailsContainer">
          <div className="usbFinal__detailsLeft">
            <img className="usbFinal__stl" src={stl} />
          </div>
          <div className="usbFinal__detailsRight">
            <div className="usbFinal__filename">
              <h3>5627134-maxillary</h3>
            </div>
            <div className="usbFinal__progress">
              <div className="usbFinal__time">
                <div className="usbFinal__total">
                  <h3>Total</h3>
                  <h2>39 Mins</h2>
                </div>
                <div className="usbFinal__process">
                  <h3>INITIALIZING</h3>
                </div>
                <div className="usbFinal__remaining">
                  <h3>Remaining</h3>
                  <h2>39 Mins</h2>
                </div>
              </div>
              <div className="usbFinal__totalLayers">
                <h5>Layer 1/203</h5>
              </div>
            </div>
            <div className="usbFinal__info">
              <div className="usbFinal__resin">
                <InvertColors />
                <h5>SprintRay Die and Model Tan</h5>
              </div>
              <div className="usbFinal__microns">
                <Layers />
                <h5>100 µm</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="usbFinal__controls">
        <div className="usbFinal__cancel control">
          <Close />
          <p>Cancel</p>
        </div>
        <div className="usbFinal__layer control">
          <Visibility />
          <p>Layer</p>
        </div>
        <div className="usbFinal__pause control">
          <Pause />
          <p>Pause</p>
        </div>
      </div>
    </div>
  );
};

export default UsbFinal;
