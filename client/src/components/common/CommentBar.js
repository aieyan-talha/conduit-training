import React from "react";

//Import Component
import TextAreaInputField from "./TextAreaInputField";

const CommentBar = () => {
  return (
    <div className="card">
      <div className="card-content">
        <TextAreaInputField
          name="comment"
          type="text"
          placeholder="Write a comment..."
        />
      </div>
      <div className="card-footer">
        <div className="container">
          <div className="button is-success is-pulled-right">Post Comment</div>
        </div>
      </div>
    </div>
  );
};

export default CommentBar;
