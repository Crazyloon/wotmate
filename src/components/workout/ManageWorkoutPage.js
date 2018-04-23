import React from 'react';
import { connect } from 'react-redux';
import WorkoutForm from './WorkoutForm';
import Table from '../shared/Table';
import { workoutTypes, workoutIntensity } from '../../data/api/workoutApi';

function _getNewExerciseSet(name, previousSet){
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
        intensity: previousSet.intensity || workoutIntensity.variable                   
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
        id: 'workout001',
        date: '',
        name: '',
        muscles: [],
        exercises: [{
          type: workoutTypes.lift,
          sets: [            
            {
              name: 'Bench Press',
              reps: 8,
              weight: 130
            },
            {
              name: 'Incline Bench Press',
              reps: 8,
              weight: 100
            },
            {
              name: 'Decline Bench Press',
              reps: 8,
              weight: 80
            }
          ]
        }]
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

    this.onExerciseChange = this.onExerciseChange.bind(this);
    this.onLiftChange = this.onLiftChange.bind(this);
    this.onCardioChange = this.onCardioChange.bind(this);
    this.onAddSet = this.onAddSet.bind(this);
    //this.onSave = this.onSave.bind(this);
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
        newSet: _getNewExerciseSet(value, previousState.newSet)
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

  render() { 
    return (
      <React.Fragment>
        <WorkoutForm 
          workout={this.state.workout}
          exercise={this.state.exercise}
          newSet={this.state.newSet}
          customWorkout={this.state.customWorkout} 
          onExerciseChange={this.onExerciseChange} 
          onLiftChange={this.onLiftChange} 
          onCardioChange={this.onCardioChange} 
          onAddSet={this.onAddSet}
          onSave={this.onSave} 
          errors={this.state.errors}
          saving={this.state.saving}
        />
  
        <Table
          exercises={this.state.workout.exercises}
          title="New Workout"/>
      </React.Fragment>
    );
  }
}
 
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

export default connect(mapStateToProps)(ManageWorkoutPage);