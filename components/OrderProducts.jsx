import React from "react";
import Image from "next/image";
import shirt from "../public/img/shirt.png";
import PropTypes from "prop-types";

const OrderProducts = ({ product }) => {
  const { products, buyer, storeName} = product;
  const totalPoduct = products?.$values?.length 
  const pImage = products?.$values?.[0]?.productImage?.imageUrl
  function formatMoney(amount, locale = 'en-NG', currency = 'NGN') {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    });

    return formatter.format(amount);
  }
  return (
    <>
      <div className="flex flex-col border border-gray-500 rounded-large p-6 justify-around shadow-lg md:flex md:flex-row hover:-translate-y-1 hover:scale-10  duration-200 ">
        <div className="flex justify-center items-center">
          {pImage ?
            (
              <Image src={pImage} width={100} height={100} alt="product" />
            )
            :
            (
              <Image src={shirt} width={100} height={100} alt="product" />
            )
          }
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-900 font-bold">{products?.$values?.[0]?.productDescription}</h2>
          <h3 className="text-sm">{storeName}</h3>
          <h2 className="text-md  text-gray-500">Product ID: {products?.$values?.[0]?.tag}</h2>
          <h2 className="text-md  text-gray-500">Buyer: {buyer}</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-900 font-bold">{formatMoney(products?.$values?.[0]?.price)}</h2>
          <h2 className="text-md  text-gray-500">
            QTY: <span className="text-red-500">{products?.$values?.[0]?.quantity}</span>
          </h2>
          <h2>
            <span className="text-md  text-gray-500">Total Products: </span>
            <span className="font-bold">{totalPoduct}</span>
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
