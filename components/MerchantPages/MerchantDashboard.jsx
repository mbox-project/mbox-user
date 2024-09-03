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

const MerchantDashboard = () => {
  const dispatch = useDispatch();
  const [showFlyer, setShowFlyer] = useState(true);
  const [flyerImage, setFlyerImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageGenerated, setImageGenerated] = useState(false);
  const [vendoranalytics, setVendorAnalytics] = useState({
    thisWeek: {},
    thisMonth: {},
    lastWeek: {},
    lastMonth: {},
  });
  const username = useSelector((state) => state.auth.user.username)?.split(
    " "
  )[0];
  const { push } = useRouter();
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
      })
      .catch();
  }, [dispatch]);

  return (
    <>
      {showFlyer ? (
        <>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 pt-8 pb-6">
            <div className="flex flex-col gap-4 bg-white rounded-lg p-8 items-center justify-between mt10 shadow-sm  hover:shadow-md">
              <Image
                src={emoji}
                height={80}
                width={80}
                className=" rounded-full size-[80px] border-solid border-2 border-black-600"
                alt="emoji"
              />
              <span className="flex flex-col gap-3 text-center">
                <h2 className="text-xl md:text-3xl font-bold break-words">
                  Hello, {username}
                </h2>
                <p>Welcome back!</p>
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

          <section className="px-2 sm:px-6 py-8 bg-white rounded-md space-y-6">
            <h2 className="text-2xl font-semibold text-[#444444]">
              Revenue Comparisons
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="p-6 rounded-3xl shadow-md shadow-[#49154612] bg-brightPurple flex flex-col gap-4 text-white">
                <h3 className="text-white/75 text-xl sm:text-2xl">
                  Weekly Revenue Generated
                </h3>
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-10">
                  <div className="space-y-3">
                    <div className="py-6 px-4 space-y-2 bg-white bg-opacity-15 rounded-lg text-center">
                      <h3 className="text-2xl md:text-4xl font-bold">14,766</h3>
                      <h4>Naira</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p className="capitalize text-white/60 text-sm">
                        This week
                      </p>
                      <span className="text-[#F90808] font-semibold flex items-center justify-center">
                        3.65%
                        <FiArrowDownRight className="size-6" />
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="py-6 px-4 space-y-2 bg-white bg-opacity-15 rounded-lg text-center">
                      <h3 className="text-2xl md:text-4xl font-bold">15,766</h3>
                      <h4>Naira</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p className="capitalize text-white/60 text-sm">
                        last week
                      </p>
                      <span className="text-[#26A17B] font-semibold flex items-center justify-center">
                        5.85%
                        <FiArrowUpRight className="size-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl flex flex-col gap-4 shadow-xl text-[#444444]">
                <h3 className="text-[#444444] text-xl sm:text-2xl">
                  Total Revenue Generated
                </h3>
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-10">
                  <div className="space-y-3">
                    <div className="py-6 px-4 space-y-2 bg-[#EFEFEF] rounded-lg text-center">
                      <h3 className="text-2xl md:text-4xl font-bold">14,766</h3>
                      <h4>Naira</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p className="capitalize text-sm">This Month</p>
                      <span className="text-[#F90808] font-semibold flex items-center justify-center">
                        3.65%
                        <FiArrowDownRight className="size-6" />
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="py-6 px-4 space-y-2 bg-[#EFEFEF] rounded-lg text-center">
                      <h3 className="text-2xl md:text-4xl font-bold">45,766</h3>
                      <h4>Naira</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p className="capitalize text-sm">last Month</p>
                      <span className="text-[#26A17B] font-semibold flex items-center justify-center">
                        26.34%
                        <FiArrowUpRight className="size-6" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div>
          <button
            onClick={handleFlyerVisiblity}
            className=" flex gap-2 items-center text-xl my-5"
          >
            {" "}
            <IoMdArrowRoundBack /> Back
          </button>

          <div className=" flex flex-col md:flex-row gap-3 mb-5">
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
