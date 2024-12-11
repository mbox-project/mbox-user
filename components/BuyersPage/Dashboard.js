import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/img/banner.png";
import emoji from "../../public/img/smiling-emoji-orange.png";
import lady from "../../public/img/lady.svg";
import edit from "../../public/img/edit.svg";
import caret from "../../public/img/caret.svg";
import { useSelector, useDispatch } from "react-redux";
import { getBeneficiary, getUserProfile } from "../../store/users/userService";

import { Collapse, message } from "antd";
import {
  getBuyerEndorsedMerchant,
  getBuyerMostBought,
  getBuyerMostPurchasedStore,
  getBuyerReportedMerchant,
} from "../../store/dashboardAnalytics/buyerAnalytics";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [bankDetails, setBanDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const userName = userDetails?.fullname?.split(" ")[0] || "";

  const TopPurchased = useSelector(
    (state) => state.buyerAnalytic.TopPurchased.$values
  ); // TopPurchased
  const mostReported = useSelector(
    (state) => state.buyerAnalytic.BuyerReportedStore.$values
  ); //Reported merchants
  const mostEndorsed = useSelector(
    (state) => state.buyerAnalytic.BuyerEndorsedStore.$values
  ); //most endorsed store
  useEffect(() => {
    dispatch(getBeneficiary())
      .unwrap()
      .then((response) => {
        setBanDetails(response?.$values);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        message.error("Could not get Profile data");
      });

    dispatch(getUserProfile())
      .unwrap()
      .then((response) => {
        setUserDetails(response?.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        message.error("Could not get Profile data");
      });
  }, []);

  useEffect(() => {
    dispatch(getBuyerMostBought());
    dispatch(getBuyerMostPurchasedStore());
    dispatch(getBuyerEndorsedMerchant());
    dispatch(getBuyerReportedMerchant());
  }, [dispatch]);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <section className="flex flex-col gap-12">
      {/* first section --Welcome buyer */}
      <section className="flex flex-col-reverse items-center justify-between px-10 py-2 mt-10 bg-white rounded-lg shadow-sm hover:shadow-md md:flex-row">
        <div className="flex flex-col space-y-2 text-center sm:text-start">
          <h2 className="text-3xl font-bold">Hello, {userName || ""}</h2>
          <span>Welcome back!</span>
        </div>
        <div>
          <Image
            src={emoji}
            height={80}
            width={80}
            className=" rounded-full size-[80px] border-solid border-2 border-black-600"
            alt="emoji"
          />
        </div>
      </section>

      {/* Second Section--products*/}
      <section className="card">
        <div className="flex flex-col gap-8 p-6">
          <h2 className="text-left text-[28px] font-semibold">
            Merchant Overview
          </h2>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex flex-col flex-1 gap-8">
              <div className="text-[#444444] flex flex-col gap-3 p-6 bg-[#F0FAF7] rounded-md min-h-[250px]">
                <h6 className="font-medium text-[#26A17B] text-[20px]">
                  Top Merchant Endorsed
                </h6>
                <ul className="flex flex-col divide-y-2">
                  {Array.isArray(mostEndorsed) && mostEndorsed.length > 0 ? (
                    mostEndorsed.map((item, index) => (
                      <li
                        className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600"
                        key={index}
                      >
                        {item.storeName}
                        <Image
                          src={caret}
                          width={15}
                          height={15}
                          alt="profile"
                        />
                      </li>
                    ))
                  ) : (
                    <p className="text-[#444444] text-lg">
                      No Endorsed Merchant.
                    </p>
                  )}
                </ul>
              </div>

              <div className="text-[#444444] flex flex-col gap-3 p-6 bg-[#FFF4EF] rounded-md min-h-[250px]">
                <h6 className="font-medium text-[#F90808] text-[20px]">
                  Top Merchant Reported
                </h6>
                <ul className="flex flex-col divide-y-2">
                  {Array.isArray(mostReported) && mostReported.length > 0 ? (
                    mostReported.map((item, index) => (
                      <li
                        className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600"
                        key={index}
                      >
                        {item.storeName}
                        <Image
                          src={caret}
                          width={15}
                          height={15}
                          alt="profile"
                        />
                      </li>
                    ))
                  ) : (
                    <p className="text-[#444444] text-lg">
                      No Reported Merchant.
                    </p>
                  )}
                </ul>
              </div>
            </div>

            {/* Top Items purchased */}
            <div className="text-[#444444] flex flex-col gap-3 p-6 bg-[#FFF3FE] rounded-md flex-1">
              <h6 className="font-medium text-[#444444] text-[20px]">
                Top Items purchased
              </h6>
              <ul className="flex flex-col divide-y-2">
                {Array.isArray(TopPurchased) && TopPurchased.length > 0 ? (
                  TopPurchased?.map((item, index) => (
                    <li
                      className="flex items-center text-[18px] py-3 justify-between cursor-pointer hover:text-gray-600"
                      key={index}
                    >
                      {item.productName}
                      <Image src={caret} width={15} height={15} alt="profile" />
                    </li>
                  ))
                ) : (
                  <p className="text-[#444444] text-lg">
                    No active purchase available.
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* third Section--Acount Information */}
      <section className="card">
        <div className="flex justify-between p-6 shadow-sm">
          <h1 className="text-2xl font-bold">Account Details</h1>
          <Link href={"/editprofile"}>
            <Image
              src={edit}
              className="cursor-pointer"
              width={25}
              height={25}
              alt="Edit Info"
            />
          </Link>
        </div>

        <div className="flex flex-col p-6 gap-y-8 lg:flex-row">
          {/* Personal Information Section */}
          <div className="md:basis-1/2">
            <h1 className="mb-4 text-lg font-bold">Personal Information</h1>
            <ul className="space-y-4">
              {[
                {
                  label: "Name",
                  value: userDetails?.fullname || "Not Provided",
                },
                { label: "Email", value: userDetails?.email || "Not Provided" },
                {
                  label: "WhatsApp No",
                  value: userDetails?.phoneNumber || "Not Provided",
                },
                {
                  label: "Address",
                  value: userDetails?.address || "Not Provided",
                },
              ].map(({ label, value }) => (
                <li
                  key={label}
                  className="flex space-x-2 text-sm sm:items-center sm:space-x-4"
                >
                  <h2 className="font-bold text-md">{label}:</h2>
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bank Information Section */}
          <div className="md:basis-1/2">
            <h1 className="mb-4 text-lg font-bold">Bank Information</h1>
            {bankDetails?.length > 0 ? (
              <Collapse defaultActiveKey={["0"]} onChange={onChange}>
                {bankDetails.map((detail, index) => (
                  <Collapse.Panel
                    header={`${detail.bankName || "Unknown"}`}
                    key={index}
                  >
                    <ul className="space-y-2">
                      <li>
                        <strong>Bank Name:</strong>{" "}
                        {detail.bankName || "Not Provided"}
                      </li>
                      <li>
                        <strong>Account Name:</strong>{" "}
                        {detail.accountName || "Not Provided"}
                      </li>
                      <li>
                        <strong>Account Number:</strong>{" "}
                        {detail.accountNumber || "Not Provided"}
                      </li>
                    </ul>
                  </Collapse.Panel>
                ))}
              </Collapse>
            ) : (
              <p className="text-gray-700">No Bank Information Available</p>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
