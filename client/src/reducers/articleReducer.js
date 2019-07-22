import is_empty from "../is-empty";

import { ADD_ARTICLE, GET_ARTICLES, GET_ARTICLE } from "../actions/common";

const initialState = {
  article: {},
  articles: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, article: action.payload }; //[action.payload, ...state.articles] };

    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };

    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload
      };

    default:
      return state;
  }
}
