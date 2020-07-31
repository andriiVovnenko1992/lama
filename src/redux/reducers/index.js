import { combineReducers } from 'redux';
import jobsReducer from "./jobsReducer";

const reducers = combineReducers({
  jobsReducer,
});

export default reducers;