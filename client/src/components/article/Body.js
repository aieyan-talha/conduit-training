import React from "react";

//Import Components
import ProfileCard from "../common/ProfileCard";
import CommentBar from "../common/CommentBar";

const Body = ({ text, username, date }) => {
  return (
    <div className="card">
      <div className="card-content is-family-code">{text}</div>
      <div className="card-footer">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <br />
              <ProfileCard username={username} date={date} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <CommentBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
