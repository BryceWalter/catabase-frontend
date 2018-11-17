import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
