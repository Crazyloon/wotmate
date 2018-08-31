<<<<<<< HEAD
import * as actionTypes from '../constants/actionTypes';
import workoutApi from '../api/workoutApi';

export function loadWorkoutsSuccess(workouts){
  return {
    type: actionTypes.LOAD_WORKOUTS_SUCCESS,
    payload: workouts
  };
}

export function addWorkoutSuccess(workouts){
  return{
    type: actionTypes.CREATE_WORKOUT_SUCCESS,
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

export function addWorkout(workout){
  return function(dispatch){
    return workoutApi.addWorkout(workout).then(workouts =>{
      dispatch(addWorkoutSuccess(workouts));
    }).catch(err =>{
      throw(err);
    });
  };
=======
import * as actionTypes from '../constants/actionTypes';
import workoutApi from '../api/workoutApi';

export function loadWorkoutsSuccess(workouts){
  return {
    type: actionTypes.LOAD_WORKOUTS_SUCCESS,
    payload: workouts
  };
}

export function addWorkoutSuccess(workouts){
  return{
    type: actionTypes.CREATE_WORKOUT_SUCCESS,
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

export function addWorkout(workout){
  return function(dispatch){
    return workoutApi.addWorkout(workout).then(workouts =>{
      dispatch(addWorkoutSuccess(workouts));
    }).catch(err =>{
      throw(err);
    });
  };
>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
}