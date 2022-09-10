import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import shirt from "../../public/img/shirt.png";

const Products = ({ products }) => {
  //destructure the products
  const { name, price } = products;
  return (
    <>
      <div className="card rectCard flex flex-col items-center justify-center space-y-5 shadow-md hover:-translate-y-1 hover:scale-110  duration-200">
        <div className="prodImg">
          <Image src={shirt} alt="product" />
        </div>
        <h4 className="text-md font-bold">{name}</h4>
        <h5 className="text-lg text-brightRed"> ${price}</h5>
      </div>
    </>
  );
};

// Adding a prop validation
Products.propTypes = {
  products: PropTypes.object.isRequired,
};
export default Products;
