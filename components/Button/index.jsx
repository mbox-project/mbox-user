import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className, disabled }) => {
  Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  };
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
