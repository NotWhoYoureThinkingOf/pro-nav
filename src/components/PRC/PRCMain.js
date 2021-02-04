import React, { useEffect, useState } from "react";
import "./PRCMain.css";
import PRC from "../../assets/PRC.png";
import { ChevronRight, Build } from "@material-ui/icons";
import {
  Link,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import Cure from "./components/Cure";
import {
  grab,
  release,
  selectCureResin,
} from "../../features/cureResin/cureResinSlice";
import { useDispatch, useSelector } from "react-redux";

const PRCMain = () => {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const [selectedResin, setSelectedResin] = useState("");
  const dispatch = useDispatch();

  const getResin = (e) => {
    setSelectedResin(e.target.innerText);
    dispatch(grab({ resin: e.target.innerText }));
  };

  console.log(selectedResin);

  return (
    <div className="prcMain">
      <Link to="/" className="prcMain__back">
        Back To Welcome Screen
      </Link>
      <div className="prcMain__bg">
        <img src={PRC} alt="" />
      </div>
      <div className="prcMain__logo">
        <img src="" alt="" />
      </div>
      <div className="prcMain__container">
        <div className="prcMain__screen">
          <Switch key={location.pathname} location={location}>
            <Route exact path={`/prc/cure`}>
              <Cure />
            </Route>

            <Route exact path={`/prc`}>
              <div className="prcMain__firstScreen">
                <div className="prcMain__firstButtons">
                  <Link to="/prc" onClick={(e) => getResin(e)}>
                    <h3>SR Model Resins</h3>
                  </Link>
                  <Link to="/prc" onClick={(e) => getResin(e)}>
                    <h3>SR Surgical Guide</h3>
                  </Link>
                  <Link to="/prc" onClick={(e) => getResin(e)}>
                    <h3>SR Castable</h3>
                  </Link>
                  <Link to="/prc" onClick={(e) => getResin(e)}>
                    <h3>SR Denture Base</h3>
                  </Link>
                  <Link to="/prc" onClick={(e) => getResin(e)}>
                    <h3>SR Try-in</h3>
                  </Link>
                  <Link to="/prc" onClick={(e) => getResin(e)}>
                    <h3>Custom</h3>
                  </Link>
                </div>
                <div className="prcMain__firstStart">
                  <div className="prcMain__build">
                    <Build />
                  </div>
                  <Link to="/prc/cure">
                    <h2>Start</h2>
                  </Link>

                  <div className="prcMain__next">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default PRCMain;
