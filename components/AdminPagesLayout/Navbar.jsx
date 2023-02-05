import React, { useState } from "react";
import Image from "next/image";
import bell from "../../public/img/bell.svg";
import profile from "../../public/img/profile.svg";
import Search from "./Search";
import PropTypes from "prop-types";
import NavBarDropdown from "../NavBarDropdown";

const Navbar = ({ /* showbar, showSideBar, */ handleLogout, isMerchant }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const closeDropDown = () => {
    setShowDropDown(false);
  };
  return (
    <div className="customNavbar mx-auto relative font-sans w-full">
      <div className="py-5 mx-auto ">
        <div className="flex justify-between gap-5">
          <Search />
          <div className="flex items-center space-x-6">
            <div className="hidden m-0 md:block md:mt-2">
              <Image src={bell} width={25} height={30} alt="bell" />
            </div>
            <div className="dropdown relative mt-2 flex">
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={handleShowDropDown}
              >
                <Image src={profile} width={25} height={30} alt="pics" />
                <svg
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {showDropDown && (
                <NavBarDropdown
                  handleLogout={handleLogout}
                  closeDropDown={closeDropDown}
                  isMerchant={isMerchant}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//proptypes validation...
Navbar.propTypes = {
  showbar: PropTypes.func.isRequired,
  showSideBar: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isMerchant: PropTypes.bool.isRequired,
};

export default Navbar;
