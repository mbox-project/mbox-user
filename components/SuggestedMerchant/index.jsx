import React from "react";
import PropTypes from "prop-types";

const SuggestedMerchant = ({ header, body, className, button, categories }) => {
  SuggestedMerchant.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
  };
  return (
    <div className={className}>
      <p className="text-base lg:text-lg py-3">{header}</p>
      <p className="text-sm text-gray-400">{body}</p>
      <p className="text-sm text-gray-400">{categories}</p>
      <button className="w-full footerbg text-white py-2 text-sm ">
        {button}
      </button>
    </div>
  );
};

export default SuggestedMerchant;
