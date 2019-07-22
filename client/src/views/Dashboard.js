import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Import Components
import Header from "../components/dashboard/Header";
import Feed from "../components/landing/Feed";

class Dashboard extends Component {
  componentDidMount() {
    const { actions, auth } = this.props;
    actions.getArticlesByUserId(auth.user.id);
  }

  render() {
    const { articles } = this.props.article;
    const { user } = this.props.auth;

    return (
      <div className="contianer">
        <Header
          img_src="https://i.ibb.co/J3zVWnq/def-profile-pic.png"
          username={user.username}
        />

        <Feed feed_title="My Articles" contents={articles} />
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
