import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Header from './components/Header'
import Error from './components/Error'
import Propos from './pages/Propos'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat, sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin: 40px 100px 0 100px;
  }
`
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/logement">
          <Logement />
        </Route>
        <Route path="/propos">
          <Propos />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
