import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../containers/App";
import About from "../components/About";

function myRoute() {
  return (
    <div>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  );
}

export default myRoute;
