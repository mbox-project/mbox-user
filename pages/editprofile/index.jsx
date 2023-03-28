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
  const { isLoading } = useSelector((state) => state.auth);
  const [data, setData] = useState({});
  useEffect(() => {
    dispatch(getUser())
      .unwrap()
      .then(({ data }) =>
        setData({
          fullname: data?.fullname,
          email: data?.email,
          phoneNumber: data?.phoneNumber,
        })
      );
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const role = useSelector(selectRole);
  return (
    <>
      <Layout>
        {isLoading && <Spinner />}
        <h2 className="card text-2xl border-b-2 mt-8 rectCard">
          Edit Personal Information
        </h2>
        {role === "vendor" ? (
          <VendorEditProfile data={data} setData={setData} />
        ) : (
          <EditProfile data={data} />
        )}
      </Layout>
    </>
  );
};

export default index;
