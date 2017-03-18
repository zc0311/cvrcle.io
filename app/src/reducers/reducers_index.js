//combining all reducers into one rootReducer

import { combineReducers } from 'redux';
import { MarkerReducer } from './reducer_sessions';

const rootReducer = combineReducers({
  markerChecker: MarkerReducer
});

export default rootReducer;
