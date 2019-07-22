import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import functions
import { getArticles, getArticlesByUserId } from "../actions/articleActions";

//Import view
import Home from "../views/Home";

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  article: state.article
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      getArticles: getArticles(dispatch),
      getArticlesByUserId: getArticlesByUserId(dispatch)
    }
  };
};

export const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default withRouter(homeContainer);
