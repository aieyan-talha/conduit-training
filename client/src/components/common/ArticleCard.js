import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";

const ArticleCard = ({ id, title, subtitle, user_id, date, tags }) => {
  return (
    <body className="box">
      <section className="section">
        <div className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img
                src="https://bulma.io/images/placeholders/32x32.png"
                alt="Placeholder image"
                className="is-rounded"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-6 has-text-success">{user_id}</p>
            <p className="subtitle is-7 has-text-primary">
              <Moment>{date}</Moment>
            </p>
          </div>
          <div className="media-right">
            <button className="button is-danger is-outlined">Like</button>
          </div>
        </div>
        <div className="content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{subtitle}</p>
          </div>
        </div>
        <a href={`/article/${id}`} className="has-text-primary is-size-7">
          Read more ...
        </a>
      </section>
    </body>
  );
};

ArticleCard.propTypes = {};

export default ArticleCard;
