//This is the landing page displayed on the Home page
import React, { Component } from "react";
import PropTypes from "prop-types";

import LandingContainer from "../containers/landingContainer";

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingContainer />
      </div>
    );
  }
}

Landing.propTypes = {};

export default Landing;
