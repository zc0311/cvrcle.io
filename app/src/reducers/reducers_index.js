//combining all reducers into one rootReducer

import { combineReducers } from 'redux';
import LocationReducer from './reducer_locationSearch';

const rootReducer = combineReducers({
  locationInput: LocationReducer,
});

export default rootReducer;
