import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../store/auth/authSlice";
import { selectRole } from "../../store/selectors/selectors";
import Spinner from "../../components/Spinner";
import Layout from "../../components/PagesLayout/Layout";
import EditProfile from "../../components/BuyersPage/EditProfile";
import VendorEditProfile from "../../components/MerchantPages/VendorEditProfile";
import { getVendor } from "../../store/auth/vendorService";
import { toastify } from "../../helpers";

const index = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    userId: user?.userId,
    fullname: user?.fullname,
    email: user?.email,
    accountNumber: user?.accountNumber,
    bankName: user?.bankName,
    accountName: user?.accountName,
  });
  const [vendorData, setVendorData] = useState({
    userId: user?.userId,
    accountName: vendorData?.accountName,
    email: vendorData?.email,
  });

  useEffect(() => {
    if(user?.role === 'vendor'){
      dispatch(getVendor())
      .unwrap()
      .then((response) => {
        setVendorData(response?.data)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        toastify.alertError("Could not get Profile data", 300)
      });
    }
   

  },[user?.role])
  const role = useSelector(selectRole);
  return (
    <>
      <Layout>
        <h2 className="card text-2xl border-b-2 mt-8 rectCard">
          Edit Personal Information
        </h2>
        {role === "vendor" ? (
          <VendorEditProfile data={vendorData} setData={setVendorData} />
        ) : (
          <EditProfile data={data} setData={setData} />
        )}
      </Layout>
    </>
  );
};

export default index;
