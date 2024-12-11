import React, {useLayoutEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/PagesLayout/Layout";
import Dashboard from "../../components/BuyersPage/Dashboard";
import MerchantDashboard from "../../components/MerchantPages/MerchantDashboard";
import { selectRole } from "../../store/selectors/selectors";
import { wrapper } from "../../store/store";
import { createWallet, getWallet } from "../../store/fundwallet/walletService";


const Index = () => {
  const role = useSelector(selectRole);
  const auth = useSelector((state) => state.auth);
  const { email } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getWallet(email))
      .unwrap()
      .then((action) => console.log(action))
      .catch((error) => {
        if (error?.message === "Wallet does not exist")
          dispatch(createWallet());
      });
  }, []);
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
