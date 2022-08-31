import React from "react";
import Image from "next/image";
import Link from "next/Link";
import logo from "../../public/img/logo.svg";
import arrow from "../../public/img/arrow.svg";
import bell from "../../public/img/bell.svg";
import profile from "../../public/img/profile.svg";
import saved from "../../public/img/saved.svg";
import Search from "./Search";
import PropTypes from "prop-types";
import { BiQuestionMark } from "react-icons/bi";

const Navbar = ({ showbar, showSideBar, switchToMerchant }) => {
  return (
    <div className="customNavbar mx-auto relative font-sans w-full">
      <nav className="p-2 mx-auto shadow-md hover:shadow-lg">
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
            <button
              className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center
                                 border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white"
            >
              <span>Pay Invoice</span>
              <Image src={arrow} width={10} height={10} alt="arrow" />
            </button>
            <div className="hidden m-0 md:block md:mt-2">
              <Image src={bell} width={25} height={30} alt="bell" />
            </div>
            <div className="dropdown relative mt-2">
              <div className="flex items-center justify-center cursor-pointer">
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
              <div className="hidden absolute dropdown-content right-0 mt-2 z-50 flex-col space-y-4 justify-start pl-4 py-6 bg-white w-64 rounded-md">
                <div className="profileDetails mb-3">
                  <h3 className="text-lg font-bold">Wahab Micheal</h3>
                  <span>Buyer</span>
                </div>
                <hr />
                <div className="flex space-x-2">
                  <button
                    className="border border-brightRed text-center rounded-lg p-3"
                    onClick={() => switchToMerchant()}
                  >
                    <span className="text-gray-900"> BECOME A MERCHANT</span>
                  </button>
                  <span className="border border-brightRed rounded-full p-1 h-6 mt-3">
                    <BiQuestionMark className="text-black" />
                  </span>
                </div>
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
                  <Link href="#">Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

//proptypes validation...
Navbar.propTypes = {
  showbar: PropTypes.func.isRequired,
  showSideBar: PropTypes.bool.isRequired,
  switchToMerchant: PropTypes.func.isRequired,
};

export default Navbar;
