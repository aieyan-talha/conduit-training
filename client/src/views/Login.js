//This is the file for the functionality of the Login Page

import React, { Component } from "react";

//Importing Components
import Header from "../components/common/Header";
import * as Routes from "../routes/routes";

import TextInputField from "../components/common/TextInputField";

class Login extends Component {
  render() {
    const { REGISTER } = Routes;
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
              <TextInputField type="text" placeholder="Email" />
              <TextInputField type="password" placeholder="Password" />
              <a
                href="/dashboard"
                className="button is-success is-pulled-right is-large"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
