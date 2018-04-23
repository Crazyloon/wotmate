import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../shared/SelectInput';
import TextInput from '../shared/TextInput';
import NumberInput from '../shared/NumberInput';

class LiftForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      customWorkout: {text: '', value: ''},
      errors: {},
      liftOptions: this.ddOpts()
    };

    this.onCustomLiftChange = this.onCustomLiftChange.bind(this);
    this.onAddCustomLift = this.onAddCustomLift.bind(this);
  }

  onCustomLiftChange(event){
    let {name: key, value} = event.target;
    const customWorkout = Object.assign({}, this.state.customWorkout);
    customWorkout.text = value;
    customWorkout.value = value;
    this.setState({customWorkout: customWorkout});
  }

  onAddCustomLift(event){
    if(this.state.customWorkout.text.length > 3){
      const liftOpts = Object.assign([], this.state.liftOptions);
      liftOpts.push(this.state.customWorkout);
      this.setState({liftOptions: liftOpts, customWorkout: {text: '', value: ''}});
      return;
    }
    const errors = Object.assign({}, this.state.errors);
    errors.customWorkout = 'Please give the workout a more descriptive name.';
    this.setState({errors: errors});
    return;
  }

  isValid(){
    return this.exercise.name !== '';
  }

  ddOpts(){
    return [{value: "Bench Press", text: "Bench Press"},
            {value: "Back Squat", text: "Back Squat"},
            {value: "Shoulder Press", text: "Shoulder Press"}
          ];
  }

  render(){
    return (
      <div>
        <div className="form-row">
          <SelectInput
            wrapperClass={"form-group col-md-6"}
            name="name"
            label="Lift"
            onChange={this.props.onLiftChange}
            defaultOption={"Select Lift Type"}
            value={this.props.newSet.name}
            required
            error={this.state.errors.name}
            options={this.state.liftOptions}
            />

          <div className="col-md-6 form--custom-adder">
              <button onClick={this.onAddCustomLift}
                      className="btn btn-secondary btn__round" 
                      type="button">
                <i className="fas fa-arrow-alt-circle-left fa-2x"/>
              </button>
      
              <TextInput
                wrapperClass={"form-group fullWidth"}
                name="customWorkout"
                label="Custom Lift Type"
                placeholder="Lunges"
                value={this.state.customWorkout.text}
                onChange={this.onCustomLiftChange}
                error={this.state.errors.customWorkout}
                />
          </div>
        </div>

        <div className="form-row"> 
          <NumberInput
            wrapperClass={"form-group col-md-6"}
            name="reps"
            label="Reps"
            placeholder={8}
            value={this.props.newSet.reps}
            onChange={this.props.onLiftChange}
            required
            min={1}
            max={100}
            step={1}
            error={this.state.errors.reps}
            />

          <NumberInput
            wrapperClass={"form-group col-md-6"}
            name="weight"
            label="Weight"
            placeholder={100}
            value={this.props.newSet.weight}
            onChange={this.props.onLiftChange}
            required
            min={5}
            max={1000}
            step={5}
            error={this.state.errors.weight}
            />
        </div>

        <div className="button--save__rightAlign">
          <button
            className="btn btn-primary bevel bevel-md"
            type="button"
            disabled={this.props.saving}
            value={this.props.saving ? 'Adding...' : 'Add Set'}
            onClick={this.props.onAddSet}>
              <i className="fas fa-angle-double-down"/> Add Set
          </button>
        </div>

      </div>
    );
  }
}

LiftForm.propTypes = {
  exercise: PropTypes.object.isRequired
};

export default LiftForm;