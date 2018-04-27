import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../../shared/SelectInput';
import TextInput from '../../shared/TextInput';
import NumberInput from '../../shared/NumberInput';
import ScalePicker from '../../shared/ScalePicker';

class LiftForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customLift: {text: '', value: ''},
      errors: {
        customLift: true
      },
      liftOptions: this.ddOpts()
    };

    this.onCustomLiftChange = this.onCustomLiftChange.bind(this);
    this.onAddCustomLift = this.onAddCustomLift.bind(this);
  }

  onCustomLiftChange(event){
    let {name: key, value} = event.target;
    const errors = Object.assign({}, this.state.errors);
    errors.customLift = value.length < 3;
    const customLift = Object.assign({}, this.state.customLift);
    customLift.text = value;
    customLift.value = value;
    this.setState({customLift: customLift, errors: errors});
  }

  onAddCustomLift(event){
    const liftOpts = Object.assign([], this.state.liftOptions);
    liftOpts.push(this.state.customLift);
    this.setState({
      liftOptions: liftOpts,
      customLift: {text: '', value: ''},
      errors: {customLift: true}
    });
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
            error={this.props.errors.setType}
            options={this.state.liftOptions}
            />

          <div className="col-md-6 form--custom-adder">
              <button onClick={this.onAddCustomLift}
                      className="btn btn-secondary btn__round" 
                      type="button"
                      disabled={this.state.errors.customLift}>
                <i className="fas fa-arrow-alt-circle-left fa-2x"/>
              </button>
      
              <TextInput
                wrapperClass={"form-group fullWidth"}
                name="customLift"
                label="Custom Lift Type"
                placeholder="Lunges"
                value={this.state.customLift.text}
                onChange={this.onCustomLiftChange}
                />
          </div>
        </div>

        <div style={{marginTop: '-20px'}} className="form-row"> 
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
            error={this.props.errors.reps}
            />

          <NumberInput
            wrapperClass={"form-group col-md-6"}
            name="weight"
            label="Weight"
            placeholder={100}
            value={this.props.newSet.weight.value}
            onChange={this.props.onLiftChange}
            required
            min={5}
            max={1000}
            step={5}            
            error={this.props.errors.weight}>
              <ScalePicker
                  onOptionSelected={this.props.onScaleChange}
                  scaleOptions={this.props.weightOptions}
                  selectedOption={this.props.weightScale}/>
            </NumberInput>
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
  exercise: PropTypes.object.isRequired,
  newSet: PropTypes.shape({
    name: PropTypes.string,
    reps: PropTypes.number,
    weight: PropTypes.shape({
      value: PropTypes.number,
      scale: PropTypes.string
    })
  }),
  errors: PropTypes.shape({
    setType: PropTypes.string,
    reps: PropTypes.string,
    weight: PropTypes.string
  }),
  saving: PropTypes.bool,
  onAddSet: PropTypes.func.isRequired,
  onLiftChange: PropTypes.func.isRequired,
  onScaleChange: PropTypes.func.isRequired,
  weightOptions: PropTypes.array.isRequired,
  weightScale: PropTypes.string.isRequired
};

export default LiftForm;