import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import Image from "next/image";
import { toastify } from "../../helpers";

import { approveDeal, getSingleDeal } from "../../store/deals/dealService";
import { formatMoney } from "../../helpers/NairaFormat";


const DetailsModal = ({ open, setOpen, dealId, image, name}) => {
  const [loading, setLoading] = useState(false);
  const [successfulDetails, setSucessfulDetails] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    if (dealId) {
      setLoading(true);
      dispatch(getSingleDeal(dealId))
        .unwrap()
        .then((response) => {
          setSucessfulDetails(response?.data);
        })
        .catch(() => {
          toastify.alertError("Failed to get details", 3000);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [dealId, dispatch]);

 

  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
  
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format, 0 -> 12
    const formattedMinutes = minutes.toString().padStart(2, '0'); // Ensure two digits
  
    return `${isToday ? 'Today' : date.toDateString()}, ${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  return (
    <Modal open={open} onCancel={() => setOpen(false)} footer={null} >
      <div className="">

        <div className=" flex justify-between mt-7">
          <div className=" flex gap-3 items-center">
          <div>
            {
              image && (
                <Image 
                src={image}
                height={50}
                width={50}
                />
              )

            }
           
          </div>
          <div>
            <span>Purchased from Giveon’s Crib </span>
            <h4>{name}</h4>
            <h5>{formatDateTime(successfulDetails?.dateCreated)}</h5>
          </div>
          </div>
          <div >{formatMoney(successfulDetails?.total)}</div>
        </div>

        <div className=" text-center mt-8">Invoice Tag: {successfulDetails?.invoiceTag}</div>
       
      </div>
    </Modal>
  );
};
export default DetailsModal;