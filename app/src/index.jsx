import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Card } from 'semantic-ui-react';
import Home1 from './components/Home.jsx'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './views/home.js';
import Itinerary from './views/itinerary.js';
import Logout from './views/logout.js';

import { Provider } from 'react-redux';
import store from './store.js';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.lock = new Auth0Lock('qpfelAKW1EAzyb3RI3pk46SD0deXrJhE', 'cvrcle.auth0.com')
    console.log('we in here')
  }
  
  render() {
    return(
      <Provider store={store}>
        <div>
          <h1 className="cvrcle-logo text-center">
            <span style={{color: '#4885ed'}}>C</span>
            <span style={{color: '#db3236'}}>V</span>
            <span style={{color: '#f4c20d'}}>R</span>
            <span style={{color: '#4885ed'}}>C</span>
            <span style={{color: '#3cba54'}}>L</span>
            <span style={{color: '#db3236'}}>E</span>
          </h1>
          <div className="text-center">
            Auth will go here.
            <Home1 lock={this.lock}/>
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer} />
    <Route path="/home" component={Home} />
    <Route path="/itinerary" component={Itinerary} />
    <Route path="/logout" component={Logout} />
  </Router>
), document.getElementById('appRoot'))
