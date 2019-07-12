//This file is used to set the token to each and every user request, so that when the token expires,
//the user would no longer be able to make request before loging in again
import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete authorization header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
