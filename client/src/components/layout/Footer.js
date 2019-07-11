import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div className="container has-background-grey-dark">
          <div className="content has-text-centered ">
            <a
              href="https://demo.realworld.io/#/"
              className="link has-text-white"
            >
              <strong>Fork on Github</strong>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
