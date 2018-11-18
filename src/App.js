import React, { Component } from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CatForm from './pages/CatForm'
import OnwerForm from './pages/OnwerForm.js'
import Fosterform from './pages/Fosterform.js'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/CatForm' component={CatForm} />
          <Route exact path='/OnwerForm' component={OnwerForm} />
          <Route exact path='/Fosterform' component={Fosterform} />
        </div>
      </Router>
    )
  }
}

export default App;
