import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
