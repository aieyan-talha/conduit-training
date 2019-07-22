import React from "react";

//Import component
import ProfileCard from "../common/ProfileCard";

const Header = ({ title, username, date, article_id, tags }) => {
  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <div className="title has-text-weight-bold is-2 ">{title}</div>
          <ProfileCard username={username} date={date} />
        </div>
        <br />
        <div className="buttons are-small">
          <div className="button is-primary is-outlined">Tag</div>
        </div>
      </div>
    </section>
  );
};

export default Header;
