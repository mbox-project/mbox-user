import React, { useState } from "react";
import Image from "next/image";
import lady from "../../public/img/lady.svg";
import emoji from "../../public/img/smiling-emoji.jpeg";
import JpegIcon from "../assets/JpegIcon";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
//import htmlToImage from 'html-to-image';
import { toPng } from "html-to-image";
import { toastify } from "../../helpers";
import Flyer from "../flier/flier";
import { IoMdArrowRoundBack } from "react-icons/io";
import { copyToClipboard } from "../../Utils/copyToClipboard";
import { message } from "antd";

const MerchantDashboard = () => {
  const [showFlyer, setShowFlyer] = useState(true);
  const [flyerImage, setFlyerImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageGenerated, setImageGenerated] = useState(false);
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

  return (
    <>
      {showFlyer ? (
        <>
          <section className=" flex flex-col md:grid md:grid-cols-2 gap-[0.5rem] pt-8 pb-6">
            <div className="flex flex-col space-y-2 bg-white rounded-lg px-10 py-4 items-center justify-between mt10 shadow-sm  hover:shadow-md">
              <Image
                src={emoji}
                width={60}
                height={60}
                // className="w-[48px] h-[48px] rounded-full border-solid border-2 border-black"
                alt="profile-pics"
              />
              <h2 className="text-[20px] font-[600]">Hello, {username}</h2>
              <span className="text-[14px] font-[400]">Welcome back!</span>
              <button
                onClick={() => {
                  push("/products");
                }}
                className="text-[16px] font-[500] text-white rounded-[4px] bg-[#EF5612] py-[12px] px-[48px]"
              >
                Upload a new product here
              </button>
            </div>
            <div className="border-[#EF5612] bg-[#FCE7E5] rounded-[8px] border-[2px] border-dashed p-[1%] flex flex-col items-center justify-center gap-[2%]">
              <JpegIcon />
              <p className="text-center text-[#444] text-[16px] font-[400]">
                Get a nice free store flier and share with your friends to
                support your business
              </p>
              <button
                onClick={handleFlyerVisiblity}
                className="rounded-[4px] bg-[#491546] py-[12px] px-[48px] text-[16px] font-[500] text-[#E5E7EB]"
              >
                Get Store Flier{" "}
              </button>
            </div>
          </section>

          <section className="card rectCard mt-5">
            <h2 className="text-2xl mt-4">Revenue Comparisons</h2>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-10 mt-4">
              <div className="p-4 rounded-3xl bg-brightPurple flex flex-col text-white">
                <h3 className="mb-2 text-gray-500 text-xl">
                  Weekly Revenue Generated
                </h3>
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-900 rounded-lg text-center">
                      <h3 className="text-2xl">14,766</h3>
                      <h4>Usd</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p>This week</p>
                      <p className="text-red-900 ">3.65%</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-900 rounded-lg text-center">
                      <h3 className="text-2xl">15,766</h3>
                      <h4>Usd</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p>last week</p>
                      <p className="text-green-900">3.65%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-3xl flex flex-col shadow-xl text-black">
                <h3 className="mb-2 text-gray-500 text-xl">
                  Total Revenue Generated
                </h3>
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-100 rounded-lg text-center">
                      <h3 className="text-2xl">14,766</h3>
                      <h4>Usd</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p>This Month</p>
                      <p className="text-red-900 ">13.65%</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-100 rounded-lg text-center">
                      <h3 className="text-2xl">45,766</h3>
                      <h4>Usd</h4>
                    </div>
                    <div className="text-center text-lg">
                      <p>last Month</p>
                      <p className="text-green-900">53.65%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <button
            onClick={handleFlyerVisiblity}
            className=" flex gap-2 items-center text-xl my-5"
          >
            {" "}
            <IoMdArrowRoundBack /> Back
          </button>

          <div className=" flex gap-3 mb-5">
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
              className={`rounded-[4px] bg-[#491546] py-[12px] px-[48px] text-[16px] font-[500] text-[#E5E7EB] ${
                !imageGenerated && "opacity-50 cursor-not-allowed"
              }`}
            >
              Copy Endorsement Link{" "}
            </button>
          </div>
          <Flyer />
        </>
      )}
    </>
  );
};

export default MerchantDashboard;
