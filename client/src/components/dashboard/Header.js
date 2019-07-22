import React from "react";

const Header = ({ img_src, username, user_id }) => {
  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <figure className="image is-128x128">
                <img
                  src={img_src}
                  alt="https://i.ibb.co/J3zVWnq/def-profile-pic.png"
                  className="is-rounded"
                />
              </figure>
            </div>
          </div>
          <div className="is-size-4 has-text-weight-bold">{username}</div>
        </div>
        <a
          className="button is-pulled-right is-primary is-outlined"
          href="/settings"
        >
          Edit Profile Settings
        </a>
      </div>
    </section>
  );
};
export default Header;
