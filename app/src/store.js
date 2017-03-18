import { createStore, compose } from 'redux';
import { browerHistory } from 'react-router';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

//import root reducer
import rootReducer from './reducers/reducers_index'

const defaultState = {
  storeLocations: []
}

const store = createStore(
  rootReducer, defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
