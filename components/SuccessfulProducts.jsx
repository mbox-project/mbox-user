import React, { useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { approveDeal, disputeDeals } from "../store/deals/dealService";
import { toastify } from "../helpers";

const SuccessfulProducts = ({ product }) => {
  const { name, type, product_id, date, owner, price, size, color, qty } = product;
  const firstImage = product.product?.otherDetails?.imageUrl;
  const dealId = product.id;

  

  return (
    <>
      <div className="flex w-full justify-center font-poppins text-sm text-[#444444]">
        <div className="flex justify-between items-center w-full h-12 gap-2 px-1 md:px-5 text-xs md:text-base">
          <div className="flex flex-col shrink-0 items-center justify-start p-2 rounded-md shadow">
            {/* <Image src="/img/shirt.png" alt="product" width={40} height={40} /> */}

            <Image src={firstImage} alt="product" width={100}
            height={100}/> 
          </div>

          <div className="overflow-hidden">
            <span className="text-nowrap">{name}</span>
          </div>
          <div className="hidden md:flex">
            <span className="">{date}</span>
          </div>
          <div>
            <span className="truncate font-bold">{product.product?.price}</span>
          </div>

          {/* <div>
            <button className="p-1 px-2 md:px-4 rounded-lg bg-[#EF5612] text-white">Details</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

//proptypes validation...
SuccessfulProducts.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SuccessfulProducts;
