import React from "react";
import "./PrintFromUSB.css";
import { InsertDriveFile, Folder } from "@material-ui/icons";
import { Link } from "react-router-dom";

const PrintFromUSB = () => {
  return (
    <div className="printFromUSB">
      <div className="p95usb__buttons">
        <Link to="/p95" className="p95usb__print">
          <p>Print</p>
        </Link>
        <div className="p95usb__print">
          <p>History</p>
        </div>

        <div className="p95usb__print">
          <p>External</p>
        </div>
        <Link to="/p95/settings" className="p95Main__print">
          <p>Settings</p>
        </Link>
      </div>
      <div className="p95usb__details">
        <div className="p95usb__container">
          <div className="p95usb__file">
            <Link to="/p95/usb-select" className="p95usb__info">
              <InsertDriveFile />
              <h2>John Smith Maxillary.spr</h2>
            </Link>
            <hr />
          </div>
          <div className="p95usb__file">
            <div className="p95usb__info folder">
              <Folder />
              <h2>System Volume Information</h2>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintFromUSB;
