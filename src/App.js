import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/services' component={Services}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/sign-up' component={SignUp}></Route>
        </Switch>
      </Router>
      {/* <img src='/images/img-1.jpg' alt='nothing'></img> */}
    </>
  );
}

export default App;
