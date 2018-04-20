import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  let wrapperClass = 'form-group';
  let controlClass = 'form-control';
  if(error && error.length > 0){
    wrapperClass += " " + 'has-error';
    controlClass += " " + 'is-invalid';
}
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={controlClass}>
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
