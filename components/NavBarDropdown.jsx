import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import profile from "../public/img/profile.svg";
import saved from "../public/img/saved.svg";
import { BiQuestionMark } from "react-icons/bi";
import PropTypes from "prop-types";
import CustomModal from "./CustomModal";

const NavBarDropdown = ({ handleLogout, closeDropDown, isMerchant }) => {
  const [showVendorModal, setShowVendormodal] = useState(false);

  const handleModalVisibility = () => {
    setShowVendormodal(!showVendorModal);
  };
  const closeModal = () => {
    setShowVendormodal(false);
  };

  return (
    <>
      <div className="absolute dropdown-content right-0 mt-8 z-50 flex flex-col space-y-4 justify-start pl-4 py-6 bg-white w-64 rounded-md">
        <div className="profileDetails mb-3">
          <h3 className="text-lg font-bold">Wahab Micheal</h3>
          <span>Buyer</span>
        </div>
        <hr />
        {!isMerchant ? (
          <div className="flex space-x-2">
            <button
              className="border border-brightRed text-center rounded-lg p-3"
              onClick={handleModalVisibility}
              data-modal-toggle="popup-modal"
            >
              <span className="text-gray-900"> BECOME A MERCHANT</span>
            </button>
            <span className="border border-brightRed rounded-full p-1 h-6 mt-3">
              <BiQuestionMark className="text-black" />
            </span>
          </div>
        ) : (
          <div></div>
        )}
        <div className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
          <Image src={profile} width={20} height={20} alt="profile" />
          <Link href="/account/"> My Account </Link>
        </div>
        <div className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
          <Image src={saved} width={20} height={20} alt="profile" />
          <Link href="/saveditems/"> Saved Items </Link>
        </div>
        <hr />
        <div className="flex justify-center items-center text-center text-red-500 mt-3">
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
      {showVendorModal && (
        <CustomModal closeModal={closeModal} closeDropDown={closeDropDown} />
      )}
    </>
  );
};

NavBarDropdown.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  closeDropDown: PropTypes.func.isRequired,
  isMerchant: PropTypes.bool.isRequired,
};
export default NavBarDropdown;
