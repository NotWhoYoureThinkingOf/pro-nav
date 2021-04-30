import React from "react";
import "./PRCMain.css";
import PRC from "../../assets/PRC.png";
import { Build, Repeat } from "@material-ui/icons";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import Cure from "./components/Cure";
import { selectCureResin } from "../../features/cureResin/cureResinSlice";
import { useSelector } from "react-redux";
import Info from "./components/Info";
import Sprintray from "./components/Sprintray";
import Sprintray2 from "./components/Sprintray2";
import Keystone from "./components/Keystone";
import Keystone2 from "./components/Keystone2";
import Dreve from "./components/Dreve";
import Dentca from "./components/Dentca";
import Dentca2 from "./components/Dentca2";
import NextDent from "./components/NextDent";
import NextDent2 from "./components/NextDent2";
import Custom from "./components/Custom";
import CustomCure from "./components/CustomCure";

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
                  <Link to="/prc/info" className="prcMain__settings">
                    <Build />
                  </Link>
                  <Link
                    to={
                      resin?.resin === "Custom Profile"
                        ? `/prc/customCure`
                        : `/prc/cure`
                    }
                    className="prcMain__startButton"
                  >
                    <h2>{resin?.resin ? resin?.resin : "Die and Model"}</h2>
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

            <Route exact path={`/prc/info`}>
              <Info />
            </Route>

            <Route exact path={`/prc/customCure`}>
              <CustomCure />
            </Route>

            <Route exact path={`/prc/custom`}>
              <Custom />
            </Route>

            <Route exact path={`/prc/nextdent2`}>
              <NextDent2 />
            </Route>

            <Route exact path={`/prc/nextdent`}>
              <NextDent />
            </Route>

            <Route exact path={`/prc/dentca2`}>
              <Dentca2 />
            </Route>

            <Route exact path={`/prc/dentca`}>
              <Dentca />
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
