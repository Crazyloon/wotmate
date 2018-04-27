import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../../shared/SelectInput';
import TextInput from '../../shared/TextInput';
import NumberInput from '../../shared/NumberInput';
import { workoutIntensity } from '../../../data/api/workoutApi';
import ScalePicker from '../../shared/ScalePicker';

let intensityOptions = Object.keys(workoutIntensity).map((key, index) =>{
  return {value: workoutIntensity[key], text: workoutIntensity[key]};
});

class ActivityForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      customActivity: {text: '', value: ''},
      errors: {
        customCardio: true
      },
      activityOptions: this.ddOpts()
    };

    this.onCustomActivityChange = this.onCustomActivityChange.bind(this);
    this.onAddCustomActivity = this.onAddCustomActivity.bind(this);
  }

  onCustomActivityChange(event){
    let {name: key, value} = event.target;
    const errors = Object.assign({}, this.state.errors);
    errors.customActivity = value.length < 3;
    const customActivity = Object.assign({}, this.state.customActivity);
    customActivity.text = value;
    customActivity.value = value;
    this.setState({customActivity: customActivity, errors: errors});
  }

  onAddCustomActivity(event){
      const activityOpts = Object.assign([], this.state.activityOptions);
      activityOpts.push(this.state.customActivity);
      this.setState({
        activityOptions: activityOpts,
        customActivity: {text: '', value: ''},
        errors: {customActivity: true}
    });
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
            error={this.props.errors.setType}
            options={this.state.activityOptions}
            />

          <div className="col-md-6 form--custom-adder">
              <button onClick={this.onAddCustomActivity}
                      className="btn btn-secondary btn__round" 
                      type="button"
                      disabled={this.state.errors.customActivity}>
                <i className="fas fa-arrow-alt-circle-left fa-2x"/>
              </button>
      
              <TextInput
                wrapperClass={"form-group fullWidth"}
                name="customActivity"
                label="Custom Activity Type"
                placeholder="Karate"
                value={this.state.customActivity.text}
                onChange={this.onCustomActivityChange}
                />
          </div>
        </div>

        <div className="form-row"> 
          <NumberInput
            wrapperClass={"form-group col-md-6"}
            name="duration"
            label="Duration"
            placeholder={8}
            value={this.props.newSet.duration.value}
            onChange={this.props.onActivityChange}
            required
            min={1}
            max={600}
            step={1}
            error={this.props.errors.duration}>
            <ScalePicker
                  onOptionSelected={this.props.onScaleChange}
                  scaleOptions={this.props.durationOptions}
                  selectedOption={this.props.durationScale}/>
          </NumberInput>

          <SelectInput
            wrapperClass={"form-group col-md-6"}            
            name="intensity"
            label="Intensity"
            onChange={this.props.onActivityChange}
            defaultOption={"Select Intensity Level"}
            value={this.props.newSet.intensity}
            required
            error={this.props.errors.intensity}
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
  newSet: PropTypes.shape({
    name: PropTypes.string,
    duration: PropTypes.shape({
      value: PropTypes.number,
      scale: PropTypes.string
    }),
    intensity: PropTypes.string
  }),
  saving: PropTypes.bool,
  errors: PropTypes.shape({
    setType: PropTypes.string,
    duration: PropTypes.string,
    intensity: PropTypes.string
  })
};

export default ActivityForm;