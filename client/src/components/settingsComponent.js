import React, { Component } from "react";

//Import Components
import TextInputField from "../components/common/TextInputField";
import TextAreaInputField from "../components/common/TextAreaInputField";

class SettingsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.auth.user.username,
      email: "",
      password: "",
      bio: "",
      profile_pic: ""
    };
  }

  onLogoutBtnClick = () => {
    const { actions } = this.props;
    actions.logoutUser();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const UpdateUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      bio: this.state.bio,
      profile_pic: this.state.profile_pic
    };

    const { actions, auth } = this.props;
    actions.updateUser(auth.user.id, UpdateUser, this.props.history);
  };

  render() {
    const { auth, errors } = this.props;

    return (
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="has-text-weight-semibold is-size-3">
              Your Settings
            </div>
            <form onSubmit={this.onSubmit}>
              <TextInputField
                type="text"
                placeholder="URL of Profile Picture"
                name="profile_pic"
                value={this.state.profile_pic}
                onChange={this.onChange}
                error={errors.profile_pic}
              />

              <TextInputField
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
                error={errors.username}
              />

              <TextAreaInputField
                type="text"
                placeholder="Short bio about you"
                name="bio"
                rows="5"
                value={this.state.bio}
                onChange={this.onChange}
                error={errors.bio}
              />

              <TextInputField
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />

              <TextInputField
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />

              <input
                type="submit"
                value="Update Settings"
                className="button is-medium is-success is-pulled-right"
              />
            </form>
          </div>
        </div>
        <div className="field is-grouped is-grouped-centered">
          <button
            className="button is-danger is-outlined"
            onClick={this.onLogoutBtnClick}
          >
            Or click here to logout.
          </button>
        </div>
      </div>
    );
  }
}

export default SettingsComponent;
