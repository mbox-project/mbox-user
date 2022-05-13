import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, className, disabled }) => {
  Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  };
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
