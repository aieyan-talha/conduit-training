import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <section className="section has-text-centered has-background-success">
        <div className="container">
          <h1 className="title has-text-white has-text-weight-bold">{title}</h1>
          <h2 className="subtitle has-text-white">{subtitle}</h2>
        </div>
      </section>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default Header;
