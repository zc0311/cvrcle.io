import { createStore, compose } from 'redux';
import { browerHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/reducers_index'

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
