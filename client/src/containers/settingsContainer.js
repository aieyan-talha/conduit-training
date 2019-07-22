import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SettingsComponent from "../components/settingsComponent";

//Import functions
import { updateUser, logoutUser } from "../actions/authActions";

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      updateUser: updateUser(dispatch),
      logoutUser: logoutUser(dispatch)
    }
  };
};

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsComponent);

export default withRouter(SettingsContainer);
