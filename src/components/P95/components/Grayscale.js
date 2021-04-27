import React, { useState } from "react";
import "./Grayscale.css";
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Grayscale = () => {
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div className="grayscale">
      <div className="grayscale__header">
        <Link to="/p95/settings" className="grayscale__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>Grayscale (Beta)</h2>
      </div>
      <div className="grayscale__container">
        <div className="grayscale__switch">
          <h3>Grayscale (Beta)</h3>
          <div
            className={!switchOn ? `grayscale__onOff` : `grayscale__off`}
            onClick={() => setSwitchOn(!switchOn)}
          >
            {switchOn ? <p>OFF</p> : <p>ON</p>}
          </div>
        </div>
        <div className="grayscale__details">
          <p>
            The toggle can be turned on if there's Grayscale.dat file. The
            toggle can't be turned on if there's no Grayscale.dat file. It means
            the printer doesn't support grayscale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grayscale;
