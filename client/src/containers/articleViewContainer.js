import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import Component
import ArticleView from "../views/ArticleView";

//Import functions
import { getArticle } from "../actions/articleActions";

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      getArticle: getArticle(dispatch)
    }
  };
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  article: state.article
});

export const articleViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleView);

export default withRouter(articleViewContainer);
