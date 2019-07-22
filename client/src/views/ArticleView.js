import React, { Component } from "react";
import PropTypes from "prop-types";

//Import components
import Header from "../components/article/Header";
import Body from "../components/article/Body";

class ArticleView extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getArticle(this.props.match.params.id);
  }

  render() {
    const { article } = this.props.article;
    console.log(article);
    return (
      <div>
        <Header
          title={article.title}
          username={article.username}
          date={article.date}
        />
        <Body
          text={article.text}
          username={article.username}
          date={article.date}
        />
      </div>
    );
  }
}

ArticleView.propTypes = {};

export default ArticleView;
