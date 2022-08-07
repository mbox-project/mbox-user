import React from "react";
import Image from "next/image";
import shirt from "../public/img/shirt.png";
import PropTypes from "prop-types";

const OrderProducts = ({ product }) => {
  const { name, type, product_id, owner, price, size, color, qty } = product;
  return (
    <>
      <div className="flex flex-col border border-gray-500 rounded-large p-6 justify-around shadow-lg md:flex md:flex-row ">
        <div className="flex justify-center items-center">
          <Image src={shirt} width={100} height={100} alt="product" />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-900 font-bold">{name}</h2>
          <h3 className="text-sm">{type}</h3>
          <h2 className="text-md  text-gray-500">Product ID:{product_id}</h2>
          <h2 className="text-md  text-gray-500">{owner}</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-900 font-bold">${price}</h2>
          <h3 className="text-md  text-gray-500">Size:{size}</h3>
          <h2>
            <span className="text-md  text-gray-500">Color:</span>
            <span className="font-bold"> {color}</span>
          </h2>
          <h2 className="text-md  text-gray-500">
            QTY: <span className="text-red-500">{qty}</span>
          </h2>
        </div>
        <button
          type="button"
          className="bg-blue-900 text-white text-center items-center rounded-lg  p-2 px-8 h-12"
        >
          Edit
        </button>
      </div>
    </>
  );
};

//proptypes validation...
OrderProducts.propTypes = {
  product: PropTypes.object.isRequired,
};

export default OrderProducts;
