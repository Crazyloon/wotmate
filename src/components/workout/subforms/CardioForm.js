import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../../shared/SelectInput';
import TextInput from '../../shared/TextInput';
import NumberInput from '../../shared/NumberInput';

class CardioForm extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      customCardio: {text: '', value: ''},
      errors: {
        customCardio: true
      },
      cardioOptions: this.ddOpts()
    };

    this.onCustomCardioChange = this.onCustomCardioChange.bind(this);
    this.onAddCustomCardio = this.onAddCustomCardio.bind(this);
  }

  onCustomCardioChange(event){
    let {name: key, value} = event.target;
    const errors = Object.assign({}, this.state.errors);
    errors.customCardio = value.length < 3;
    const customCardio = Object.assign({}, this.state.customCardio);
    customCardio.text = value;
    customCardio.value = value;
    this.setState({customCardio: customCardio, errors: errors});
  }

  onAddCustomCardio(event){
    const cardioOpts = Object.assign([], this.state.cardioOptions);
    cardioOpts.push(this.state.customCardio);
    this.setState({
        cardioOptions: cardioOpts, 
        customCardio: {text: '', value: ''},
        errors: {customCardio: true}
      });
  }
  // TODO: Remove this and pull the data from an API
  ddOpts(){
    return [{value: "Sprint", text: "Sprint"},
            {value: "Run", text: "Run"},
            {value: "Jog", text: "Jog"},
            {value: "Walk", text: "Walk"},
            {value: "Treadmill", text: "Treadmill"},
            {value: "Elliptical", text: "Elliptical"}
          ];
  }

  render(){
    return (
      <div>
        <div className="form-row">
          <SelectInput
            wrapperClass={"form-group col-md-6"}
            name="name"
            label="Cardio"
            onChange={this.props.onCardioChange}
            defaultOption={"Select Cardio Type"}
            value={this.props.newSet.name}
            required
            error={this.props.errors.setType}
            options={this.state.cardioOptions}
            />

          <div className="col-md-6 form--custom-adder">
              <button onClick={this.onAddCustomCardio}
                      className="btn btn-secondary btn__round" 
                      type="button"
                      disabled={this.state.errors.customCardio}>                      
                <i className="fas fa-arrow-alt-circle-left fa-2x"/>
              </button>
      
              <TextInput
                wrapperClass={"form-group fullWidth"}
                name="customCardio"
                label="Custom Cardio Type"
                placeholder="HIIT"
                value={this.state.customCardio.text}
                onChange={this.onCustomCardioChange}
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
            onChange={this.props.onCardioChange}
            required
            min={1}
            max={600}
            step={1}
            error={this.props.errors.duration}
            />

          <NumberInput
            wrapperClass={"form-group col-md-6"}
            name="distance"
            label="Distance"
            placeholder={100}
            value={this.props.newSet.distance}
            onChange={this.props.onCardioChange}
            required
            min={5}
            max={10000}
            step={5}
            error={this.props.errors.distance}
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

CardioForm.propTypes = {
  exercise: PropTypes.object.isRequired,
  onAddSet: PropTypes.func.isRequired,
  onCardioChange: PropTypes.func.isRequired,
  newSet: PropTypes.object.isRequired,
  saving: PropTypes.bool
};

export default CardioForm;