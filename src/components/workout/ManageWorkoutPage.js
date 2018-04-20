import React from 'react';
import { connect } from 'react-redux';
import WorkoutForm from './WorkoutForm';

class ManageWorkoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workout: {
        id: 'workout001',
        date: '',
        type: '',
        muscles: [],
        exercises: []
      },
      saving: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  isFormValid(fieldCheck){
    let isValid = true;
    let errors = {};
    if(this.state.workout.type.length < 3){
      errors.type = 'Give the workout a longer type (3 character minimum).';
      isValid = false;
    }
    // TODO ADD MORE VALIDATION.
    this.setState({errors: errors});
    return isValid;
  }

  onChange(event){
    const field = event.target.name;
    let workout = Object.assign({}, this.state.workout);
    workout[field] = event.target.value;
                                        //dangerous alteration of state
                                        delete this.state.errors[field];
    this.setState({workout: workout});
    return;
  }

  onSave(event){
    event.preventDefault();

    // check for valid state
    if (!this.isFormValid()) return;
    console.log('saving');
    // handle errors
  }

  render() { 
    return (
      <WorkoutForm 
        workout={this.state.workout} 
        onChange={this.onChange} 
        onSave={this.onSave} 
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}
 
function mapStateToProps(state, ownProps){
  let workout = {
    id: 'workout001',
    date: new Date('2018/04/15 2:00'),
    type: 'Chest',
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