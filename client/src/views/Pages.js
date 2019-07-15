import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

//Import Routes from routes folder
import * as Routes from "../routes/routes";

//Importing components for Login/Signup pages
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import LoginContainer from "../containers/loginContainer";
import RegisterContainer from "../containers/registerContainer";

function Pages() {
  const { LOGIN, REGISTER, DASHBOARD } = Routes;
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path={LOGIN} component={LoginContainer} />
      <Route exact path={REGISTER} component={RegisterContainer} />
      <Route exact path={DASHBOARD} component={Dashboard} />
    </div>
  );
}

export default Pages;
