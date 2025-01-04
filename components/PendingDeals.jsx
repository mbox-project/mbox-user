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
import { formatMoney } from "../helpers/NairaFormat";

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
      <div className="flex flex-col justify-around gap-4 p-6 duration-200 border border-gray-500 shadow-lg md:gap-1 rounded-large md:flex md:flex-row hover:-translate-y-1 hover:scale-10">
        <div className="flex items-center justify-center">
          {
            product?.product?.otherDetails?.imageUrl && product?.product?.otherDetails?.imageUrl !== "string" && (  
              <Image src={product?.product?.otherDetails?.imageUrl} width={100} height={100} alt="product" />
            )
          }
          
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-gray-900">{product?.product?.description}</h2>
          <h3 className="text-sm">{"type"}</h3>
          <h2 className="text-gray-500 text-md">Invoice Tag: {product?.invoiceTag}</h2>
          <h2 className="text-gray-500 text-md">{"owner"}</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-gray-900">{formatMoney(product?.product?.price)}</h2>
          <h3 className="text-gray-500 text-md">Size: {"size"}</h3>
          <h2>
            <span className="text-gray-500 text-md">Color:</span>
            <span className="font-bold"> {product?.product?.otherDetails?.colors?.$values[0]}</span>
          </h2>
          <h2 className="text-gray-500 text-md">
            QTY: <span className="text-red-500">{product?.product?.quantity}</span>
          </h2>
        </div>

        {
          user.role === "user" ? (
            <div className="flex flex-col justify-between gap-6">
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
            <div className="flex flex-col justify-between gap-6">
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
