import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";
import profile from "../../public/img/profile.svg";
import purchase from "../../public/img/purchase.svg";
import report from "../../public/img/report.svg";
import saved from "../../public/img/saved.svg";
import thumb from "../../public/img/thumb.svg";
import MobileSidebar from "./MobileSidebar";
import PropTypes from "prop-types";

const Sidebar = ({ showSideBar }) => {
  return (
    <>
      <aside className="hidden w-80 bg-white-700 mt-10 flex-col justify-between shadow-md md:block">
        <h6 className="py-4 font-bold text-lg pl-5 text-white bg-brightRed">
          My Account
        </h6>
        <div className="pl-5">
          <ul className="space-y-8 pt-10">
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={profile} width={20} height={20} alt="profile" />
              <Link href="/editprofile/"> Edit Profile </Link>
            </li>
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <BiWallet size={20} />
              <Link href="/wallet/"> My Wallet </Link>
            </li>
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <BsCartDash size={20} />
              <Link href="/orders/"> Orders </Link>
            </li>
            <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={saved} width={20} height={20} alt="profile" />
              <Link href="/saveditems/"> Saved Items </Link>
            </li>
            <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={purchase} width={20} height={20} alt="profile" />
              <Link href="#"> Purchase History </Link>
            </li>
            <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
              <BsCartDash size={20} />
              <Link href="#"> Pending Deals </Link>
            </li>
            <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
              <BsCartDash size={20} />
              <Link href="#"> Succesful Deals</Link>
            </li>
          </ul>
        </div>
        <h6 className="mt-8 py-4 font-bold text-lg pl-5 text-white bg-brightRed">
          Additional Info
        </h6>
        <div className="pl-5">
          <ul className="space-y-8 pt-10 mb-20">
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={thumb} width={20} height={20} alt="profile" />
              <Link href="#"> Endorsed Business </Link>
            </li>
            <li className="flex items-center  text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={report} width={20} height={20} alt="profile" />
              <Link href="#"> Report a Vendor </Link>
            </li>
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={profile} width={20} height={20} alt="profile" />
              <Link href="#"> Disputes </Link>
            </li>
          </ul>
        </div>
      </aside>
      <MobileSidebar showSideBar={showSideBar} />
    </>
  );
};

Sidebar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
};

export default Sidebar;
