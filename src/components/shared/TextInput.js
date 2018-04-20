import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeholder, value, error, required}) => {
    let wrapperClass = 'form-group';
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
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}/>
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    required: PropTypes.bool
};

export default TextInput;