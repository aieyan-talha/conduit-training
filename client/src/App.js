import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./../node_modules/bulma/css/bulma.css";

//Importing components for basic layout
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Landing from "./views/Landing";

import Pages from "./views/Pages";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="App">
          <Navbar />
          <Pages />
        </div>
      </div>
    </Router>
  );
}

export default App;
