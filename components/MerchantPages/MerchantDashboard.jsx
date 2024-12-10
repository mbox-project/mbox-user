import React, { useEffect, useState } from "react";
import Image from "next/image";
import lady from "../../public/img/lady.svg";
import emoji from "../../public/img/smiling-emoji-orange.png";
import JpegIcon from "../assets/JpegIcon";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
//import htmlToImage from 'html-to-image';
import { toPng } from "html-to-image";
import { toastify } from "../../helpers";
import Flyer from "../flier/flier";
import { IoMdArrowRoundBack } from "react-icons/io";
import { copyToClipboard } from "../../Utils/copyToClipboard";
import { message } from "antd";
import { getVendorDashboard } from "../../store/users/userService";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import DailyActiveBuyersChart from "./DailyActiveBuyersChart";
import DailyStoreVisitsChart from "./DailyStoreVisitsChart";
import InventoryManagementChart from "./InventoryManagementChart";
import { getVendor } from "../../store/auth/vendorService";
import { getVendorActiveBuys, getVendorTimeSeries, getVendorTopBuyer, getVendorTopSales, getVendorTopSelling, getVendorTopSellingItems, getVendorTotalRev } from "../../store/dashboardAnalytics/vendorAnalytics";

const MerchantDashboard = () => {
  const dispatch = useDispatch();
  const [showFlyer, setShowFlyer] = useState(true);
  const [flyerImage, setFlyerImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageGenerated, setImageGenerated] = useState(false);
  const [vendoranalytics, setVendorAnalytics] = useState();
  const [vendorName, setVendorName] = useState("");
  const username = vendorName?.split(" ")[0];
  const { push } = useRouter();

  const topSelling = useSelector((state) => state.vendorAnalytic.VendorTopSelling);//Top selling items
  const activeBuys = useSelector((state) => state.vendorAnalytic.VendorTimeSeries);//Active buy
  
  const generateFlyer = () => {
    setLoading(true);
    toPng(document.querySelector(".flyer"))
      .then(function (dataUrl) {
        setFlyerImage(dataUrl);
        setImageGenerated(true);
        message.success("Successfully generated flyer");
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Error generating flyer:", error);
      });
  };

  const handleFlyerVisiblity = () => {
    setShowFlyer(!showFlyer);
    setImageGenerated(false);
    console.log("clicked", showFlyer);
  };

  // Function to handle download button click
  const downloadFlyer = () => {
    const link = document.createElement("a");
    link.href = flyerImage;
    link.download = "flyer.png";
    document.body.appendChild(link);
    link.click();
    setImageGenerated(false);
  };

  const handleCopy = async () => {
    await copyToClipboard(`http://localhost:3000/endorse${tag}`);
    message.success("Invoice link copied", 300);
  };

  useEffect(() => {
    dispatch(getVendorDashboard())
      .unwrap()
      .then((res) => {
        console.log(res);
        setVendorAnalytics(res);
      })
      .catch();
    dispatch(getVendor())
      .unwrap()
      .then((res) => {
        setVendorName(res?.data?.accountName);
        console.log(res);
      });

      dispatch(getVendorTopSellingItems())
      dispatch(getVendorTopSelling())
      dispatch(getVendorActiveBuys(0))
      dispatch(getVendorTimeSeries(0)).unwrap()
      .then((res)=>(
        console.log(res)
      ));
      dispatch(getVendorTopBuyer())
      dispatch(getVendorTopSales())
      dispatch(getVendorTotalRev())
  }, [dispatch]);

  // Array for days of the week
const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

// Map the response to the desired structure
const data = activeBuys?.map(item => {
  const date = new Date(item.date);
  const day = daysOfWeek[date.getDay()]; // Get the day of the week
  return { day, value: item.totalSales };
});

console.log(data)
  return (
    <>
      {showFlyer ? (
        <>
          <section className="grid grid-cols-1 gap-4 pt-8 pb-6 lg:grid-cols-2 md:gap-8">
            <div className="flex flex-col items-center justify-between gap-4 p-8 bg-white rounded-lg shadow-sm mt10 hover:shadow-md">
              <Image
                src={emoji}
                height={80}
                width={80}
                className=" rounded-full size-[80px] border-solid border-2 border-black-600"
                alt="emoji"
              />
              <span className="flex flex-col gap-3 text-center">
                <h2 className="text-xl font-bold break-words md:text-3xl">
                  Hello, {username}
                </h2>
                <p>Welcome back Vendor!</p>
              </span>
              <button
                onClick={() => {
                  push("/products");
                }}
                className="text-[16px] font-[500] text-white rounded-[4px] bg-[#EF5612] py-[12px] px-[28px] md:px-[48px]"
              >
                Upload a new product here
              </button>
            </div>

            <div className="border-[#EF5612] bg-[#FCE7E5] rounded-[8px] border-[2px] border-dashed p-8 flex flex-col items-center justify-center gap-3">
              <JpegIcon />
              <p className="text-center text-[#444] text-[16px] font-[400] max-w-xs">
                Get a nice free store flier and share with your friends to
                support your business
              </p>
              <button
                onClick={handleFlyerVisiblity}
                className=" mt-5 md:mt-0 rounded-[4px] bg-[#491546] py-[12px] px-[48px] text-[16px] font-[500] text-[#E5E7EB]"
              >
                Get Store Flier{" "}
              </button>
            </div>
          </section>

          <section className="px-2 py-8 space-y-4 bg-white rounded-md sm:px-6 md:space-y-12">
            <div className="grid gap-6 lg:grid-cols-2 md:gap-12">
              <div className="flex flex-col gap-8">
                {/* Buyers Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#444444]">
                    Buyers Overview
                  </h2>
                  <div className="p-6 rounded-3xl shadow-xl shadow-[#03469412] bg-[#034694] flex flex-col gap-6 text-white">
                    <h3 className="text-xl font-medium text-white/75 sm:text-2xl">
                      Buyers maintenance overview
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-3 gap-y-8 sm:gap-8">
                      <div className="flex flex-col items-center justify-between gap-6 text-center">
                        <Image
                          src="/img/merchant-dashboard/calendar.svg"
                          alt="calendar"
                          width={45}
                          height={44}
                        />
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold uppercase md:text-4xl">
                            47.6K
                          </h3>

                          <span className="text-[#F90808] text-xl md:text-2xl font-semibold flex gap-1 items-center justify-center">
                            3.65%
                            <FiArrowDownRight className="size-7" />
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-between gap-6 text-center">
                        <Image
                          src="/img/merchant-dashboard/week.svg"
                          alt="calendar"
                          width={115}
                          height={22}
                        />
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold uppercase md:text-4xl">
                            290K
                          </h3>

                          <span className="text-[#26A17B] text-xl md:text-2xl font-semibold flex gap-1 items-center justify-center">
                            5.85%
                            <FiArrowUpRight className="size-7" />
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-between gap-6 text-center">
                        <Image
                          src="/img/merchant-dashboard/icon-group.svg"
                          alt="calendar"
                          width={45}
                          height={44}
                        />
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold uppercase md:text-4xl">
                            770K
                          </h3>

                          <span className="text-[#26A17B] text-xl md:text-2xl font-semibold flex gap-1 items-center justify-center">
                            8.34%
                            <FiArrowUpRight className="size-7" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Daily Active Buyers (chart) */}
                <div className="p-6 rounded-3xl flex flex-col gap-6 shadow-xl text-[#444444]">
                  <h3 className="text-[#444444] text-xl sm:text-2xl font-medium">
                    Daily Active Buyers
                  </h3>

                  <DailyActiveBuyersChart data={data} />
                </div>
              </div>

              {/* Top Selling Items */}
              <div className="p-5 space-y-4 shadow-xl">
                <h2 className="text-2xl font-semibold text-[#444444]">
                  Top Selling Items
                </h2>

                {
                  topSelling.map((item, index)=>(
                    <ul className="list-decimal list-inside flex flex-col gap-4 text-[#444444]" key={index}>
                       <li className="text-lg bg-[#FAFAFA] px-4 py-2 rounded-sm">
                    {item.name}
                  </li>
                      </ul>
                  ))
                }

              </div>
            </div>

            {/* Revenue Comparisons */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#444444]">
                Revenue Comparisons
              </h2>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="p-6 rounded-3xl shadow-xl shadow-[#49154612] bg-brightPurple flex flex-col gap-6 text-white">
                  <h3 className="text-xl font-medium text-white/75 sm:text-2xl">
                    Weekly Revenue Generated
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-10">
                    <div className="space-y-3">
                      <div className="px-4 py-6 space-y-2 text-center bg-white rounded-lg bg-opacity-15">
                        <h3 className="text-2xl font-bold md:text-4xl">
                          {vendoranalytics?.currentWeekRevenue}
                        </h3>
                        <h4>Naira</h4>
                      </div>
                      <div className="text-lg text-center">
                        <p className="text-sm capitalize text-white/60">
                          This week
                        </p>
                        <span
                          className={`
                        ${
                          vendoranalytics?.currentWeekGrowthColor === "green"
                            ? "text-[#26A17B]"
                            : "text-[#F90808]"
                        }
                           font-semibold flex items-center justify-center`}
                        >
                          {vendoranalytics?.currentWeekGrowthRate} %
                          {vendoranalytics?.currentWeekGrowthColor ===
                          "green" ? (
                            <FiArrowUpRight className="size-6" />
                          ) : (
                            <FiArrowDownRight className="size-6" />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="px-4 py-6 space-y-2 text-center bg-white rounded-lg bg-opacity-15">
                        <h3 className="text-2xl font-bold md:text-4xl">
                          {vendoranalytics?.lastWeekRevenue}
                        </h3>
                        <h4>Naira</h4>
                      </div>
                      <div className="text-lg text-center">
                        <p className="text-sm capitalize text-white/60">
                          last week
                        </p>
                        <span className={`
                          ${
                          vendoranalytics?.lastWeekGrowthColor === "green"
                            ? "text-[#26A17B]"
                            : "text-[#F90808]"
                        }
                           font-semibold flex items-center justify-center
                          `}>
                        {vendoranalytics?.lastWeekGrowthRate}% 
                          {vendoranalytics?.lastWeekGrowthColor ===
                          "green" ? (
                            <FiArrowUpRight className="size-6" />
                          ) : (
                            <FiArrowDownRight className="size-6" />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl flex flex-col gap-6 shadow-xl text-[#444444]">
                  <h3 className="text-[#444444] text-xl sm:text-2xl font-medium">
                    Total Revenue Generated
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2 sm:gap-10">
                    <div className="space-y-3">
                      <div className="py-6 px-4 space-y-2 bg-[#EFEFEF] rounded-lg text-center">
                        <h3 className="text-2xl font-bold md:text-4xl">
                        {vendoranalytics?.currentMonthRevenue} 
                        </h3>
                        <h4>Naira</h4>
                      </div>
                      <div className="text-lg text-center">
                        <p className="text-sm capitalize">This Month</p>
                        <span className={`
                        ${
                          vendoranalytics?.currentMonthGrowthColor === "green"
                            ? "text-[#26A17B]"
                            : "text-[#F90808]"
                        }
                           font-semibold flex items-center justify-center
                          `}>
                        {vendoranalytics?.currentMonthGrowthRate}% 
                          {vendoranalytics?.currentMonthGrowthColor ===
                          "green" ? (
                            <FiArrowUpRight className="size-6" />
                          ) : (
                            <FiArrowDownRight className="size-6" />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="py-6 px-4 space-y-2 bg-[#EFEFEF] rounded-lg text-center">
                        <h3 className="text-2xl font-bold md:text-4xl">
                        {vendoranalytics?.lastMonthRevenue} 
                        </h3>
                        <h4>Naira</h4>
                      </div>
                      <div className="text-lg text-center">
                        <p className="text-sm capitalize">last Month</p>
                        <span className="text-[#26A17B] font-semibold flex items-center justify-center">
                        {vendoranalytics?.lastMonthGrowthRate}%
                        {vendoranalytics?.lastMonthGrowthColor ===
                          "green" ? (
                            <FiArrowUpRight className="size-6" />
                          ) : (
                            <FiArrowDownRight className="size-6" />
                          )}
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Stats */}
            
           
           
            {/** 
              <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#444444]">
                Store Stats
              </h2>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
               
                <div className="p-6 rounded-3xl flex flex-col gap-6 shadow-xl text-[#444444]">
                  <h3 className="text-[#444444] text-xl sm:text-2xl font-medium">
                    Daily Store Visits
                  </h3>

                  <DailyStoreVisitsChart />
                </div>

               
                <div className="p-6 rounded-3xl flex flex-col gap-6 shadow-xl text-[#444444]">
                  <h3 className="text-[#444444] text-xl sm:text-2xl font-medium">
                    Inventory Management
                  </h3>

                  <InventoryManagementChart />
                </div>
              </div>
            </div>
            */}
          </section>
        </>
      ) : (
        <div>
          <button
            onClick={handleFlyerVisiblity}
            className="flex items-center gap-2 my-5 text-xl "
          >
            {" "}
            <IoMdArrowRoundBack /> Back
          </button>

          <div className="flex flex-col gap-3 mb-5 md:flex-row">
            <button
              onClick={generateFlyer}
              className="rounded-[4px] bg-[#491546] py-[12px] px-[48px] text-[16px] font-[500] text-[#E5E7EB]"
            >
              {loading === true ? "Generating..." : "Generate Flier"}
            </button>
            <button
              disabled={!imageGenerated}
              onClick={downloadFlyer}
              className={`rounded-[4px] bg-[#491546] py-[12px] px-[48px] text-[16px] font-[500] text-[#E5E7EB] ${
                !imageGenerated && "opacity-50 cursor-not-allowed"
              }`}
            >
              Download Flier{" "}
            </button>
            <button
              onClick={handleCopy}
              className={` hidden rounded-[4px] bg-[#491546] py-[12px] px-[48px] text-[16px] font-[500] text-[#E5E7EB] ${
                !imageGenerated && "opacity-50 cursor-not-allowed"
              }`}
            >
              Copy Endorsement Link{" "}
            </button>
          </div>
          <Flyer />
        </div>
      )}
    </>
  );
};

export default MerchantDashboard;
