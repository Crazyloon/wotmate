import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import WorkoutApi, { workoutTypes, workoutIntensity } from '../../data/api/workoutApi';
import * as workoutActions from '../../data/actions/workoutActions';

import WorkoutForm from './WorkoutForm';
import Table from '../shared/Table';
import Button from '../shared/Button';

function _getDefaultExerciseSet(name, previousSet){
  switch(name){
    case 'lift': 
      return {
        name: previousSet.name,
        reps: previousSet.reps || 8,
        weight: previousSet.weight || 100                   
      };
    case 'cardio':
      return {
        name: previousSet.name,
        duration: previousSet.duration || 30,
        distance: previousSet.distance || 100                   
      };
    case 'activity':
      return {
        name: previousSet.name,
        duration: previousSet.duration || 30,
        intensity: previousSet.intensity
      };
    default: 
      return {
        name: previousSet.name,
        reps: previousSet.reps || 8,
        weight: previousSet.weight || 100                   
      };
  }
}
class ManageWorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: {
        id: 'workout004',
        date: '',
        name: '',
        muscles: [],
        exercises: []
      },
      exercise: {
        tag: '',
        type: {},
        sets: []
      },
      newSet: {
        name: ''
      },
      saving: false,
      errors: {},
      customWorkout: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onExerciseChange = this.onExerciseChange.bind(this);
    this.onLiftChange = this.onLiftChange.bind(this);
    this.onCardioChange = this.onCardioChange.bind(this);
    this.onActivityChange = this.onActivityChange.bind(this);
    this.onAddSet = this.onAddSet.bind(this);
    this.onSaveWorkout = this.onSaveWorkout.bind(this);
  }

  
  componentDidUpdate(){
    // Hack in the icon for SVGs in a React Element
    // const saveBtn = document.querySelector("#saveWorkout > svg");
    // if (saveBtn && !saveBtn.classList.contains("fa-plus")){
    //   saveBtn.classList.add("fa-plus");
    // }
  }

  isFormValid(fieldCheck){
    let isValid = true;
    let errors = {};
    if(this.state.exercise.sets.length < 1){
      errors.name = 'Give the workout a longer name (3 character minimum).';
      isValid = false;
    }
    // TODO ADD MORE VALIDATION.
    this.setState({errors: errors});
    return isValid;
  }

  onNameChange(e){
    const {name: key, value } = e.target;
    const workout = Object.assign({}, this.state.workout);
    workout[key] = value;
    this.setState({
      workout: workout
    });
  }

  onExerciseChange(event){ // Exercise Type Drop Down
    const {name: key, value } = event.target;
    let exercise = Object.assign({}, this.state.exercise);
    if(key === 'type'){
      exercise.sets = [];
      exercise.type = workoutTypes[value];
      exercise.tag = value;
    }
    this.setState((previousState) => {
      return {
        exercise: exercise,
        newSet: _getDefaultExerciseSet(value, previousState.newSet)
      };
    });
    return;
  }

  onLiftChange(e){
    let {name: key, value} = e.target;
    const newSet = Object.assign({}, this.state.newSet);
    if((key === 'reps' || key === 'weight') && value.length > 0)
      value = Number.parseFloat(value);
    newSet[key] = value;

    const exercise = Object.assign({}, this.state.exercise);
    exercise.sets[0] = newSet;
    this.setState({newSet: newSet, exercise: exercise});
    return;
  }

  onCardioChange(e){
    let {name: key, value} = e.target;
    const newSet = Object.assign({}, this.state.newSet);
    if((key === 'duration' || key === 'distance') && value.length > 0)
      value = Number.parseFloat(value);
    newSet[key] = value;

    const exercise = Object.assign({}, this.state.exercise);
    exercise.sets[0] = newSet;
    this.setState({newSet: newSet, exercise: exercise});
    return;
  }

  onActivityChange(e){
    let {name: key, value} = e.target;
    const newSet = Object.assign({}, this.state.newSet);
    if((key === 'duration') && value.length > 0)
      value = Number.parseFloat(value);
    newSet[key] = value;

    const exercise = Object.assign({}, this.state.exercise);
    exercise.sets[0] = newSet;
    this.setState({newSet: newSet, exercise: exercise});
    return;
  }

  onAddSet(e){
    event.preventDefault();

    // check for valid state
    //if (!this.isFormValid()) return;
    const workout = Object.assign({}, this.state.workout);
    const exercises = workout.exercises;
    // get exercise type
    const exerciseType = this.state.exercise.type;
    if(exerciseType === ''){
      const errors = Object.assign({}, this.state.errors);
      errors.type = "Select workout type to add a set.";
      this.setState({errors: errors});
      return;
    }
    // if exercises has that type
    let sets;
    exercises.forEach(ex => {
      if(ex.type === exerciseType){
        //  add exercise set to sets for that exercise type
        sets = ex.sets;
        sets.push(this.state.newSet); // can push newSet
      }
    });
    // else push the whole exercise to the list
    if(!sets)
      exercises.push(this.state.exercise);

    // finnally, update the workout to reflect the new set added
    this.setState((prevState) => {
      
      return {
        workout: workout,
        exercise: {
          tag: this.state.exercise.tag,
          type: this.state.exercise.type,
          sets: [this.state.newSet]
        }
      };
    });
    return;
    // handle errors
  }

  onSaveWorkout(e){
    const workout = Object.assign({}, this.state.workout);
    workout.id = 'workout004';
    workout.date = new Date();
    // dispatch call to add the workout
    this.props.actions.addWorkout(workout)
      .then(() => {
        this.props.history.push('/workouts');
      })
      .catch(error => {
        throw(error);
      });
    //WorkoutApi.addWorkout(workout);
    //console.log(this.state.workout);
  }

  isValidExercise(tag){

  }

  render() { 
    return (
      <React.Fragment>
        <WorkoutForm 
          workout={this.state.workout}
          exercise={this.state.exercise}
          newSet={this.state.newSet}
          customWorkout={this.state.customWorkout} 
          onNameChange={this.onNameChange} 
          onExerciseChange={this.onExerciseChange} 
          onLiftChange={this.onLiftChange} 
          onCardioChange={this.onCardioChange} 
          onActivityChange={this.onActivityChange} 
          onAddSet={this.onAddSet}
          onSave={this.onSave} 
          errors={this.state.errors}
          saving={this.state.saving}
        />
  
        <Table
          containerClass={"col-md-8 offset-md-2 marginTop__20"}
          exercises={this.state.workout.exercises}
          title="New Workout"/>

        {
        this.state.workout.exercises.length > 0 ? 
          <div className="col-md-8 offset-md-2 button--save__rightAlign">
            <Button
              id={'saveWorkout'}
              styleClass={"btn btn-primary bevel bevel-md"}
              type="button"
              diabled={this.state.saving}
              value={this.state.saving ? 'Saving...' : 'Save Workout'}
              onClick={this.onSaveWorkout}
              icon={<i className="fas fa-plus"/>}
              text={"Save Workout"}
            />  
          </div>
        : null
        }
      </React.Fragment>
    );
  }
}

ManageWorkoutPage.propTypes = {
  history: PropTypes.object,
  actions: PropTypes.object.isRequired
};
 
function mapStateToProps(state, ownProps){
  let workout = {
    id: 'workout001',
    date: new Date('2018/04/15 2:00'),
    name: 'Chest',
    muscles: [
      'Pectoralis Major',
      'Pectoralis Minor',
      'Pecotralis Duh!'
    ],
    exercises: []
  };

  return{
    workout: state.workout
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(workoutActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageWorkoutPage));