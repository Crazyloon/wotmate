<<<<<<< HEAD
import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

export default function workoutReducer(state = initialState.workouts, action){
  switch(action.type){
    case actionTypes.LOAD_WORKOUTS_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_WORKOUT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
=======
import initialState from './initialState';
import * as actionTypes from '../constants/actionTypes';

export default function workoutReducer(state = initialState.workouts, action){
  switch(action.type){
    case actionTypes.LOAD_WORKOUTS_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_WORKOUT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
}