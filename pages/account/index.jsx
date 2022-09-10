import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/PagesLayout/Layout";
import Dashboard from "../../components/BuyersPage/Dashboard";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isMerchant } = useSelector((state) => state.user);
  return (
    <>
      <Layout>{isMerchant ? <h1>Hello Merchant</h1> : <Dashboard />}</Layout>
    </>
  );
};

export default index;
