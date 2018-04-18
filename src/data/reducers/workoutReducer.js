import initialState from './initialState';

export default function workoutReducer(state = initialState.workouts, action){
  switch(action.type){
    case "LOAD_WORKOUTS_SUCCESS":
      return action.payload;
    
    default:
      return state;
  }
}