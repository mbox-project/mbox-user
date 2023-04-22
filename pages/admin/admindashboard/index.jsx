import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/AdminPagesLayout/Layout";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const { isMerchant } = useSelector((state) => state.user);
  return (
    <>
      <Layout>
        <h2 className="card text-2xl border-b-2 mt-8 rectCard">Dashboard</h2>
      </Layout>
    </>
  );
};

export default index;
