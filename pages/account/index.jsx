import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/PagesLayout/Layout";
import Dashboard from "../../components/BuyersPage/Dashboard";
import MerchantDashboard from "../../components/MerchantPages/MerchantDashboard";

const Index = () => {
  const { isMerchant } = useSelector((state) => state.user);
  return (
    <>
      <Layout>{isMerchant ? <MerchantDashboard /> : <Dashboard />}</Layout>
    </>
  );
};

export default Index;
