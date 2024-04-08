import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/auth/authSlice";
import { selectRole } from "../../store/selectors/selectors";
import Spinner from "../../components/Spinner";
import Layout from "../../components/PagesLayout/Layout";
import EditProfile from "../../components/BuyersPage/EditProfile";
import VendorEditProfile from "../../components/MerchantPages/VendorEditProfile";

const index = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    userId: user?.userId,
    fullname: user?.fullname,
    email: user?.email,
  });
  const role = useSelector(selectRole);
  return (
    <>
      <Layout>
        <h2 className="card text-2xl border-b-2 mt-8 rectCard">
          Edit Personal Information
        </h2>
        {role === "vendor" ? (
          <VendorEditProfile data={data} setData={setData} />
        ) : (
          <EditProfile data={data} setData={setData} />
        )}
      </Layout>
    </>
  );
};

export default index;
