import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Catspage from "./pages/Catspage";
import Catprofile from "./pages/Catprofile";
import Owners from "./pages/Owners";
import Ownerprofile from "./pages/Ownerprofile";
import Fosters from "./pages/Fosters";
import Fosterprofile from "./pages/Fosterprofile";
import Shelters from "./pages/Shelters";
import Shelterdetails from "./pages/Shelterdetails";
import Vets from "./pages/Vets";
// import Vetdetails from "./pages/Vetdetails";

import CatForm from "./pages/CatForm";
import OwnerForm from "./pages/OwnerForm.js";
import Fosterform from "./pages/Fosterform.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="backGround" >
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/cats" component={Catspage} />
          <Route exact path="/cat/:id" component={Catprofile} />
          <Route exact path='/addcat' component={CatForm} />

          <Route exact path="/owners" component={Owners} />
          <Route exact path="/owner" component={Ownerprofile} />
          <Route exact path="/fosters" component={Fosters} />
          <Route exact path="/shelters" component={Shelters} />
          <Route exact path="/vets" component={Vets} />

          <Route exact path='/OwnerForm' component={OwnerForm} />
          <Route exact path='/Fosterform' component={Fosterform} />
          <Route exact path="/CatForm" component={CatForm} />
        </div>
      </Router>
    );
  }
}

export default App;
