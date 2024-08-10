import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { PiMegaphone } from "react-icons/pi";
import profile from "../../public/img/profile.svg";
import purchase from "../../public/img/purchase.svg";
import report from "../../public/img/report.svg";
import saved from "../../public/img/saved.svg";
import wallet from "../../public/img/wallet.svg";
import thumb from "../../public/img/thumb.svg";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectRole } from "../../store/selectors/selectors";

const MobileSidebar = ({ showSideBar }) => {
  const role = useSelector(selectRole);
  return (
    <>
      {/* Mobile Menu sidebar */}
      {showSideBar && (
        <aside className="w-1/2 bg-white z-30 flex flex-col fixed top-[55px] left-0 shadow-md h-svh md:hidden overflow-y-scroll pb-5">
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
                <Image src={wallet} width={20} height={20} alt="profile" />
                <Link href="/wallet"> My Wallet </Link>
              </li>
              <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
                <Image src={profile} width={20} height={20} alt="profile" />
                <Link href="#"> Disputes </Link>
              </li>
              <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
                <BsCartDash size={20} />
                <Link href="/pendingdeals"> Pending Deals </Link>
              </li>
              <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
                <BsCartDash size={20} />
                <Link href="/successfuldeals"> Successful Deals</Link>
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
             {role === "vendor" && (
                <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
                  <LiaFileInvoiceDollarSolid size={20} />

                  <Link href="/generateinvoice"> Generate Invoice </Link>
                </li>
              )}
            </ul>
          </div>
          <h6 className="mt-8 py-4 font-bold text-lg pl-5 text-white bg-brightRed">
            Additional Info
          </h6>
          <div className="pl-5">
            <ul className="space-y-8 pt-10">
              <li className="flex items-center text-sm space-x-4 cursor-pointer hover:text-gray-600">
                <Image src={thumb} width={20} height={20} alt="profile" />
                <Link href="/endorse"> Endorsed Business </Link>
              </li>
              <li className="flex items-center text-[#F90808]  text-sm space-x-4 cursor-pointer hover:text-gray-600">
                <Image src={report} width={20} height={20} alt="profile" />
                {role === "vendor" ? (
                <Link href="/report"> Report a Buyer </Link>
              ) : (
                <Link href="/report"> Report a Vendor </Link>
              )}
              </li>
              {role === "vendor" && (
              <li className="flex items-center  text-sm space-x-4 cursor-pointer hover:text-gray-600">
                <PiMegaphone size={20} />

                <Link href="/promotebusiness"> Promote Business </Link>
              </li>
            )}
              <li className="flex items-center text-sm  space-x-4 cursor-pointer hover:text-gray-600">
                <Image src={saved} width={20} height={20} alt="profile" />
                <Link href="#"> Saved Items </Link>
              </li>
             
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

//propTypes validations...
MobileSidebar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
};

export default MobileSidebar;
