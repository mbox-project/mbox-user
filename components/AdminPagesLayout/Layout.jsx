import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import SidebarComp from "./SidebarComp";
import PropTypes from "prop-types";
import { reset } from "../../store/auth/authSlice";
import { LogOut } from "../../store/store";
import { useRouter } from "next/router";
import { toastify } from "../../helpers";
import { useAuthStatus } from "../../hooks/useAuthStatus";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isMerchant } = useSelector((state) => state.user);
  const [showSideBar, setShowSideBar] = useState(false);

  const showbar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleLogout = () => {
    const mssg = "Logged Out Successfully";
    toastify.alertSuccess(mssg, 3000);
    dispatch(LogOut());
    dispatch(reset()); // reset back to initialState..
    router.push("/auth/login");
  };

  return (
    <>
      <div className="flex font-sans relative">
        {/* SideBar Menu */}
        <SidebarComp showSideBar={showSideBar} isMerchant={isMerchant} />

        <main className="px-4 container bg-gray-100 mb-10 md:px-5">
          {/*  Navarbar .. */}
          <Navbar
            showbar={showbar}
            showSideBar={showSideBar}
            handleLogout={handleLogout}
            isMerchant={isMerchant}
          />
          {/*  Navarbar .. */}
          {children}
        </main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
// eslint-disable-next-line react-hooks/rules-of-hooks
export default useAuthStatus(Layout);
//export default Layout;
