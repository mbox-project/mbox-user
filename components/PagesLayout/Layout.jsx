import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { activateMerchant } from "../../store/users/userSlice";
import { logout, reset } from "../../store/auth/authSlice";
import { useRouter } from "next/router";
import { toastify } from "../../helpers";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isMerchant } = useSelector((state) => state.user);
  //const { user } = useSelector((state) => state.auth);
  const [showSideBar, setShowSideBar] = useState(false);

  const showbar = () => {
    setShowSideBar(!showSideBar);
  };

  // Temporary for switching from buyers to vender
  const switchToMerchant = () => {
    // disptaches an action
    dispatch(activateMerchant());
  };

  const handleLogout = () => {
    const mssg = "Logged Out Successfully";
    toastify.alertSuccess(mssg, 3000);
    dispatch(logout());
    dispatch(reset()); // reset back to initialState..
    router.push("/auth/login");
  };

  // check if the user is logged in or not..
  /**
   * Note that every page is rendered on the server side first ..
   * I will have to use getServerSideProps for this page ..
   */
  // if (!user) {
  //   toastify.alertError("You are not authenticated to access this page", 3000);
  //   typeof window !== "undefined" ? router.push("/auth/login") : "";
  // }
  return (
    <>
      {/* Buyers Navarbar .. */}
      <Navbar
        showbar={showbar}
        showSideBar={showSideBar}
        switchToMerchant={switchToMerchant}
        handleLogout={handleLogout}
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
