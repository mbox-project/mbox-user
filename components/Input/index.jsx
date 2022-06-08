import React from "react";
import PropTypes from "prop-types";

const Input = ({
  className,
  type,
  onChange,
  name,
  value,
  required,
  autoFocus,
  maxLength,
  placeHolder,
}) => {
  Input.propTypes = {
    className: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool.isRequired,
    autoFocus: PropTypes.bool,
    maxLength: PropTypes.number,
    placeHolder: PropTypes.string,
  };

  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      name={name}
      value={value}
      required={required}
      autoFocus={autoFocus}
      maxLength={maxLength}
      placeholder={placeHolder}
    />
  );
};

export default Input;
