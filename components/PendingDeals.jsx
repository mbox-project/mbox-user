import React, { useState } from "react";
import Image from "next/image";
import shirt from "../public/img/shirt.png";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { disputeDeals } from "../store/deals/dealService";
import { toastify } from "../helpers";
import { LoadingOutlined } from "@ant-design/icons";
import ApproveDealModal from "./DealsModal/ApproveDealModal";
import DisputeDealModal from "./DealsModal/disputeModal";
import CancelDealModal from "./DealsModal/cancelDeal";

const PendingDeals = ({ product }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [disputeModal, setDisputeModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const user = useSelector((state) => state.auth.user);


  const approve = () => {
    setModal(true)
  }
  const dispute = () => {
    setDisputeModal(true)
  }

  const cancelDeal = () => {
    setCancelModal(true)
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-1 border border-gray-500 rounded-large p-6 justify-around shadow-lg md:flex md:flex-row hover:-translate-y-1 hover:scale-10  duration-200">
        <div className="flex justify-center items-center">
          {
            product?.product?.otherDetails?.imageUrl && (
              <Image src={product?.product?.otherDetails?.imageUrl} width={100} height={100} alt="product" />
            )
          }
          
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-900 font-bold">{product?.product?.description}</h2>
          <h3 className="text-sm">{"type"}</h3>
          <h2 className="text-md  text-gray-500">Invoice Tag: {product?.invoiceTag}</h2>
          <h2 className="text-md  text-gray-500">{"owner"}</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-gray-900 font-bold">${product?.product?.price}</h2>
          <h3 className="text-md  text-gray-500">Size: {"size"}</h3>
          <h2>
            <span className="text-md  text-gray-500">Color:</span>
            <span className="font-bold"> {product?.product?.otherDetails?.colors?.$values[0]}</span>
          </h2>
          <h2 className="text-md  text-gray-500">
            QTY: <span className="text-red-500">{product?.product?.quantity}</span>
          </h2>
        </div>

        {
          user.role === "user" ? (
            <div className="flex flex-col gap-6 justify-between">
              <span className="flex justify-center md:justify-end">
                <button
                  type="button"
                  className=" rounded-md px-5 py-3 drop-shadow-custom text-white  bg-[#26A17B]"
                  onClick={approve}
                >
                  Approve
                </button>
              </span>
              <button
                type="button"
                className=" text-[#F90808] font-medium text-center items-center  p-2  h-12 "
                onClick={dispute}
              >
                Dispute
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6 justify-between">
              <button
                type="button"
                className=" bg-[#F90808] text-[white] rounded-md px-5 py-3 drop-shadow-custom "
                onClick={cancelDeal}
              >
                Cancel
              </button>
            </div>
          )

        }

      </div>
      <ApproveDealModal
        open={modal}
        setOpen={setModal}
        buyer={product?.buyerId}
        seller={product?.vendorId}
        invoiceId={product?.invoiceId}
        dealId={product?.id}
      />

      <DisputeDealModal
        open={disputeModal}
        setOpen={setDisputeModal}
        dealId={product?.id}
      />

      <CancelDealModal
        open={cancelModal}
        setOpen={setCancelModal}
        dealId={product?.id}
      />
    </>
  );
};

//proptypes validation...
PendingDeals.propTypes = {
  product: PropTypes.object.isRequired,
};

export default PendingDeals;
