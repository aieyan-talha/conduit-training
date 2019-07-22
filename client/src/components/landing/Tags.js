import React from "react";
import PropTypes from "prop-types";

const Tags = ({ title, tags }) => {
  return (
    <div className="tile is-parent ">
      <div className="tile is-child is-10">
        <div className="card has-background-light">
          <div className="card-header">
            <div className="card-header-title">{title}</div>
          </div>
          <div className="card-content">
            <div className="buttons are-small are-rounded">
              {tags.map((items, key) => {
                return (
                  <a href="/" className="button is-info">
                    {items}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Tags.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array
};
export default Tags;
