import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/PagesLayout/Layout";
import Dashboard from "../../components/BuyersPage/Dashboard";
import MerchantDashboard from "../../components/MerchantPages/MerchantDashboard";
import { selectRole } from "../../store/selectors/selectors";

const Index = () => {
  const { role } = useSelector(selectRole);

  return (
    <>
      <Layout>
        {role === "vendor" ? <MerchantDashboard /> : <Dashboard />}
      </Layout>
    </>
  );
};

export default Index;
