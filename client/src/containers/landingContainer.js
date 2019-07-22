import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Importing the component
import LandingComponent from "../components/landing/LandingComponent";

//Import functions
import { getArticles } from "../actions/articleActions";

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  article: state.article
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      getArticles: getArticles(dispatch)
    }
  };
};

export const landingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingComponent);

export default withRouter(landingContainer);
