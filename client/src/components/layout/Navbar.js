import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    //Navbar will load these links when the user is not logged in
    const guestLinks = (
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
    );

    //Navbar will load these links when the user is authenticated
    const userLinks = (
      <div className="navbar-menu">
        <div className="navbar-end">
          <a href="/dashboard" className="navbar-item is-7">
            Home
          </a>
          <a href="/new_article" className="navbar-item">
            New Article
          </a>
          <a href="/settings" className="navbar-item">
            Settings
          </a>
          <a href="/dashboard" className="navbar-item">
            {user.username}
          </a>
        </div>
      </div>
    );

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
        {isAuthenticated ? userLinks : guestLinks}
      </nav>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
