import { combineReducers } from 'redux';
import workouts from './workoutReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  workouts: workouts,
  routing: routerReducer
});

export default rootReducer;