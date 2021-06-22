import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
