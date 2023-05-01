import React from "react";
import Image from "next/image";
import mboximg from "../public/images/mboximg.png";
import PropTypes from "prop-types";

const CommentData = ({ product }) => {
  const { name, time, comment } = product;
  return (
    <>
      <div className="flex flex-col border border-gray-500 rounded-large p-6 justify-around shadow-lg md:flex md:flex-row hover:-translate-y-1 hover:scale-10  duration-200 ">
        <h3>Comment and Reviews </h3>
        <div>
          <div className="flex">
            <Image src={mboximg} alt="product" />
          </div>
          <div className="block space-y-4">
            <h2>{name}</h2>
            <h2>{time}</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-gray-900 font-bold">{comment}</h2>
      </div>
    </>
  );
};

//proptypes validation...
CommentData.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CommentData;
