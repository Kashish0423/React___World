import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services.Js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/services' component={Services}></Route>
        </Switch>
      </Router>
      {/* <img src='/images/img-1.jpg' alt='nothing'></img> */}
    </>
  );
}

export default App;
