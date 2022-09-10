import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { activateMerchant } from "../../store/users/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { isMerchant } = useSelector((state) => state.user);
  const [showSideBar, setShowSideBar] = useState(false);

  const showbar = () => {
    setShowSideBar(!showSideBar);
  };

  // Temporary for switching from buyers to vender
  const switchToMerchant = () => {
    // disptaches an action
    dispatch(activateMerchant());
  };
  return (
    <>
      {/* Buyers Navarbar .. */}
      <Navbar
        showbar={showbar}
        showSideBar={showSideBar}
        switchToMerchant={switchToMerchant}
      />
      <div className="flex font-sans relative">
        {/* SideBar Menu */}
        <Sidebar showSideBar={showSideBar} isMerchant={isMerchant} />
        <main className="px-4 container mb-10 md:px-5">
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
