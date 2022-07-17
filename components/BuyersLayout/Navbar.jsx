import React from "react";
import Image from "next/image";
import logo from "../../public/buyersImg/logo.svg";
import arrow from "../../public/buyersImg/arrow.svg";
import bell from "../../public/buyersImg/bell.svg";
import profile from "../../public/buyersImg/profile.svg";
import Search from "./Search";
import PropTypes from "prop-types";

const Navbar = ({ showbar, showSideBar }) => {
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
          <Image
            src={logo}
            className="h-2"
            alt="logo"
            width="100px"
            height="50px"
          />
          <Search />
          <div className="flex items-center space-x-6">
            <button
              className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center
                                 border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-red-500 hover:text-white"
            >
              <span>Pay Invoice</span>
              <Image src={arrow} width={10} height={10} alt="arrow" />
            </button>
            <div className="hidden m-0 md:block md:mt-2">
              <Image src={bell} width={32} height={32} alt="bell" />
            </div>
            <div className="mt-2">
              <Image src={profile} width={32} height={32} alt="pics" />
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
};

export default Navbar;
