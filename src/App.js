import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MainScreen from "./components/mainScreen/MainScreen";
import P95Main from "./components/P95/P95Main";
import PRCMain from "./components/PRC/PRCMain";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/prc">
          <PRCMain />
        </Route>

        <Route path="/p95">
          <P95Main />
        </Route>

        <Route path="/">
          <MainScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
