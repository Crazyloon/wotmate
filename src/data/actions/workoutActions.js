import * as actionTypes from '../constants/actionTypes';
import workoutApi from '../api/workoutApi';

export function loadWorkoutsSuccess(workouts){
  return {
    type: actionTypes.LOAD_WORKOUTS_SUCCESS,
    payload: workouts
  };
}

export function loadWorkouts(){
  return function(dispatch){
    return workoutApi.getAllWorkouts().then(workouts => {
      dispatch(loadWorkoutsSuccess(workouts));
    }).catch(err => {
      throw(err);
    });
  };
}