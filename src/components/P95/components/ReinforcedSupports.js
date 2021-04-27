import React, { useState } from "react";
import "./ReinforcedSupports.css";
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ReinforcedSupports = () => {
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div className="reinforced">
      <div className="reinforced__header">
        <Link to="/p95/settings" className="reinforced__back">
          <ChevronLeft />
          <p>Back</p>
        </Link>
        <h2>Reinforced Supports (Beta)</h2>
      </div>
      <div className="reinforced__container">
        <div className="reinforced__switch">
          <h3>Reinforced Supports (Beta)</h3>
          <div
            className={!switchOn ? `reinforced__onOff` : `reinforced__off`}
            onClick={() => setSwitchOn(!switchOn)}
          >
            {switchOn ? <p>OFF</p> : <p>ON</p>}
          </div>
        </div>
        <div className="reinforced__details">
          <p>
            Enabling Reinforced Supports makes the supports cure for 50% longer
            than the model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReinforcedSupports;
