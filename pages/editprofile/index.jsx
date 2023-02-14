import React from "react";
import { useSelector } from "react-redux";
import { selectRole } from "../../store/selectors/selectors";
import Layout from "../../components/PagesLayout/Layout";
import EditProfile from "../../components/BuyersPage/EditProfile";
import VendorEditProfile from "../../components/MerchantPages/VendorEditProfile";
import axios from "axios";
import { API_URL } from "../../config";
import { makeStore, wrapper } from "../../store/store";
import { GetServerSideProps } from "next";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const role = useSelector(selectRole);
  return (
    <>
      <Layout>
        <h2 className="card text-2xl border-b-2 mt-8 rectCard">
          Edit Personal Information
        </h2>
        {role === "vendor" ? <VendorEditProfile /> : <EditProfile />}
      </Layout>
    </>
  );
};

export default index;

// export async function getServerSideProps() {
//   const id = makeStore.getState().auth.user.userId;
//   const response = await axios.get(`${API_URL}/User`, { params: { id } });
//   console.log(response.data);
//   return {
//     // props: { data },
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const id = store.getState().auth.user.userId;
    console.log(id);
    const response = await axios.get(`${API_URL}/User/?id=${id}`);
    console.log(response.data);
    return {};
  }
);
