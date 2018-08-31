<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';
import LiftForm from './subforms/LiftForm';
import CardioForm from './subforms/CardioForm';
import ActivityForm from './subforms/ActivityForm';
import { workoutTypes } from '../../data/api/workoutApi';

const WorkoutForm = ({ workout, exercise, newSet, customWorkout, onNameChange,
                       onExerciseChange, onLiftChange, onAddSet, onCardioChange,
                       onActivityChange, onScaleChange, saving, errors,
                       durationOptions, weightOptions, distanceOptions,
                       durationScale, weightScale, distanceScale}) => {
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
            onScaleChange={onScaleChange}
            weightOptions={weightOptions}
            weightScale={weightScale}
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
            onScaleChange={onScaleChange}
            durationOptions={durationOptions}
            distanceOptions={distanceOptions}
            durationScale={durationScale}
            distanceScale={distanceScale}
          />
        );
        case 'activity':
        return (
          <ActivityForm
            errors={errors}
            workout={workout}
            exercise={exercise}
            newSet={newSet}
            onActivityChange={onActivityChange}
            onAddSet={onAddSet}
            onScaleChange={onScaleChange}
            durationOptions={durationOptions}
            durationScale={durationScale}
          />
        );
    }
  }

  return (
    <div className="col-md-8 offset-md-2">
      <h1>Manage Workout</h1>
      <form className={formClass} noValidate>
        <TextInput 
          wrapperClass={"form-group"}
          name="name"
          label="Workout Name"
          placeholder="Fat Buster"
          value={workout.name}
          onChange={onNameChange}
          error={errors.name}
          />

        <SelectInput
          name="type"
          label="Type"
          onChange={onExerciseChange}
          defaultOption={"Select Workout Type"}
          value={exercise.tag}
          error={errors.type}
          options={dropDownOptions}
          />
        
        <hr style={{height: 2, background: 'white', width: '96%'}}/>

        {form(exercise.tag)}
      </form>
    </div>
  );
};
 
WorkoutForm.propTypes = {
  workout: PropTypes.object.isRequired,
  exercise: PropTypes.object.isRequired,
  newSet: PropTypes.object.isRequired,
  customWorkout: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
  onExerciseChange: PropTypes.func.isRequired,
  onLiftChange: PropTypes.func.isRequired,
  onCardioChange: PropTypes.func.isRequired,
  onActivityChange: PropTypes.func.isRequired,
  onAddSet: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

=======
import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';
import LiftForm from './subforms/LiftForm';
import CardioForm from './subforms/CardioForm';
import ActivityForm from './subforms/ActivityForm';
import { workoutTypes } from '../../data/api/workoutApi';

const WorkoutForm = ({ workout, exercise, newSet, customWorkout, onNameChange,
                       onExerciseChange, onLiftChange, onAddSet, onCardioChange,
                       onActivityChange, onScaleChange, saving, errors,
                       durationOptions, weightOptions, distanceOptions,
                       durationScale, weightScale, distanceScale}) => {
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
            onScaleChange={onScaleChange}
            weightOptions={weightOptions}
            weightScale={weightScale}
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
            onScaleChange={onScaleChange}
            durationOptions={durationOptions}
            distanceOptions={distanceOptions}
            durationScale={durationScale}
            distanceScale={distanceScale}
          />
        );
        case 'activity':
        return (
          <ActivityForm
            errors={errors}
            workout={workout}
            exercise={exercise}
            newSet={newSet}
            onActivityChange={onActivityChange}
            onAddSet={onAddSet}
            onScaleChange={onScaleChange}
            durationOptions={durationOptions}
            durationScale={durationScale}
          />
        );
    }
  }

  return (
    <div className="col-md-8 offset-md-2">
      <form className={formClass} noValidate>
        <h1>Manage Workout</h1>

        <TextInput 
          wrapperClass={"form-group"}
          name="name"
          label="Workout Name"
          placeholder="Fat Buster"
          value={workout.name}
          onChange={onNameChange}
          error={errors.name}
          />

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
  exercise: PropTypes.object.isRequired,
  newSet: PropTypes.object.isRequired,
  customWorkout: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
  onExerciseChange: PropTypes.func.isRequired,
  onLiftChange: PropTypes.func.isRequired,
  onCardioChange: PropTypes.func.isRequired,
  onActivityChange: PropTypes.func.isRequired,
  onAddSet: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
export default WorkoutForm;