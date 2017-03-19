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
    });
    this.setState({ idToken: this.getIdToken() });
  }

  createLock() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  }

  getIdToken() {
    var idToken = localStorage.getItem('id_token');
    var authHash = '';
    console.log(idToken)
    // If there is no JWT in local storage and there is one in the URL hash,
    // save it in local storage
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('id_token', authHash.id_token);
      }
      if (authHash.error) {
        // Handle any error conditions
        console.log("Error signing in", authHash);
      }
    }
    return idToken;
  }

  render() {
    return (
      <div>
        <Image className="cvrcle-logo" src='../cvrcle.png' />
        <div className="text-center">
          Hi Regina.
            <AuthLock lock={this.lock} />
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer} />
      <Route path="/home" component={Home} />
      <Route path="/itinerary" component={Itinerary} />
      <Route path="/logout" component={Logout} />
    </Router>
  </Provider>
), document.getElementById('appRoot'))
