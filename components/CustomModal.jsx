import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { createVendor } from "../store/auth/vendorService";
import { useSelector } from "react-redux";
import { getProductCategories } from "../store/product/productService";
import { useState } from "react";
import { toastify } from "../helpers";
import { LogOut } from "../store/store";
import { makeStore } from "../store/store";

const CustomModal = ({ closeModal, closeDropDown }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  //const { replace } = useRouter();
  const store = makeStore();

  const user = useSelector((state) => state.auth.user);
  const { categories } = useSelector((state) => state.product);
  const [category, setCategory] = useState("");
  const onSelectCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    dispatch(getProductCategories())
      .unwrap()
      .then((action) => {
        // setCategory(action.data[0].id);
      })
      .catch((error) => console.log(error));
  }, []);

  /**
   * When the user switchToMerchant..
   * the flow is supposed to be that the user is logged out and he's logged in again..
   * At this time around he's seeing the vendor layout..
   */
  const switchToMerchant = (category) => {
    console.log(user.id, category);
    
      dispatch(createVendor({ id: user.id, catId: category }))
       .unwrap()
       .then((action) => {
          toastify.alertSuccess("You are now a vendor", 3000);
          //console.log(action);
          //closeDropDown();
          //router.push("/editprofile");

          // Logout logic
          store.__persistor
          .purge()
          .then(() => console.log("state cleared"))
          .catch(() => console.log("error"));
          if (typeof window !== undefined) {
            sessionStorage.removeItem("token");
          }
          dispatch(LogOut());
          router.push("/auth/login");
        }
    )
    .catch((error) => console.log(error));
  };

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
                  value={category}
                  onChange={onSelectCategory}
                  placeholder="select category"
                  className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  {categories.map((e, i) => (
                    <option key={i} value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => {
                    closeModal();
                    console.log(category);
                  }}
                >
                  No, cancel
                </button>
                <button
                  data-modal-toggle="popup-modal"
                  type="button"
                  onClick={() => switchToMerchant(category)}
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
