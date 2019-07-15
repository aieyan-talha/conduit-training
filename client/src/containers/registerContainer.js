import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

//Importing Register user action
import { registerUser } from "../actions/authActions";

//Importing container's component
import Register from "../views/Register";

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      registerUser: registerUser(dispatch)
    }
  };
};

export const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default withRouter(RegisterContainer);
