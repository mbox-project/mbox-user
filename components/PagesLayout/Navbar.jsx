import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import arrow from "../../public/img/arrow.svg";
import bell from "../../public/img/bell.svg";
import profile from "../../public/img/profile.svg";
import Search from "./Search";
import PropTypes from "prop-types";
import NavBarDropdown from "../NavBarDropdown";
import { useSelector } from "react-redux";
import { selectRole } from "../../store/selectors/selectors";
import Link from "next/link";

const Navbar = ({ showbar, showSideBar, handleLogout, isMerchant }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const role = useSelector(selectRole);
  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const closeDropDown = () => {
    setShowDropDown(false);
  };
  return (
    <div className="customNavbar mx-auto relative font-sans w-full">
      <div className="p-2 mx-auto shadow-md hover:shadow-lg">
        {/* flex Container */}
        <div className="flex items-center justify-between px-5 md:px-8 md:space-x-10">
          {!showSideBar ? (
            <svg
              className="flex mt-2 items-center cursor-pointer md:hidden"
              fill="#491546"
              viewBox="0 0 100 80"
              width="30"
              height="30"
              onClick={showbar}
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          ) : (
            <svg
              className="h-8 w-8 md:hidden"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={showbar}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
          <div className="hidden md:block">
            <Image src={logo} alt="logo" width="100px" height="50px" />
          </div>
          <Search />
          <div className="flex items-center space-x-6">
            {role === "vendor" ? (
              <div className="flex gap-[0.5rem]">
                <button
                  className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center
                                 border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white"
                >
                  <span>Pay Invoice</span>
                  <Image src={arrow} width={10} height={10} alt="arrow" />
                </button>
                <Link href="/generateinvoice">
                  <button className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white">
                    <span>Generate Invoice</span>
                    <Image src={arrow} width={10} height={10} alt="arrow" />
                  </button>
                </Link>
              </div>
            ) : (
              <button
                className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center
                                 border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white"
              >
                <span>Pay Invoice</span>
                <Image src={arrow} width={10} height={10} alt="arrow" />
              </button>
            )}
            {/* <button
              className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center
                                 border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white"
            >
              <span>Pay Invoice</span>
              <Image src={arrow} width={10} height={10} alt="arrow" />
            </button> */}
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
