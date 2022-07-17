import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import suggestedimg from "../../public/images/suggestedimg.png";
import star from "../../public/images/star.png";
import Link from "next/link";

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
      <div className=" flex  ">
        <div className="pt-5">
          <Image src={suggestedimg} width="70px" height="70px" />
        </div>
        <div className="pl-10">
          <p className="text-base lg:text-lg py-3 ">{header}</p>

          <Image src={star} />
          <Image src={star} />
          <Image src={star} />
          <Image src={star} />
          <Image src={star} />

          <p className="text-sm text-gray-400 py-2">{body}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 py-2">{categories}</p>
      <button className="w-full footerbg text-white py-2 mt-3 text-sm ">
        <Link href={""}>{button}</Link>
      </button>
    </div>
  );
};

export default SuggestedMerchant;
