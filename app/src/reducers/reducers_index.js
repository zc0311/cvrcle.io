//combining all reducers into one rootReducer

import { combineReducers } from 'redux';
import SessionReducer from './reducer_sessions';

const rootReducer = combineReducers({
  userSession: SessionReducer,
});

export default rootReducer;
