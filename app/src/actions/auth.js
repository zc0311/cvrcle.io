import { hashHistory } from 'react-router'
import AuthService from '../utils/AuthService'
import axios from 'Axios'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

// AUTH0_CLIENT_ID=qpfelAKW1EAzyb3RI3pk46SD0deXrJhE
// AUTH0_CLIENT_SECRET=_pps_7k9PizjlAYup6vI6pUqL2NhSNsttwUQ_F64FwPfSqhLUZXV17I-ocLRpAI9
// AUTH0_DOMAIN=cvrcle.auth0.com


const authService = new AuthService('qpfelAKW1EAzyb3RI3pk46SD0deXrJhE', 'cvrcle.auth0.com')

// Listen to authenticated event from AuthService and get the profile of the user
// Done on every page startup
export function checkLogin() {
  return (dispatch) => {
    // Add callback for lock's `authenticated` event
    authService.lock.on('authenticated', (authResult) => {
      authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error)
          return dispatch(loginError(error))
        AuthService.setToken(authResult.idToken) // static method
        AuthService.setProfile(profile) // static method
        let faceBookID = profile.identities.user_id
        let firstName = profile.give_name
        let lastName = profile.family_name
        let email = profile.email;

        let newUser = {
          firstName,
          lastName,
          email,
          fbID: faceBookID
        }
        axios.get(`http://localhost:3000/users?fbID=${faceBookID}`)
        .then( (response) => {
          if ( response.data === [] ) {
            axios.post(`http://localhost:3000/users`, newUser)
            .then(() => {
              console.log('success')
            })
          }
          return dispatch(loginSuccess(profile))
        })
      })
    })
    // Add callback for lock's `authorization_error` event
    authService.lock.on('authorization_error', (error) => dispatch(loginError(error)))
  }
}

export function addUserIfNotExists() {
  return (dispatch) => {
    
  }
}

export function loginRequest() {
  authService.login()
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(profile) {
  hashHistory.push('/home')
  location.reload()
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function logoutSuccess() {
  authService.logout()
  return {
    type: LOGOUT_SUCCESS
  }
}
