import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Login}></Route>
      </Router>
    );
  }
}

export default App;
