import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/PagesLayout/Layout";
import EditProfile from "../../components/BuyersPage/EditProfile";
import VendorEditProfile from "../../components/MerchantPages/VendorEditProfile";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isMerchant } = useSelector((state) => state.user);
  return (
    <>
      <Layout>
        <h2 className="card text-2xl border-b-2 mt-8 rectCard">
          Edit Personal Information
        </h2>
        {isMerchant ? <VendorEditProfile /> : <EditProfile />}
      </Layout>
    </>
  );
};

export default index;
