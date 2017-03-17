import { createStore, compose, applyMiddleware } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import { browerHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/reducers_index'

const userSession = [
  {
    "id": 1,
    "body": "I am a test"
  }
]

// // creating an object for the default data
const defaultState = {
  userSession: userSession
};

const store = createStore(
  rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const history = syncHistoryWithStore(browerHistory, store);

export default store;
