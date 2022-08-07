import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
// import Footer from "./Footer";

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
        <main className="px-4 container mx-auto mb-10 md:px-20">
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
