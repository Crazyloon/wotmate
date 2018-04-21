import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';

const WorkoutForm = ({workout, onSave, onChange, saving, errors}) => {
  let formClass = `needs-validation`;
  let dropDownOptions = [{value: 0, text: "Lift"}, {value: 1, text:"Cardio"}, {value: 2, text:"Activity"}];
  // errors.style ? formClass = 'needs-validation was-validated' : null;
  return (
    <div className="col-md-8 offset-2">
      <form className={formClass} noValidate>
        <h1>Manage Workout</h1>
        <SelectInput
          name="name"
          label="Type"
          onChange={onChange}
          defaultOption={"Select Workout Type"}
          value={workout.name}
          error={errors.name}
          options={dropDownOptions}
          />
        
        <TextInput
          name="exercise"
          label="Exercise"
          value={workout.name}
          onChange={onChange}
          error={errors.name}
          />

        <button
          className="btn btn-primary bevel  bevel-md"
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          onClick={onSave}>
            <i className="far fa-save fa-lg"/> Save
        </button>
      </form>
    </div>
  );
};
 
WorkoutForm.propTypes = {
  workout: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default WorkoutForm;