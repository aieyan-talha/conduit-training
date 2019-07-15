//This is the file for the functionality of the Login Page
import PropTypes from "prop-types";
import React, { Component } from "react";

//Importing Components
import Header from "../components/common/Header";
import * as Routes from "../routes/routes";

import TextInputField from "../components/common/TextInputField";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const loginData = {
      email: this.state.email,
      password: this.state.password
    };

    const { actions } = this.props;

    actions.loginUser(loginData);
  };

  render() {
    const { REGISTER } = Routes;

    //Import Errors from state
    const { errors } = this.state;

    return (
      <div>
        <div className="container has-text-centered">
          <Header
            title="Sign in"
            subtitle="Need an account?"
            route={REGISTER}
          />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <form onSubmit={this.onSubmit}>
                <TextInputField
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={this.onChange}
                  error={errors.email}
                  value={this.state.email}
                />
                <TextInputField
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.onChange}
                  error={errors.password}
                  value={this.state.password}
                />
                <input
                  className="button is-success is-pulled-right is-large"
                  type="submit"
                  value="Sign in"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//connection with redux is done in the login container file.
export default Login;
