//combining all reducers into one rootReducer

import { combineReducers } from 'redux';
import { MarkerReducer } from './reducer_sessions';

const rootReducer = combineReducers({
  // userSession: SessionReducer,
  markerChecker: MarkerReducer
});

export default rootReducer;
