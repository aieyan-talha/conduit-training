//This component ensures that the user is authenticated before accessing a route
//For example this doesnt allow the user to access dashboard through URL

import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//Import Routes from Pages
import * as Routes from "../../routes/routes";

const PrivateRoute = ({ component: Component, auth, ...state }) => {
  const { LOGIN } = Routes;
  return (
    <Route
      {...state}
      render={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={LOGIN} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(PrivateRoute);
