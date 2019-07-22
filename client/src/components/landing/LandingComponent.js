//This is the landing page displayed on the Home page
import React, { Component } from "react";
import PropTypes from "prop-types";

//Importing Components
import Header from "./Header";
import Tags from "./Tags";
import Feed from "./Feed";

class LandingComponent extends Component {
  constructor() {
    super();
    this.state = {
      tags: ["butt", "dragon", "someother"],
      articles: []
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getArticles();
  }

  render() {
    //Get Articles from props
    const { articles } = this.props.article;

    return (
      <div>
        <Header title="conduit" subtitle="A place to share your knowledge" />

        <div className="tile is-ancestor">
          <div className="tile is-parent is-9">
            <div className="container is-fullhd">
              <div className="is-child">
                <div className="box">
                  <Feed feed_title="Global Feed" contents={articles} />
                </div>
              </div>
            </div>
          </div>
          <Tags title="Popular Tags" tags={this.state.tags} />
        </div>
      </div>
    );
  }
}

LandingComponent.propTypes = {};

export default LandingComponent;
