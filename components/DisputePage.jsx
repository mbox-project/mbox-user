import React from "react";
import Image from "next/image";
import shirt from "../public/img/shirt.png";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { approveDeal } from "../store/deals/dealService";
import { toastify } from "../helpers";

const DisputePage = ({ product }) => {
  const { name, type, product_id, owner, price, size, color, qty } = product;
  const firstImage = product.product?.otherDetails?.imageUrl;
  const dealId = product.id;

  const dispatch = useDispatch();
  
  const handleApproveDeal = () => {
    dispatch(approveDeal(dealId))
      .unwrap()
      .then((res) => {
        console.log(res.data?.items?.$values);
        toastify.alertSuccess("Deal Resolved", 3000);
      })
      .catch((error) => {
        toastify.alertError(error.message, 3000)
        console.log(error);
        
      });
  };

  return (
    <>
      <div className="border border-gray-500 rounded-large p-6 shadow-lg  mhover:-translate-y-1 hover:scale-10  duration-200 ">
        <div className="flex flex-col justify-around  md:flex md:flex-row hover:-translate-y-1 hover:scale-10  duration-200 ">
          <div className="flex justify-center items-center">
            {/* <Image src={shirt} width={100} height={100} alt="product" /> */}
            <Image src={firstImage} alt="product" width={100}
            height={100}/> 
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-gray-900 font-bold">{name}</h2>
            <h3 className="text-sm">{type}</h3>
            <h2 className="text-md  text-gray-500">Product ID:{product.product?.productTag}</h2>
            <h2 className="text-md  text-gray-500">{owner}</h2>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-gray-900 font-bold">${product.product?.price}</h2>
            {/* <h3 className="text-md  text-gray-500">Size:{size}</h3> */}
            <h2>
              <span className="text-md  text-gray-500">Color:</span>
              <span className="font-bold"> {product.product?.otherDetails?.color}</span>
            </h2>
            <h2 className="text-md  text-gray-500">
              QTY: <span className="text-red-500">{product.product?.quantity}</span>
            </h2>
          </div>

          <div className="block mt-10">
            <button
              type="button"
              className="bg-[#034694] text-white text-center items-center rounded-lg  py-2 px-8 h-10"
              onClick={handleApproveDeal}
            >
              Resolve
            </button>
          </div>
        </div>
        <div className="pt-4">
          <hr />
          <p className="pt-4">
            <span className="text-brightRed">Comment(s):</span> This isn't
            exactly what was in the picture. Please fix up and we can continue
            with the payment ASAP. Thanks
          </p>
        </div>
      </div>
    </>
  );
};

//proptypes validation...
DisputePage.propTypes = {
  product: PropTypes.object.isRequired,
};

export default DisputePage;
