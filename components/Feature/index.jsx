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
      <div className="hidden md:block pt-3 md:pt-6 pr-20 -ml-12 md:-ml-12 lg:ml-0 ">
        <Image src={icon} height={200} width={200} />
      </div>
      <div className="block md:hidden pt-3 md:pt-6 pr-20 -ml-9 md:-ml-12 lg:ml-0 ">
        <Image src={icon} height={150} width={150} />
      </div>
      <div className={className}>
        <p className="text-base md:text-2xl mt-3 md:mt-0 lg:text-lg poppins font-bold text-lightGray ">
          {header}
        </p>
        <p className="text-base md:text-xl leading-loose lg:leading-8 lg:text-base text-gray-400 poppins pt-4">
          {body}
        </p>
      </div>
    </div>
  );
};

export default Feature;
