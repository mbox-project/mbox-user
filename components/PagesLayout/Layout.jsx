import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
import { LogOut } from "../../store/store";
import { reset } from "../../store/auth/authSlice";
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
      {/* Buyers Navarbar .. */}
      <Navbar
        showbar={showbar}
        showSideBar={showSideBar}
        handleLogout={handleLogout}
        isMerchant={isMerchant}
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
// eslint-disable-next-line react-hooks/rules-of-hooks
export default useAuthStatus(Layout);
// export default Layout;
//export default Layout;
