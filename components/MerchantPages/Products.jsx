import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import shirt from "../../public/img/shirt.png";

const Products = ({ product }) => {
  //destructure the products
  console.log(product, product.galleryImages.$values[0]?.imageUrl);
  const { name, price } = product;
  const firstImage = product.galleryImages.$values[0]?.imageUrl;
  return (
    <>
      <div
        className="card rectCard flex flex-col items-center justify-center space-y-5 shadow-md 
            hover:-translate-y-1 hover:scale-110  duration-200"
      >
        <div className="prodImg">
            <Image src={firstImage} alt="product" width={50}
            height={90}/> 
            {/* <Image src={shirt} alt="product" />  */}
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
