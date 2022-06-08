import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({
  className,
  children,
  onChange,
  autoFocus,
  required,
  name,
}) => {
  Dropdown.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
  };

  return (
    <select
      name={name}
      className={className}
      onChange={onChange}
      autoFocus={autoFocus}
      required={required}
    >
      {children}
    </select>
  );
};

export default Dropdown;
