import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import newLogo from "../../public/img/marketbox.png";
import arrow from "../../public/img/arrow.svg";
import bell from "../../public/img/bell.svg";
import profile from "../../public/img/profile.svg";
import Search from "./Search";
import PropTypes from "prop-types";
import NavBarDropdown from "../NavBarDropdown";
import { useSelector } from "react-redux";
import { selectRole } from "../../store/selectors/selectors";
import Link from "next/link";
import { Popover } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import PayInvoiceModal from "../payInvoice/PayInvoice";
import PromoteBusinessModal from "../PromoteBusinessModal/PromoteBusinessModal";

const Navbar = ({ showbar, showSideBar, handleLogout, isMerchant }) => {
  const role = useSelector(selectRole);
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPromoteStore, setOpenPromoteStore] = useState(false);
  const handleNav = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <>
      <div className="customNavbar mx-auto sticky top-0 z-[10] bg-white font-sans w-full">
        <div className="p-2 mx-auto shadow-md hover:shadow-lg relative">
          {/* flex Container */}
          <div className="flex items-center justify-between gap-[1rem] px5 md:px8 md:space-x10">
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
            <div className="hidden md:block cursor-pointer px-2">
              <Link href="/" className="w-[100px] h-[50px]">
                {/* <Image src={logo} alt="logo" width="100px" height="50px" /> */}

                <Image
                  src={newLogo}
                  alt="logo"
                  width={200}
                  height={50}
                  // className="max-w-4 max-h-2"
                />
              </Link>
            </div>
            {/* removed search */}
            {/* <Search /> */}

            <div className="flex items-center justify-between gap-[0.8rem] space-x6">
              {role === "vendor" ? (
                <div className="flex gap-[0.5rem]">
                  <Link href="/promotebusiness" >
                  <button
                    className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center
                                 border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white"
                  >
                    <span>Promote Store</span>
                    <Image src={arrow} width={10} height={10} alt="arrow" />
                  </button>
                  </Link>

                  <Link href="/generateinvoice">
                    <button className="hidden text-sm  text-brightRed bg-white rounded-lg gap-2 items-center border-solid border-2 border-red-500 md:flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white">
                      <span>Generate Invoice</span>
                      <Image src={arrow} width={10} height={10} alt="arrow" />
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => setOpen(true)}
                  className=" p-2 text-sm  text-brightRed bg-white rounded-lg gap-2 items-center
                                 border-solid border-2 border-red-500 flex md:px-6 md:p-2 hover:bg-brightRed hover:text-white"
                >
                  <span>Pay Invoice</span>
                  <Image src={arrow} width={10} height={10} alt="arrow" />
                </button>
              )}
              <div className="relative">
                <Popover
                  content={
                    <NavBarDropdown
                      handleLogout={handleLogout}
                      isMerchant={isMerchant}
                    />
                  }
                  trigger="click"
                  open={openNav}
                  onOpenChange={handleNav}
                  arrow={false}
                  placement="bottom"
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    <Image src={profile} width={25} height={30} alt="pics" />
                    <RiArrowDropDownLine />
                  </div>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PayInvoiceModal open={open} setOpen={setOpen} />
      <PromoteBusinessModal
        open={openPromoteStore}
        setOpen={setOpenPromoteStore}
      />
    </>
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
