import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

//Import Component
import Dashboard from "../views/Dashboard";

//Import Functions
import { getArticles, getArticlesByUserId } from "../actions/articleActions";

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

export const dashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default withRouter(dashboardContainer);
