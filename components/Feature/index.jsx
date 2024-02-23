import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const Feature = ({ header, body, className, icon }) => {
  Feature.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  return (
    <div className="block">
      <div className="hidden md:block">
        <Image src={icon} height={150} width={150} />
      </div>
      <div className="block md:hidden">
        <Image src={icon} height={100} width={100} />
      </div>
      <div className={className}>
        <p className="text-sm md:text-lg py-2">{header}</p>
        <p className="text-xs md:text-sm text-gray-400 px-5 py-2">{body}</p>
      </div>
    </div>
  );
};

export default Feature;
