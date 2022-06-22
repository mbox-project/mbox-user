import React from "react";
import Image from "next/image";
import logo from "../../public/buyersImg/logo.svg";
import arrow from "../../public/buyersImg/arrow.svg";
import bell from "../../public/buyersImg/bell.svg";
import profile from "../../public/buyersImg/profile.svg";
import Search from "./Search";

const Navbar = ({ showbar }) => {
  return (
    <div className="customNavbar mx-auto relative w-full font-sans">
      <nav className="p-2 mx-auto shadow-md hover:shadow-lg">
        {/* flex Container */}
        <div className="flex items-center justify-between px-10 md:px-14 md:space-x-10">
          <svg
            className="flex mt-2 items-center cursor-pointer md:hidden"
            fill="#491546"
            viewBox="0 0 100 80"
            width="40"
            height="40"
            onClick={showbar}
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
          <Image src={logo} className="h-2" alt="logo" />
          <Search />
          <div className="flex items-center space-x-6">
            <button
              className="text-sm p-1 text-brightRed bg-white rounded-lg flex gap-2 items-center
                                 border-solid border-2 border-red-500  md:px-6 md:p-2 hover:bg-red-500 hover:text-white"
            >
              <span>Pay Invoice</span>
              <Image src={arrow} width={10} height={10} alt="arrow" />
            </button>
            <div className="hidden  md:block md:mt-2">
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

export default Navbar;
