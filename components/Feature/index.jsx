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
      <div className=" pt-3 md:pt-6 pr-20 ">
        <Image src={icon} height={200} width={200} />
      </div>
      <div className={className}>
        <p className="text-base lg:text-lg poppins font-bold text-lightGray ">
          {header}
        </p>
        <p className="text-sm text-gray-400 poppins pt-4">{body}</p>
      </div>
    </div>
  );
};

export default Feature;
