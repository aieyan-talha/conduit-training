//This is the container file, which will do all the heavy lifting for the Login Page
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../actions/authActions";

//Import the view
import Login from "../views/Login";

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loginUser: loginUser(dispatch)
    }
  };
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default withRouter(LoginContainer);
