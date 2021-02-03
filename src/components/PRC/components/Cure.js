import React from "react";
import "./Cure.css";
import { ChevronRight, Build } from "@material-ui/icons";
import {
  Link,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";

const Cure = () => {
  return (
    <div className="cure">
      <div className="cure__resin"></div>
      <hr />
      <div className="cure__details">
        <div className="cure__time"></div>
        <div className="cure__heating"></div>
      </div>
      <div className="cure__cancel"></div>
    </div>
  );
};

export default Cure;
