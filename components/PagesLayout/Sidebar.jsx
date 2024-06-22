import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { VscLaw } from "react-icons/vsc";
import profile from "../../public/img/profile.svg";
import purchase from "../../public/img/purchase.svg";
import report from "../../public/img/report.svg";
import saved from "../../public/img/saved.svg";
import thumb from "../../public/img/thumb.svg";
import MobileSidebar from "./MobileSidebar";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectRole } from "../../store/selectors/selectors";

const Sidebar = ({ showSideBar, isMerchant }) => {
  const role = useSelector(selectRole);
  return (
    <>
      <aside className="hidden bg-white w-80 bg-white-700 mt-8 flex-col justify-between shadow-md md:block rounded-r-2xl overflow-hidden">
        <h6 className=" mt-5 py-3 font-bold text-lg pl-5 text-white bg-brightRed">
          My Account
        </h6>
        <div className="pl-5">
          <ul className="space-y-8 pt-10">
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={profile} width={20} height={20} alt="profile" />
              <Link href="/editprofile/"> Edit Profile </Link>
            </li>
            {role === "vendor" && (
              <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
                <BsCartDash size={20} />
                <Link href="/products/"> Products </Link>
              </li>
            )}
            {role === "vendor" && (
              <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
                <LiaFileInvoiceDollarSolid size={20} />
                <Link href="/orders/"> Invoices </Link>
              </li>
            )}
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <BiWallet size={20} />
              <Link href="/wallet/"> My Wallet </Link>
            </li>
            <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
              <VscLaw size={20}/>
              <Link href="dispute"> Disputes </Link>
            </li>
            <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
              <BsCartDash size={20} />
              <Link href="/pendingdeals/"> Pending Deals </Link>
            </li>
            <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
              <BsCartDash size={20} />
              <Link href="/successfuldeals/"> Succesful Deals</Link>
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
              <Link href="/endorse"> Endorsed Business </Link>
            </li>
            <li className="flex items-center  text-sm space-x-4 cursor-pointer text-[#F90808] hover:text-gray-600">
              <Image src={report} width={20} height={20} alt="profile" />
              {
                role === "vendor" ? (
                  <Link href="/report"> Report a Buyer </Link>
                ) : (
                  <Link href="/report"> Report a Vendor </Link>
                )
              }
            
            </li>
            <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
              <Image src={saved} width={20} height={20} alt="profile" />
              <Link href="/saveditems/"> Saved Items </Link>
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
  isMerchant: PropTypes.bool.isRequired,
};

export default Sidebar;
