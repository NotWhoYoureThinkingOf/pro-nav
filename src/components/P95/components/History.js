import React from "react";
import "./History.css";
import { Link } from "react-router-dom";
import { Delete } from "@material-ui/icons";

const History = () => {
  return (
    <div className="history">
      <div className="history__screen">
        <div className="history__buttons">
          <Link to="/p95" className="history__print">
            <p>Print</p>
          </Link>
          <div className="history__print">
            <p>History</p>
          </div>
          <Link to="/p95/settings" className="history__print">
            <p>Settings</p>
          </Link>
        </div>
        <div className="history__content">
          <h2>No Recent Prints</h2>
        </div>
        <div className="history__clear">
          <Delete />
          <p>Clear All</p>
        </div>
      </div>
    </div>
  );
};

export default History;
