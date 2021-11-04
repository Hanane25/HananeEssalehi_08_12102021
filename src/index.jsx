//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Header from '../src/components/Header/index';
import Home from '../src/pages/Home/index'
import Footer from '../src/components/Footer/index'
import About from '../src/pages/About/index'
import Error from '../src/pages/Error'
import Apparts from '../src/pages/Apparts';

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


