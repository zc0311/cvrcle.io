//combining all reducers into one rootReducer

import { combineReducers } from 'redux';
import { LocationReducer } from './reducer_locations';

const rootReducer = combineReducers({
  storeLocations: LocationReducer
});

export default rootReducer;
