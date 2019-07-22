import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Import components
import ArticleCard from "../common/ArticleCard";

const Feed = ({ feed_title, contents }) => {
  let errors = {};
  if (contents.length === 0) {
    errors = "No Articles to show ...";
  }

  //{errors && <div className="has-text-dark is-size-5">{errors}</div>}

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title ">
          <a href="/" className="button is-white has-text-success">
            {feed_title}
          </a>
        </div>
      </div>
      <div className="card-content">
        {contents.map(article => (
          <ArticleCard
            id={article._id}
            title={article.title}
            subtitle={article.subtitle}
            user_id={article.username}
            date={article.date}
            tags={article.tags}
          />
        ))}
      </div>
    </div>
  );
};

Feed.propTypes = {};

const mapStateToProps = state => ({
  errors: state.errros,
  article: state.article
});

export default connect(
  mapStateToProps,
  {}
)(Feed);
