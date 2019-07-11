import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subtitle, route }) => {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="title has-text-weight-medium">{title}</div>
        <div className="subtitle">
          <a href={route} className="has-text-success has-text-weight-light">
            {subtitle}
          </a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default Header;
