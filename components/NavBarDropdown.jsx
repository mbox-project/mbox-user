import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../public/img/profile.svg";
import saved from "../public/img/saved.svg";
import { BiQuestionMark } from "react-icons/bi";
import PropTypes from "prop-types";
import CustomModal from "./CustomModal";
import { useSelector, useDispatch } from "react-redux";
import { selectRole } from "../store/selectors/selectors";
import { LogOut } from "../store/store";
import { useStore } from "react-redux";
import { useRouter } from "next/router";
import { makeStore } from "../store/store";

const NavBarDropdown = ({ handleLogout, closeDropDown, isMerchant }) => {
  const { replace } = useRouter();
  const store = makeStore();
  const [showVendorModal, setShowVendormodal] = useState(false);
  const role = useSelector(selectRole);
  const username = useSelector((state) => state.auth.user?.fullname)?.split(
    " "
  )[0];
  const dispatch = useDispatch();
  const handleModalVisibility = () => {
    setShowVendormodal(!showVendorModal);
  };
  const closeModal = () => {
    setShowVendormodal(false);
  };

  return (
    <div className="fixed top-[10%] right-0">
      <div className="flex flex-col space-y-4 justify-start pl-4 py-6 bg-white w-64 rounded-md">
        <div className="profileDetails mb-3">
          <h3 className="text-lg font-bold">{username}</h3>
          <span>{role === "user" ? "Buyer" : "vendor"}</span>
        </div>
        <hr />
        {role === "user" && (
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
        <div
          // onClick={() => dispatch(LogOut())}
          className="flex justify-center items-center text-center text-red-500 mt-3"
        >
          <button
            onClick={() => {
              store.__persistor
                .purge()
                .then(() => console.log("state cleared"))
                .catch(() => console.log("error"));
              if (typeof window !== undefined) {
                sessionStorage.removeItem("token");
              }
              dispatch(LogOut());
              replace("/auth/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
      {showVendorModal && (
        <CustomModal closeModal={closeModal} closeDropDown={closeDropDown} />
      )}
    </div>
  );
};

NavBarDropdown.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  closeDropDown: PropTypes.func.isRequired,
  isMerchant: PropTypes.bool.isRequired,
};
export default NavBarDropdown;
