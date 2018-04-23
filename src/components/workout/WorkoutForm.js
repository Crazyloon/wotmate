import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';
import LiftForm from './LiftForm';
import CardioForm from './CardioForm';
import { workoutTypes } from '../../data/api/workoutApi';

const WorkoutForm = ({ workout, exercise, newSet, customWorkout,
                       onExerciseChange, onLiftChange, onAddSet, onCardioChange,
                       saving, errors }) => {
  let formClass = `needs-validation`;
  let dropDownOptions = [{value: "lift", text: "Lift"}, 
                         {value: "cardio", text:"Cardio"}, 
                         {value: "activity", text:"Activity"}];
  // errors.style ? formClass = 'needs-validation was-validated' : null;

  function form(tag){
    switch(tag){
      case 'lift':
        return (
          <LiftForm
            errors={errors}
            workout={workout}
            exercise={exercise}
            newSet={newSet}
            onLiftChange={onLiftChange}
            onAddSet={onAddSet}
          />
        );
      case 'cardio':
        return (
          <CardioForm
            errors={errors}
            workout={workout}
            exercise={exercise}
            newSet={newSet}
            onCardioChange={onCardioChange}
            onAddSet={onAddSet}
          />
        );
    }
  }

  return (
    <div className="col-md-8 offset-md-2">
      <form className={formClass} noValidate>
        <h1>Manage Workout</h1>
        <SelectInput
          name="type"
          label="Type"
          onChange={onExerciseChange}
          defaultOption={"Select Workout Type"}
          value={exercise.tag}
          error={errors.type}
          options={dropDownOptions}
          />
        
        {form(exercise.tag)}
      </form>
    </div>
  );
};
 
WorkoutForm.propTypes = {
  workout: PropTypes.object.isRequired,
  customWorkout: PropTypes.string,
  onExerciseChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default WorkoutForm;