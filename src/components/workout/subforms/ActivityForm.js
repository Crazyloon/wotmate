import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../../shared/SelectInput';
import TextInput from '../../shared/TextInput';
import NumberInput from '../../shared/NumberInput';
import { workoutIntensity } from '../../../data/api/workoutApi';

let intensityOptions = Object.keys(workoutIntensity).map((key, index) =>{
  return {value: workoutIntensity[key], text: workoutIntensity[key]};
});

class ActivityForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      customActivity: {text: '', value: ''},
      errors: {},
      activityOptions: this.ddOpts()
    };

    this.onCustomActivityChange = this.onCustomActivityChange.bind(this);
    this.onAddCustomActivity = this.onAddCustomActivity.bind(this);
  }

  onCustomActivityChange(event){
    let {name: key, value} = event.target;
    const customActivity = Object.assign({}, this.state.customActivity);
    customActivity.text = value;
    customActivity.value = value;
    this.setState({customActivity: customActivity});
  }

  onAddCustomActivity(event){
    if(this.state.customActivity.text != ''){
      const activityOpts = Object.assign([], this.state.activityOptions);
      activityOpts.push(this.state.customActivity);
      this.setState({activityOptions: activityOpts, customActivity: {text: '', value: ''}});
    }
  }
  // TODO: Remove this and pull the data from an API
  ddOpts(){
    return [{value: "Yoga", text: "Yoga"},
            {value: "Barre", text: "Barre"},
            {value: "Soccer", text: "Soccer"},
            {value: "Flag Football", text: "Flag Football"},
            {value: "Gardening", text: "Gardening"},
            {value: "Yard Work", text: "Yard Work"}
          ];
  }

  render(){
    return (
      <div>
        <div className="form-row">
          <SelectInput
            wrapperClass={"form-group col-md-6"}
            name="name"
            label="Activity"
            onChange={this.props.onActivityChange}
            defaultOption={"Select Activity Type"}
            value={this.props.newSet.name}
            required
            error={this.state.errors.activityType}
            options={this.state.activityOptions}
            />

          <div className="col-md-6 form--custom-adder">
              <button onClick={this.onAddCustomActivity}
                      className="btn btn-secondary btn__round" 
                      type="button">
                <i className="fas fa-arrow-alt-circle-left fa-2x"/>
              </button>
      
              <TextInput
                wrapperClass={"form-group fullWidth"}
                name="customActivity"
                label="Custom Activity Type"
                placeholder="Karate"
                value={this.state.customActivity.text}
                onChange={this.onCustomActivityChange}
                error={this.state.errors.customActivity}
                />
          </div>
        </div>

        <div className="form-row"> 
          <NumberInput
            wrapperClass={"form-group col-md-6"}
            name="duration"
            label="Duration"
            placeholder={8}
            value={this.props.newSet.duration}
            onChange={this.props.onActivityChange}
            required
            min={1}
            max={600}
            step={1}
            error={this.state.errors.duration}
            />

          <SelectInput
            wrapperClass={"form-group col-md-6"}            
            name="intensity"
            label="Intensity"
            onChange={this.props.onActivityChange}
            defaultOption={"Select Intensity Level"}
            value={this.props.newSet.intensity}
            required
            error={this.state.errors.intensity}
            options={intensityOptions}
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

ActivityForm.propTypes = {
  exercise: PropTypes.object.isRequired,
  onAddSet: PropTypes.func.isRequired,
  onActivityChange: PropTypes.func.isRequired,
  newSet: PropTypes.object.isRequired,
  saving: PropTypes.bool
};

export default ActivityForm;