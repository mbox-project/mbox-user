import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { approveDeal, disputeDeals } from "../store/deals/dealService";
import { toastify } from "../helpers";

const PendingProducts = ({ product }) => {
  const { name, type, product_id, owner, price, size, color, qty } = product;
  const firstImage = product.product?.otherDetails?.imageUrl;
  const dealId = product.id;

  const dispatch = useDispatch();
  
  const handleApproveDeal = () => {
    dispatch(approveDeal(dealId))
      .unwrap()
      .then((res) => {
        console.log(res.data?.items?.$values);
        toastify.alertSuccess("Deal Approved", 3000);
      })
      .catch((error) => {
        toastify.alertError(error.message, 3000)
        console.log(error);
        
      });
  };

  const handleDisputeDeal = () => {
    dispatch(disputeDeals(dealId))
      .unwrap()
      .then((res) => {
        console.log(res.data?.items?.$values);
        toastify.alertSuccess("Deal Disputed", 3000);
      })
      .catch((error) => {
        toastify.alertError(error.message, 3000)
        console.log(error);
        
      });
  };


  return (
    <>
      <div className="flex flex-col border border-gray-500 rounded-large p-6 justify-around shadow-lg md:flex md:flex-row hover:-translate-y-1 hover:scale-10  duration-200 ">
        <div className="flex justify-center items-center">
          {/* <Image src={shirt} width={100} height={100} alt="product" /> */}
          <Image src={firstImage} alt="product" width={100}
            height={100}/> 
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-900 font-bold">{name}</h2>
          <h3 className="text-sm">{type}</h3>
          <h2 className="text-md  text-gray-500 font-bold">Product ID: {product.product?.productTag}</h2>
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
        <div className="bkock">
          <button
            type="button"
            className="bg-[#26A17B] text-white text-center items-center rounded-lg  p-2 px-8 h-12"
            onClick={handleApproveDeal}
          >
            Approve
          </button>
          <p className=""> 
            <button
              type="button"
              className="text-brightRed text-base pt-10 text-center"
              onClick={handleDisputeDeal}
            >
                 Dispute
            </button>
            {/* <Link href="dispute"> Disputes </Link> */}
            {/* <Link onClick={handleDisputeDeal}> Disputes </Link> */}
          </p> 
        </div>
      </div>
    </>
  );
};

//proptypes validation...
PendingProducts.propTypes = {
  product: PropTypes.object.isRequired,
};

export default PendingProducts;
