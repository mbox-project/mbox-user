import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const showbar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      {/* Buyers Navarbar .. */}
      <Navbar showbar={showbar} showSideBar={showSideBar} />
      <div className="flex font-sans relative">
        {/* SideBar Menu */}
        <Sidebar showSideBar={showSideBar} />
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
