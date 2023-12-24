import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/PagesLayout/Layout";
import Dashboard from "../../components/BuyersPage/Dashboard";
import MerchantDashboard from "../../components/MerchantPages/MerchantDashboard";
import { selectRole } from "../../store/selectors/selectors";
import { wrapper } from "../../store/store";

const Index = () => {
  const role = useSelector(selectRole);
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <Layout>
        {role === "vendor" ? <MerchantDashboard /> : <Dashboard />}
      </Layout>
    </>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const { auth } = store.getState();
//     const id = auth.user.userId;
//     store.dispatch()
//     return {
//       props: { },
//     };
//   }
// );

export default Index;
