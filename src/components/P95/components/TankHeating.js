import React, { useState } from "react";
import "./TankHeating.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

const TankHeating = () => {
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div className="tankHeating">
      <div className="tankHeating__header">
        <Link to="/p95/settings" className="tankHeating__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>Resin Tank Heating</h2>
      </div>
      <div className="tankHeating__container">
        <div className="tankHeating__switch">
          <h3>Resin Tank Heating</h3>
          <div
            className={!switchOn ? `tankHeating__onOff` : `tankHeating__off`}
            onClick={() => setSwitchOn(!switchOn)}
          >
            {switchOn ? <p>OFF</p> : <p>ON</p>}
          </div>
        </div>
        <div className="tankHeating__details">
          <p>
            Resin Tank Heating ensures that each material reaches its peak
            operating temperature before the print begins. When enabled, Pro
            will run a heating program when printing with certain materials or
            when the ambient temperature is too low. This setting should be left
            on unless you are experiencing issues with the Resin Tank Heating
            feature.
          </p>
          <p>
            If you would like to reduce heating times, move Pro to a warmer
            environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TankHeating;
