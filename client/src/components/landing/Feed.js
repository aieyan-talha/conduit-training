import React from "react";

const Feed = ({ feed_title, contents }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title ">
          <a href="/" className="button is-white has-text-success">
            {feed_title}
          </a>
        </div>
      </div>
      <div className="card-content">{contents}</div>
    </div>
  );
};
export default Feed;
