import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { message, Modal } from "antd";

import "@fortawesome/fontawesome-free/css/all.css";
import { Rate } from 'antd';
import { ratingDeals } from "../../store/deals/dealService";
import { LoadingOutlined } from "@ant-design/icons";
import { SET_PENDING_DEALS } from "../../store/deals/dealsSlice";


const CommentAndRatingModal = ({ openComment, setCommentOpen, buyer, seller, invoiceId , setOpen}) => {
  const [loading, setLoading] = useState(false);
  const [reviewRating, setReviewRating] = useState();
  const [comment, setComment] = useState("");
  const [data, setData] = useState({
   
      invoiceId: invoiceId,
      buyer: buyer,
      seller: seller,
      rating: reviewRating,
      comment: comment
  });



  const dispatch = useDispatch();

  //const closeAllModals = () => {
    //setCommentOpen(false); // Close the CommentAndRatingModal first
   // setTimeout(() => {
        //closeCustomAlertModal(); // Close the CustomAlertModal after a brief delay
    //    dispatch(SET_PENDING_DEALS(true))
   //     setOpen(false); // Close the ApproveDealModal after a brief delay
   // }, 300); // Adjust the delay as needed (300ms should be sufficient)
  //  console.log("closing all modals");
//};
  const closeModal = () => {
    setCommentOpen(false); // Close the CommentAndRatingModal
    dispatch(SET_PENDING_DEALS(true));
    console.log("closing rate")
  };

  const rate = () =>{
    setLoading(true);
    dispatch(ratingDeals(data))
    .unwrap()
    .then(()=> {
      message.success("Rating successful")
      setLoading(false);
      closeModal();
       // Reset state
       setReviewRating();
       setComment("");
       setData({
         invoiceId: invoiceId,
         buyer: buyer,
         seller: seller,
         rating: undefined,
         comment: ""
       });
     
    })
    .catch(()=> {
      message.error("Rating Failed")
      setLoading(false);
      setOpen(false);
      setCommentOpen(false);
       // Reset state
       setReviewRating();
       setComment("");
       setData({
         invoiceId: invoiceId,
         buyer: buyer,
         seller: seller,
         rating: undefined,
         comment: ""
       });
      
    })
  }

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      rating: reviewRating,
      comment: comment
    }));
  }, [reviewRating, comment]);

  return (
    <Modal open={openComment} onCancel={closeModal} footer={null} maskClosable={false} wrapClassName="commentModal">
      <div className=" bg-[#FAFAFA]">
        <div className="text-center">
          {/* <h3 className="mb-5 text-lg font-bold text-green-600 dark:text-gray-400">
            Are you sure you're satisfied with this product?
          </h3> */}
          <h2 className="mb-5 text-sm font-medium text-left dark:text-gray-400">
            Drop a comment and rate this store
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
        <div className="flex justify-center items-center space-x-2 mt-5">
         <Rate className=" Rate_comment " style={{ }} value={reviewRating} onChange={setReviewRating}/>
        </div>
        <div className="flex justify-end space-x-2 mt-5">
            <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={closeModal}
            >
                No, cancel
            </button>
            <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-[#26A17B] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                onClick={rate}
            >
                {
              loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : 'Submit'
            }
                
            </button>
        </div>
      </div>
    </Modal>
  );
};
export default CommentAndRatingModal;