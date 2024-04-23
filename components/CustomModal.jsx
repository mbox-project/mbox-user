import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { Drawer } from 'antd';
import BecomeVendor from "./BuyersPage/becomeVendor";


const CustomModal = ({ closeModal, closeDropDown }) => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };



  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState({
    email: user?.email,
    storeDescription: "",
    catId: "",
    storeName: "",
    storeAbbrevation: "",
    storeAddress: "",
    bankName: "",
    accountName: "",
    accountNumber: ""
  });

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed top-10 right-14 z-50 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex flex-col p-6">
            <h3 className="mb-5 text-lg font-bold text-green-600 dark:text-gray-400">
              Are you sure you want to become a merchant?
            </h3>
            <p className="text-sm text-gray-500">
              Please, Understand that <b>Become a Merchant</b> requires you to
              update your account information on your profile. information like
              your store name, store address, bank acount details, would be
              required and a few other changes to your account.
            </p>


            <div className="flex justify-end space-x-2">
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={() => {
                  closeModal();
                }}
              >
                No, cancel
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                onClick={showDrawer}
                className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I agree
              </button>
            </div>

          </div>
        </div>
      </div>
      <Drawer title="Become a Vendor" onClose={onClose} open={open} width={720}>
        <BecomeVendor data={data} setData={setData} />
      </Drawer>
    </div>
  );
};

CustomModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  closeDropDown: PropTypes.func.isRequired,
};

export default CustomModal;
