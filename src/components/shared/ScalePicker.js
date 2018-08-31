<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

const ScalePicker = ({scaleOptions, selectedOption, onOptionSelected}) => {

  return (
    <div className="form--scale-selection">
      {
        scaleOptions.map((opt, i) => {
          return (
            <React.Fragment key={i}>
              <span
                className={opt === selectedOption ? 'scale--select selected-scale' : 'scale--select'}
                onClick={onOptionSelected}>
              {opt}
              </span>
              {i == 0? '/' : ''}
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

ScalePicker.propTypes ={
  scaleOptions: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  onOptionSelected: PropTypes.func.isRequired
};
 
=======
import React from 'react';
import PropTypes from 'prop-types';

const ScalePicker = ({scaleOptions, selectedOption, onOptionSelected}) => {

  return (
    <div className="form--scale-selection">
      {
        scaleOptions.map((opt, i) => {
          return (
            <React.Fragment key={i}>
              <span
                className={opt === selectedOption ? 'scale--select selected-scale' : 'scale--select'}
                onClick={onOptionSelected}>
              {opt}
              </span>
              {i == 0? '/' : ''}
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

ScalePicker.propTypes ={
  scaleOptions: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  onOptionSelected: PropTypes.func.isRequired
};
 
>>>>>>> fc2641cb0f23a39a3e85159a617b456835d0b532
export default ScalePicker;