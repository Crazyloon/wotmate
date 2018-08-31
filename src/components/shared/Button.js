import React from 'react';
import PropTypes from 'prop-types';

const Button = ({id, styleClass, type, disabled, value, icon, text, onClick}) => {
  return (
    <button
        id={id}
        className={styleClass}
        type={type}
        disabled={disabled}
        value={value}
        onClick={onClick}>
          {icon} {text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  styleClass: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
 
export default Button;