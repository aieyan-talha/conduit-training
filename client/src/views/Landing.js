//This is the landing page displayed on the Home page
import React, { Component } from "react";

//Importing Components
import Header from "../components/landing/Header";
import Tags from "../components/landing/Tags";
import Feed from "../components/landing/Feed";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      tags: ["butt", "dragon", "someother"]
    };
  }

  render() {
    return (
      <div>
        <Header title="conduit" subtitle="A place to share your knowledge" />

        <div className="tile is-ancestor">
          <div className="tile is-parent is-9">
            <div className="is-child">
              <div className="box">
                <Feed
                  feed_title="Global Feed"
                  contents="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
              </div>
            </div>
          </div>
          <Tags title="Popular Tags" tags={this.state.tags} />
        </div>
      </div>
    );
  }
}
export default Landing;
