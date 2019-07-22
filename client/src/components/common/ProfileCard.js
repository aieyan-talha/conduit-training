import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import classnames from "classnames";

const ProfileCard = ({ username, date, auth }) => {
  const { isAuthenticated } = auth;

  const guestLinks = (
    <div>
      <a
        className="button is-primary is-outlined is-pulled-left"
        title="Disabled button"
        disabled
      >
        Follow {username}
      </a>

      <a
        className="button is-success is-outlined is-pulled-left"
        title="Disabled button"
        disabled
      >
        Favorite Article
      </a>
    </div>
  );

  const userLinks = (
    <div>
      <a className="button is-primary is-outlined is-pulled-left">
        Follow {username}
      </a>

      <a className="button is-success is-outlined is-pulled-left">
        Favorite Article
      </a>
    </div>
  );

  return (
    <div className="media">
      <div className="media-left">
        <figure className="image is-32x32">
          <img
            src="https://i.ibb.co/J3zVWnq/def-profile-pic.png"
            alt="https://ibb.co/tLbgwBz"
            className="is-rounded"
          />
        </figure>
      </div>
      <div className="media-left">
        <p className="title is-6 has-text-success">{username}</p>
        <p className="subtitle is-7 has-text-primary">
          <Moment>{date}</Moment>
        </p>
      </div>
      <div className="media-left">
        <div className="buttons are-small">
          {isAuthenticated ? userLinks : guestLinks}
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(ProfileCard);
