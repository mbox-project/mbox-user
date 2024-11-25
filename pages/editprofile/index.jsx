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
import { getUserProfile } from "../../store/users/userService";

const index = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({
    id: "",
    fullname: "",
    email: "",
    gender: "",
    profilePicture:"",
    role: "",
    phoneNumber:"",
    address:""
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
    }else{
      dispatch(getUserProfile())
      .unwrap()
      .then((response) => {
        setUserData(response?.data)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        toastify.alertError("Could not get Profile data", 300)
      });
    }
   
  },[user, dispatch])
  const role = useSelector(selectRole);

  useEffect(() => {
    if (userData) {
      setData({
        id: userData?.id || "",
        fullname: userData?.fullname || "",
        email: userData?.email || "",
        gender: userData?.gender || "",
        role: userData?.role || "",
        phoneNumber: userData?.phoneNumber || "",
        address: userData?.address || "",
        profilePicture: userData?.profilePicture || "",
      });
    }
  }, [userData]);

  return (
    <>
      <Layout>
        <h2 className="text-2xl border p-3 mt-8 rectCard !bg-transparent ">
          Edit Personal Information
        </h2>
        {role === "vendor" ? (
          <VendorEditProfile data={vendorData} setData={setVendorData} />
        ) : (
          <EditProfile data={data} setData={setData} userData={userData} />
        )}
      </Layout>
    </>
  );
};

export default index;
