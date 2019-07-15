import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

import { GET_ERRORS, SET_CURRENT_USER } from "./common";

//Function to register the user. Uses axios to make a call to the backend server and registers the users credentials
export const registerUser = dispatch => (userData, history) => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//This function uses redux as middleware to set the current user, to be used by all pages
export const setCurrentUser = decodedData => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedData
  };
};

//This function logs in the user, by setting the token to local storage and ensuring the session
export const loginUser = dispatch => userData => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Set token to local storage
      const { token } = res.data;

      //Set token to local storage
      localStorage.setItem("jwtToken", token);

      //Set the token to authHeader
      setAuthToken(token);

      //Decode the token to get user data
      const decoded = jwt_decode(token);

      //Set current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

//Function to logout the user
export const logoutUser = () => dispatch => {
  //Remove token from local storage
  localStorage.removeItem("jwt");

  //Set authentication header to false
  setAuthToken(false);

  //Dispatch empty object
  dispatch(setCurrentUser({}));
};
