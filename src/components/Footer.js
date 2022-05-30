import React from "react";
import PropTypes from "prop-types";

const Footer = ({ children, onClick, className, disabled }) => {
  Footer.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  };
  return (
    <p onClick={onClick} className={className} disabled={disabled}>
      {children}
    </p>
  );
};
export default Footer;
