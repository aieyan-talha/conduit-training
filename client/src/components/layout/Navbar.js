import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation">
        <div className="navbar-brand">
          <a
            href="/"
            className="navbar-item has-text-success is-size-4 has-text-weight-bold"
          >
            conduit
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="/" className="navbar-item is-7">
              Home
            </a>
            <a href="/login" className="navbar-item">
              Sign in
            </a>
            <a href="/register" className="navbar-item">
              Sign up
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
