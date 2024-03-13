import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import suggestedimg from "../../public/images/suggestedimg.png";
import star from "../../public/images/star.png";
import Badge from "../../public/images/badge.png";
import like from "../../public/images/like.png";
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
      <div className="flex flex-col ">
        <div className="flex justify-between pb-3">
          <Image src={suggestedimg} width={40} height={40} />
          <button className="w-fit p-1 px-4 text-xs text-white rounded-lg bg-[#EF5612]">
            View Store
          </button>
        </div>

        <div className="">
          <div>
            <p className="text-base lg:text-lg font-bold">{header}</p>
          </div>

          <div className="flex py-2">
            <div className="pr-2">
              <Image src={star} width={15} height={15} alt="star" />
              <span className="p-1 mx-2 text-sm text-[#EF5612] bg-[#FFE8DD] rounded-md">
                5.0
              </span>
            </div>
            <div className="px-3 border-x border-[#9A9A9A]">
              <Image src={Badge} width={15} height={15} alt="badge" />
              <span className="p-1 mx-2 text-sm text-[#CFB53B] bg-[#FFF4C0] rounded-md">
                Gold
              </span>
            </div>
            <div className="pl-2">
              <Image src={like} width={15} height={15} alt="like" />
              <span className="p-1 mx-2 text-sm text-[#26A17B] bg-[#E3FFF6] rounded-md">
                {body}
              </span>
            </div>
          </div>
        </div>

        <div className="flex text-sm text-[#9A9A9A] gap-2 pt-2">
          <p className="w-fit p-1 px-2 bg-[#F7F7F7] rounded-md">{categories}</p>
          <p className="w-fit p-1 px-2 bg-[#F7F7F7] rounded-md">{categories}</p>
          <p className="w-fit p-1 px-2 bg-[#F7F7F7] rounded-md">{categories}</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestedMerchant;
