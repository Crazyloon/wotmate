import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({wrapperClass, name, label, onChange, placeholder, value, scale, min, max, step, error, required}) => {
    let controlClass = 'form-control';
    if(error && error.length > 0){
        wrapperClass += " " + 'has-error';
        controlClass += " " + 'is-invalid';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="form-group">
                <input
                    className={controlClass}
                    type="number"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    min={min}
                    max={max}
                    step={step}
                    data-scale={scale}/>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

NumberInput.propTypes = {
    wrapperClass: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.number,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    scale: PropTypes.string,
    error: PropTypes.string,
    required: PropTypes.bool
};

NumberInput.defaultProps = {
  wrapperClass: "form-group"
};

export default NumberInput;