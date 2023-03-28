import React from "react";
import Image from "next/image";
import lady from "../../public/img/lady.svg";
import { useSelector } from "react-redux";

const MerchantDashboard = () => {
  const username = useSelector((state) => state.auth.user.username);
  return (
    <>
      <section className="flex flex-col-reverse bg-white rounded-lg px-10 py-2 items-center justify-between mt-10 shadow-sm  hover:shadow-md md:flex-row">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold">Hello, {username}</h2>
          <span>Welcome back!</span>
          <p>Get Started, upload your product by clicking on the produt link</p>
        </div>
        <div>
          <Image
            src={lady}
            className="w-20 rounded-full border-solid border-2 border-black-600"
            alt="profile-pics"
          />
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
