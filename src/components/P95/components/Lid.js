import React, { useState } from "react";
import "./Lid.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Lid = () => {
  const [switchOn, setSwitchOn] = useState(true);

  console.log(switchOn);

  return (
    <div className="lid">
      <div className="lid__header">
        <Link to="/p95/settings" className="lid__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>Lid Safety Sensor</h2>
      </div>
      <div className="lid__container">
        <div className="lid__switch">
          <h3>Lid Safety Sensor</h3>
          <div
            className={!switchOn ? `lid__onOff` : `lid__off`}
            onClick={() => setSwitchOn(!switchOn)}
          >
            {switchOn ? <p>OFF</p> : <p>ON</p>}
          </div>
        </div>
        <div className="lid__details">
          <p>
            The Lid Safety Sensor ensures that the printer has been properly
            cleaned between jobs, decreasing the chance of catastrophic tank
            famage or failure due to accidentally printing with parts already on
            the platform. This setting should be left on unless you are
            experiencing issues with the Lid Safety Sensor feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lid;
