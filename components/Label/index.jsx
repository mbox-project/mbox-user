import React from "react";
import PropTypes from "prop-types";

const Label = ({ className, title, htmlFor }) => {
  Label.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    htmlFor: PropTypes.string,
  };
  return (
    <label className={className} htmlFor={htmlFor}>
      {title}
    </label>
  );
};

export default Label;
