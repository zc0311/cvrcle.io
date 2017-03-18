import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { Card, Image } from 'semantic-ui-react';
import AuthLock from './components/AuthLock.jsx'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
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
    this.lock = new Auth0Lock('qpfelAKW1EAzyb3RI3pk46SD0deXrJhE', 'cvrcle.auth0.com', {
      redirectUrl: 'http://localhost:8080/',
      responseType: 'token',
    }, browserHistory.replace('/#/home'))
  }

  // componentWillMount() {
  //   this.lock = new Auth0Lock('qpfelAKW1EAzyb3RI3pk46SD0deXrJhE', 'cvrcle.auth0.com')
  // }

  
  render() {
    return(
      // <Provider store={store}>
        <div>
          <Image className="cvrcle-logo" src='../cvrcle.png' />
          <div className="text-center">
            Hi Regina.
            <AuthLock lock={this.lock}/>
          </div>
        </div>
      // </Provider>
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
