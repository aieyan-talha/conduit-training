import React, { Component } from "react";
import PropTypes from "prop-types";

//Import Components
import Feed from "../components/landing/Feed";
import Tags from "../components/landing/Tags";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getArticles();
  }

  render() {
    const { articles } = this.props.article;

    return (
      <div className="container">
        <br />
        <div className="tile is-ancestor">
          <div className="tile is-parent is-9">
            <div className="container is-fullhd">
              <div className="is-child">
                <Feed feed_title="Global Feed" contents={articles} />
              </div>
            </div>
          </div>
          <Tags title="Popular Tags" tags={["a", "b", "c"]} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
