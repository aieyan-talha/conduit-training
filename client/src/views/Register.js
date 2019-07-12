//This is the file for the functionality of the Register Page
import axios from "axios";

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

//Importing Register user action
import { registerUser } from "../actions/authActions";

//Importing Routes
import * as Routes from "../routes/routes";

//Importing Components
import Header from "../components/common/Header";
import TextInputField from "../components/common/TextInputField";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newUser, this.props.history);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { LOGIN } = Routes;
    const { errors } = this.state;

    return (
      <div>
        <div className="container has-text-centered">
          <Header title="Sign up" subtitle="Have an account?" route={LOGIN} />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <form onSubmit={this.onSubmit}>
                <TextInputField
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                />
                <TextInputField
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextInputField
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input
                  className="button is-success is-pulled-right is-large"
                  type="submit"
                  value="Sign up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
