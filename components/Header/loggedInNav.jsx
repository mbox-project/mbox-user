import React from "react";
import { BsPerson } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { RiNotification4Line } from "react-icons/ri";
import { GiBowTieRibbon } from "react-icons/gi";
import { BiWallet } from "react-icons/bi";
import { TbBook2 } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";
import { VscWarning } from "react-icons/vs";
import { VscLaw } from "react-icons/vs";

const loggedInNav = () => {
  return (
    <div className="pl-6">
      <div className="flex pt-12 ">
        <BsPerson />
        <p className="pl-3 text-base font-extralight"> Edit Profile</p>
      </div>
      <div className="flex pt-12 ">
        <BiWallet />
        <p className="pl-3 text-base font-extralight"> Wallet</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <BsHeart />
        </div>
        <p className="pl-3 text-base font-extralight">Saved Items</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <RiNotification4Line />
        </div>
        <p className="pl-3 text-base font-extralight">Notification</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <TbBook2 />
        </div>
        <p className="pl-3 text-base font-extralight">Purchase History</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <HiShoppingCart />
        </div>
        <p className="pl-3 text-base font-extralight">Pending Deals</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <HiShoppingCart />
        </div>
        <p className="pl-3 text-base font-extralight">Successfull Deals</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <GiBowTieRibbon />
        </div>
        <p className="pl-3 text-base font-extralight">Endorsed Bussiness</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <VscWarning />
        </div>
        <p className="pl-3 text-base font-extralight">Report a vendor</p>
      </div>
      <div className="flex pt-12">
        <div className="pt-0.5">
          <VscLaw />
        </div>
        <p className="pl-3 text-base font-extralight">Disputes</p>
      </div>
    </div>
  );
};
export default loggedInNav;
