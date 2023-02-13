import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/logement">
        <Logement />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
