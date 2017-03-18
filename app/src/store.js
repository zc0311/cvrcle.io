import { createStore, compose } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import { browerHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/reducers_index'

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const history = syncHistoryWithStore(browerHistory, store);

export default store;
