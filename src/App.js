import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import CatForm from "./pages/CatForm";


class App extends Component {
 render() {
   return (
     <Router>
       <div className="container">
         {/* <Route exact path="/" component={Login} /> */}
         {/* <Route exact path="/dashboard" component={Dashboard} /> */}
         <Route exact path="/" component={CatForm} />
       </div>
     </Router>
   );
 }
=======
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
>>>>>>> master
}

export default App;