// import React from "react";
// import Navbar from "./Components/Navbar";
// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// // import "./App.css";
// // import Home from "./Components/Home/Home";
// // import BreakingBadApp from "./Components/BreakingBad/BreakingBadApp";

// // function App() {
// //   return (
// //     <>
// //       <Router>
// //         <Navbar />
// //         <Switch>
// //           <Route path='/' exact component={Home}></Route>

// //           <Route path='/BreakingBad' component={BreakingBadApp}></Route>
// //         </Switch>
// //       </Router>
// //       {/* <img src='/images/img-1.jpg' alt='nothing'></img> */}
// //     </>
// //   );
// // }

// const App = () => {
//   return <>helloS</>;
// };

// export default App;
import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BreakingBadApp from "./Components/BreakingBad/BreakingBadApp";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact as component={Home}></Route>
          <Route
            path='/BreakingBad'
            exact
            as
            component={BreakingBadApp}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
