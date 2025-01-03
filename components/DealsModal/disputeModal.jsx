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
import { approveDeal, disputeDeals } from "../../store/deals/dealService";
import { SET_PENDING_DEALS } from "../../store/deals/dealsSlice";
import CustomAlertModal from "../../Utils/CustomAlertModal";


const DisputeDealModal = ({ open, setOpen, dealId }) => {
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  function updateState() {
    dispatch(SET_PENDING_DEALS(true))
   }
  const approve = () => {
    setLoading(true);
    dispatch(disputeDeals(
      {
        dealId: dealId,
        message: comment
      }
    ))
      .unwrap()
      .then(() => {
        setLoading(false);
        setOpen(false);
        CustomAlertModal.show("success", "Dispute Created","You’ve have successfully creted a dispute", updateState)
      })
      .catch(() => {
        setLoading(false);
        setOpen(false);
        CustomAlertModal.show("error", "Dispute Failed","Error creating dispute")
      });
  };

  return (
    <Modal title="Dispute" open={open} onCancel={() => setOpen(false)} footer={null} wrapClassName="disputeModal">
      <div className="">
        <div className="text-center">
          {/* <h3 className="mb-5 text-lg font-bold text-green-600 dark:text-gray-400">
            Are you sure you're satisfied with this product?
          </h3> */}
          <h2 className="mb-5 text-sm text-gray-400 font-normal text-left dark:text-gray-400">
            We are so sorry for your experience, please add comment so that we will be able to assist you better.
          </h2>
        </div>
        <div className=" bg-transparent text-center border-red">
          <textarea
            placeholder="Type your ccomment here..."
            className=" resize-none border border-black rounded-lg h-[150px] w-[90%] p-2 bg-transparent"
            value={comment} // Bind textarea value to state
            onChange={(e) => setComment(e.target.value)}
          >

          </textarea>
        </div>
        <div className="flex justify-end space-x-2 mt-5">
          <button
            data-modal-toggle="popup-modal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => setOpen(false)}
          >
            cancel
          </button>
          <button
            data-modal-toggle="popup-modal"
            type="button"
            onClick={approve}
            //onClick={() => {; }}
            className="text-white bg-[#F90808] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            {
              loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : 'Submit'
            }

          </button>
        </div>
      </div>

      <CustomAlertModal />
    </Modal>
  );
};
export default DisputeDealModal;