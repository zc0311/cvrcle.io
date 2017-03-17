import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Card } from 'semantic-ui-react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './views/home.js';
import Itinerary from './views/itinerary.js';
import Logout from './views/logout.js';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1 className="cvrcle-logo text-center">
          <span style={{color: '#4885ed'}}>C</span>
          <span style={{color: '#db3236'}}>V</span>
          <span style={{color: '#f4c20d'}}>R</span>
          <span style={{color: '#4885ed'}}>C</span>
          <span style={{color: '#3cba54'}}>L</span>
          <span style={{color: '#db3236'}}>E</span>
        </h1>

        <div>
          {/* replace below div with auth0 */}
        </div>
      </div>
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