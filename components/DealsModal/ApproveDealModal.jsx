import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import Input from "../Input";
import Label from "../Label";
import Button from "../Button";
import Spinner from "../Spinner";
import { toastify } from "../../helpers";
import CommentAndRatingModal from "./CommentAndRatingsModal";
import { LoadingOutlined } from "@ant-design/icons";
import { approveDeal } from "../../store/deals/dealService";


const ApproveDealModal = ({ open, setOpen, buyer, seller, invoiceId, dealId }) => {
  const [loading, setLoading] = useState(false);
  const [openComment, setCommentOpen] = useState(false);

  const dispatch = useDispatch();

  const approve = () => {
    setLoading(true);
    dispatch(approveDeal({ dealId: dealId }))
      .unwrap()
      .then(() => {
        toastify.alertSuccess("Order Approved", 3000);
        setLoading(false);
        setCommentOpen(true);
      })
      .catch(() => {
        toastify.alertError("Approval failed", 3000);
        setLoading(false);
        
      });
  };

  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null} >
      <div className="">
        <div className=" text-center">
          <h3 className="mb-5 text-lg font-bold text-[#26A17B] dark:text-gray-400">
            Are you sure you're satisfied with this product?
          </h3>
        </div>
        <div className="bg-white text-center">
          <p>
            Please understand that clicking “Yes, I am”, means you’re satisfied</p>
          <p>with the product, Hence money would be released to the vendor </p>
        </div>
        <div className="flex justify-end space-x-2 mt-5">
          <button
            data-modal-toggle="popup-modal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => setOpen(false)}
          >
            No, cancel
          </button>
          <button
            data-modal-toggle="popup-modal"
            type="button"
            onClick={approve}
            //onClick={() => {; }}
            className="text-white bg-[#26A17B] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            {
              loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : 'Yes, I am'
            }

          </button>
        </div>

        <CommentAndRatingModal
          openComment={openComment}
          setCommentOpen={setCommentOpen}
          buyer={buyer}
          seller={seller}
          invoiceId={invoiceId}
          setOpen={setOpen}
        />
      </div>
    </Modal>
  );
};
export default ApproveDealModal;