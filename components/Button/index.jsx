import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, className, disabled, type }) => {
  Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
  };
  return (
    <button
      type={type || ""}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
