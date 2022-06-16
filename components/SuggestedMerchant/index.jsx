import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import suggestedimg from "../../public/images/suggestedimg.png";

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
      <div className="grid grid-cols-1 gap-0  lg:grid-cols-2 lg:gap-5">
        <div className="mt-4">
          <Image src={suggestedimg} width="80px" height="70px" />
        </div>
        <div>
          <p className="text-base lg:text-lg py-3 ">{header}</p>
          <p className="text-sm text-gray-400">{body}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400">{categories}</p>
      <button className="w-full footerbg text-white py-2 mt-3 text-sm ">
        {button}
      </button>
    </div>
  );
};

export default SuggestedMerchant;
