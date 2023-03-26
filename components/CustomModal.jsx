import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { activateMerchant } from "../store/users/userSlice";
import { createVendor } from "../store/auth/vendorService";
import { useSelector } from "react-redux";

const CustomModal = ({ closeModal, closeDropDown }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const state = useSelector((state) => state);
  console.log(user, state);

  /**
   * When the user switchToMerchant..
   * the flow is supposed to be that the user is logged out and he's logged in again..
   * At this time around he's seeing the vendor layout..
   */
  const switchToMerchant = () => {
    dispatch(activateMerchant());
    dispatch(createVendor({ id: user.userId, catId: "Furniture" })).then(
      (action) => {
        console.log(action);
      }
    );
    closeDropDown();
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed top-10 right-14 z-50 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={closeModal}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button> */}
          <div className="flex flex-col p-6">
            {/* <svg
              aria-hidden="true"
              className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg> */}
            <h3 className="mb-5 text-lg font-bold text-green-600 dark:text-gray-400">
              Are you sure you want to become a merchant?
            </h3>
            <p className="text-sm text-gray-500">
              Please, Understand that <b>Become a Merchant</b> requires you to
              update your account information on your profile. information like
              your store name, store address, bank acount details, would be
              required and a few other changes to your account.
            </p>
            <form>
              <div className="mb-10 mt-3">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm text-gray-500"
                >
                  Please choose a store category
                </label>
                <select
                  name="category"
                  id="category"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                >
                  <option value="">Fashion Design</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
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
                  onClick={switchToMerchant}
                  className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I am
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  closeDropDown: PropTypes.func.isRequired,
};

export default CustomModal;
