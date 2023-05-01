import React from "react";
import Layout from "../../../components/AdminPagesLayout/Layout";
import DashboardStat from "../../../components/AdminDataTable/DashboardStat";
import DashboardTable from "../../../components/AdminDataTable/DashboardTable";

const index = () => {
  return (
    <>
      <Layout>
        <DashboardStat />
        <DashboardTable />
      </Layout>
    </>
  );
};

export default index;
