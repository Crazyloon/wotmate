import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({wrapperClass, name, label, onChange, defaultOption, value, required, error, options}) => {
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
          required={required}
          className={controlClass}>
          <option value="">{defaultOption}</option>
          {options.map((option, index) => {
            return <option key={option.value.id || index} value={option.value}>{option.text}</option>;
          })
          }
        </select>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  wrapperClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

SelectInput.defaultProps = {
  wrapperClass: "form-group"
};

export default SelectInput;
