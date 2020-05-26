import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import ActivityProvider from "./data/ActivityProvider";

export default function App() {
  return (
    <div className="container">
      <ActivityProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/overview">
              <Overview />
            </Route>
          </Switch>
        </Router>
      </ActivityProvider>
    </div>
  );
}
