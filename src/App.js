import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Catspage from "./pages/Catspage";
import Catprofile from "./pages/Catprofile";
import Ownerspage from "./pages/Ownerspage";
import Ownerprofile from "./pages/Ownerprofile";
import Fosterspage from "./pages/Fosterspage";
import Fosterprofile from "./pages/Fosterprofile";
import Shelterspage from "./pages/Shelterspage";
// import Shelterdetails from "./pages/Sheltersdetails";
import Vetspage from "./pages/Vetspage";
// import Vetdetails from "./pages/Vetdetails";




class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/cats" component={Catspage} />
          <Route exact path="/cat" component={Catprofile} />
          <Route exact path="/owners" component={Ownerspage} />
          <Route exact path="/owner" component={Ownerprofile} />
          <Route exact path="/fosters" component={Fosterspage} />
          <Route exact path="/foster" component={Fosterprofile} />
          <Route exact path="/shelters" component={Shelterspage} />
          {/* <Route exact path="/shelter" component={Shelterdetails} /> */}
          <Route exact path="/vets" component={Vetspage} />
          {/* <Route exact path="/vet" component={Vetdetails} /> */}


        </div>
      </Router>
    );
  }
}

export default App;
