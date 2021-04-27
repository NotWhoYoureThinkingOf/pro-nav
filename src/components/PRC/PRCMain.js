import React from "react";
import "./PRCMain.css";
import PRC from "../../assets/PRC.png";
import { Build, Repeat } from "@material-ui/icons";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import Cure from "./components/Cure";
import { selectCureResin } from "../../features/cureResin/cureResinSlice";
import { useSelector } from "react-redux";
import Sprintray from "./components/Sprintray";
import Sprintray2 from "./components/Sprintray2";
import Keystone from "./components/Keystone";
import Keystone2 from "./components/Keystone2";
import Dreve from "./components/Dreve";

const PRCMain = () => {
  const location = useLocation();
  const resin = useSelector(selectCureResin);

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
            <Route exact path={`/prc`}>
              <div className="prcMain__firstScreen">
                <div className="prcMain__firstStart">
                  <div className="prcMain__settings">
                    <Build />
                  </div>
                  <Link to="/prc/cure" className="prcMain__startButton">
                    <h2>{resin?.resin ? resin.resin : "Die and Model"}</h2>
                    <div className="prcMain__startButtonRepeat">
                      <Repeat />
                    </div>
                  </Link>
                </div>
                <div className="prcMain__firstButtons">
                  <Link to="/prc/sprintray">
                    <h3>SprintRay</h3>
                  </Link>
                  <Link to="/prc/custom">
                    <h3>Custom</h3>
                  </Link>
                  <Link to="/prc/keystone">
                    <h3>KeyStone</h3>
                  </Link>
                  <Link to="/prc/dentca">
                    <h3>DENTCA</h3>
                  </Link>
                  <Link to="/prc/dreve">
                    <h3>Dreve</h3>
                  </Link>
                  <Link to="/prc/nextdent">
                    <h3>NextDent</h3>
                  </Link>
                </div>
              </div>
            </Route>

            <Route exact path={`/prc/dreve`}>
              <Dreve />
            </Route>

            <Route exact path={`/prc/keystone2`}>
              <Keystone2 />
            </Route>

            <Route exact path={`/prc/keystone`}>
              <Keystone />
            </Route>

            <Route exact path={`/prc/sprintray2`}>
              <Sprintray2 />
            </Route>

            <Route exact path={`/prc/sprintray`}>
              <Sprintray />
            </Route>

            <Route exact path={`/prc/cure`}>
              <Cure />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default PRCMain;

{
  /* <Link to="/prc" onClick={(e) => getResin(e)}>
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
                  </Link> */
}
