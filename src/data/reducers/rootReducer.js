<<<<<<< HEAD
import { combineReducers } from 'redux';
import workouts from './workoutReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  workouts: workouts,
  routing: routerReducer
});

=======
import { combineReducers } from 'redux';
import workouts from './workoutReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  workouts: workouts,
  routing: routerReducer
});

>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
export default rootReducer;