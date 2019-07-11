//This is the file for the functionality of the Register Page

import React, { Component } from "react";

//Importing Routes
import * as Routes from "../routes/routes";

//Importing Components
import Header from "../components/common/Header";
import TextInputField from "../components/common/TextInputField";

class Register extends Component {
  render() {
    const { LOGIN } = Routes;

    return (
      <div>
        <div className="container has-text-centered">
          <Header title="Sign up" subtitle="Have an account?" route={LOGIN} />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <TextInputField type="text" placeholder="Username" />
              <TextInputField type="text" placeholder="Email" />
              <TextInputField type="password" placeholder="Password" />
              <a
                href="/dashboard"
                className="button is-success is-pulled-right is-large"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
