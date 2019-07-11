import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

//Import Routes from routes folder
import * as Routes from "../routes/routes";

//Importing components for Login/Signup pages
import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";

function Pages() {
  const { LOGIN, REGISTER } = Routes;
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path={LOGIN} component={Login} />
      <Route exact path={REGISTER} component={Register} />
    </div>
  );
}

export default Pages;
