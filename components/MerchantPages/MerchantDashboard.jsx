import React from "react";
import Image from "next/image";
import lady from "../../public/img/lady.svg";
import JpegIcon from "../assets/JpegIcon";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const MerchantDashboard = () => {
  const username = useSelector((state) => state.auth.user.fullname).split(
    " "
  )[0];
  const { push } = useRouter();
  return (
    <>
      <section className="grid grid-cols-2 gap-[0.5rem] py-[0.5rem]">
        <div className="flex flex-col space-y-2 bg-white rounded-lg px-10 py-2 items-center justify-between mt10 shadow-sm  hover:shadow-md">
          <Image
            src={lady}
            className="w-[48px] h-[48px] rounded-full border-solid border-2 border-black-600"
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
            Get a nice free store flier and share with your friends to support
            your business
          </p>
          <button className="rounded-[4px] bg-[#491546] py-[12px] px-[48px] text-[16px] font-[500] text-[#E5E7EB]">
            Get Store Flier{" "}
          </button>
        </div>
      </section>

      <section className="card rectCard mt-5">
        <h2 className="text-2xl mt-4">Revenue Comparisons</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
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
  );
};

export default MerchantDashboard;
