import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/auth/authSlice";
import { selectRole } from "../../store/selectors/selectors";
import Spinner from "../../components/Spinner";
import Layout from "../../components/PagesLayout/Layout";
import EditProfile from "../../components/BuyersPage/EditProfile";
import VendorEditProfile from "../../components/MerchantPages/VendorEditProfile";

const index = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUser(user.userId)).then((action) => {
      console.log(action);
      if (action.payload.data) {
        setData({
          fullname:action.payload.data?.fullname,
          email:action.payload.data?.email,
          phoneNumber:action.payload.data?.phoneNumber
        });
      }
    });
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
