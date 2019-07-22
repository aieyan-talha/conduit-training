import axios from "axios";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, ADD_ARTICLE, GET_ARTICLES, GET_ARTICLE } from "./common";

//Function to add a new article
export const addArticle = dispatch => (articleData, history) => {
  axios
    .post("/api/article", articleData)
    .then(res => {
      history.push("/");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Function to get all articles
export const getArticles = dispatch => () => {
  axios
    .get("/api/article")
    .then(res => dispatch({ type: GET_ARTICLES, payload: res.data }))
    .catch({ type: GET_ARTICLES, payload: null });
};

//Get Singular Article through its ID
export const getArticle = dispatch => article_id => {
  axios
    .get(`/api/article/${article_id}`)
    .then(res => {
      dispatch({
        type: GET_ARTICLE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ARTICLE,
        payload: null
      })
    );
};

//Get all articles by User ID (Used to load articles of a single user)
export const getArticlesByUserId = dispatch => user_id => {
  axios
    .get(`/api/article/user/${user_id}`)
    .then(res => {
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ARTICLES,
        payload: null
      })
    );
};
