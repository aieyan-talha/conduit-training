import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

//Import Routes from routes folder
import * as Routes from "../routes/routes";
import PrivateRoute from "../components/common/PrivateRoute";

//Importing components for Login/Signup pages
import Landing from "./Landing";
import dashboardContainer from "../containers/dashboardContainer";
import LoginContainer from "../containers/loginContainer";
import RegisterContainer from "../containers/registerContainer";
import articleEditorContainer from "../containers/articleEditorContainer";
import HomeContainer from "../containers/homeContainer";
import articleViewContainer from "../containers/articleViewContainer";
import Settings from "../views/Settings";

function Pages() {
  const {
    LOGIN,
    REGISTER,
    DASHBOARD,
    ARTICLE_EDITOR,
    HOME,
    ARTICLE_VIEW,
    SETTINGS
  } = Routes;
  return (
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path={LOGIN} component={LoginContainer} />
      <Route exact path={REGISTER} component={RegisterContainer} />
      <Switch>
        <PrivateRoute exact path={DASHBOARD} component={dashboardContainer} />
      </Switch>
      <Switch>
        <PrivateRoute exact path={HOME} component={HomeContainer} />
      </Switch>
      <Switch>
        <PrivateRoute exact path={SETTINGS} component={Settings} />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={ARTICLE_EDITOR}
          component={articleEditorContainer}
        />
      </Switch>
      <Route exact path={ARTICLE_VIEW} component={articleViewContainer} />
    </div>
  );
}

export default Pages;
