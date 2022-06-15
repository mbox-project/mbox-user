import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import featureicon1 from "../../public/images/featureicon1.png";

const Feature = ({ header, body, className }) => {
  Feature.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
  };
  return (
    <div className={className}>
      <Image src={featureicon1} height="100px" width="100px" />
      <p className="text-base lg:text-lg py-3">{header}</p>
      <p className="text-sm text-gray-400">{body}</p>
    </div>
  );
};

export default Feature;
