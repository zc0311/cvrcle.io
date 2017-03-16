import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../../utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'

const auth = new AuthService('qpfelAKW1EAzyb3RI3pk46SD0deXrJhE', 'cvrcle.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  console.log("makeroutes");
  return (
    <Route
    path="/"
    getComponent={(location, callback) => {
      console.log("making it in");
      require.ensure([], function (require) {
        console.log("asdfasdfasdf");
        // callback(null, require('./Container.jsx'));
      });
    }}
  />
    // <Route path="/" getComponent={Container} auth={auth}>
    //   <IndexRedirect to="/home" />
    //   <Route path="home" component={Home} onEnter={requireAuth} />
    //   <Route path="login" component={Login} />
    // </Route>
  )
}

export default makeMainRoutes