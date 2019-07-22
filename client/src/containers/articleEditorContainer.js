import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import View
import ArticleEditor from "../views/ArticleEditor";

//Import functions
import { addArticle } from "../actions/articleActions";

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      addArticle: addArticle(dispatch)
    }
  };
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  article: state.article
});

export const articleEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleEditor);

export default withRouter(articleEditorContainer);
