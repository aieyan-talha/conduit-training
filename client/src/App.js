import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import "./../node_modules/bulma/css/bulma.css";

import store from "./store";

//Importing components for basic layout
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Landing from "./views/Landing";

import Pages from "./views/Pages";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

//Check if token is set in local storage to maintain session
if (localStorage.jwtToken) {
  
  //Set auth token header
  //This is done to make sure that every request contains the token, and isAuthenticated is not falsified
  setAuthToken(localStorage.jwtToken);

  //Decode token to get user data
  const decodedData = jwt_decode(localStorage.jwtToken);

  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decodedData));

  //Check for expired token
  const currentTime = Date.now / 1000;
  if (decodedData.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());

    //Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <div className="App">
            <Navbar />
            <Pages />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
