import React from "react";
import PropTypes from "prop-types";

const Feature = ({ header, body, className }) => {
  Feature.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
  };
  return (
    <div className={className}>
      <p className="text-base lg:text-lg py-3">{header}</p>
      <p className="text-sm text-gray-400">{body}</p>
    </div>
  );
};

export default Feature;
