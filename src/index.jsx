//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Header from './components/Header/index';
import Home from './pages/Home/index'
import Footer from './components/Footer/index'
import About from './pages/About/index'
import Error from './pages/Error'
import Apparts from './pages/Apparts';

//Style
import './style/index.css'


ReactDOM.render(
  <React.StrictMode>

    <Router>

      <Header />

      <Switch>

        {/* Home page */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* About page */}
        <Route path="/about">
          <About />
        </Route>

        {/* Apparts page */}
        <Route exact path="/apartment/:id">
          <Apparts />
        </Route>

        {/* Error page */}
        <Route>
          <Error />
        </Route>

      </Switch>

      <Footer />

    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


