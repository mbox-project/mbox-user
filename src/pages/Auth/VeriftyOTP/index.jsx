import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

import Footer from "../../../components/Footer";

function VerifyOTP() {
  return (
    <div className="flex ">
      <div className=" hidden lg:w-1/2  lg:mx-auto  lg:block bg-verify-img  ">
        <img src={logo} className=" w-32 m-6" />
        <div className=" mt-96 pt-20 text-white">
          <p className="flex justify-center  text-2xl font-bold font-poppins ">
            Hello, Friend!{" "}
          </p>
          <p className="flex justify-center text-lg ">
            Welcome back! Enter the OTP sent to your email to continue to enjoy
            MBOX
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2  lg:mx-auto bg-white ">
        <div className="w-full  font-poppins text-center mt-12 ">
          <h1 className="lg:text-5xl text-orange-600 text-4xl md:text-5xl mt-48 lg:mt-44 lg:pt-0 font-poppins font-extrabold ">
            OTP Verification
          </h1>
          <p className=" hidden lg:block text-base lg:text-xs pt-3 px-12 lg:px-38 leading-20 ">
            Enter the 6-digit number sent to taylormason@gmail.com
          </p>
        </div>
        <form className="px-10 pt-4 lg:pt-0">
          <div className="mb-6 flex ">
            <div className="m-6 ">
              <div className="relative">
                <input
                  type="number"
                  className="w-7 p-4 pr-12 mt-2 text-lg lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <input
                  type="number"
                  className="w-7 p-4 pr-12 mt-2 text-lg lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <input
                  type="number"
                  className="w-7 p-4 pr-12 mt-2 text-lg lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <input
                  type="number"
                  className="w-7 p-4 pr-12 mt-2 text-lg lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <input
                  type="number"
                  className="w-7 p-4 pr-12 mt-2 text-lg lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <input
                  type="number"
                  className="w-7 p-4 pr-12 mt-2 text-lg lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          <Button className="w-full bg-orange-600 h-16 mb-4 rounded-lg text-white text-2xl font-semibold">
            Verify and Proceed
          </Button>
          <div className="flex justify-center mb-3">
            <span className="text-gray-600 text-sm pt-2">
              Didnt get the code ?
              <Link to="/" className="text-gray-900 font-bold pl-2">
                Resend Code
              </Link>
            </span>
          </div>
        </form>

        <Footer />
      </div>
    </div>
  );
}

export default VerifyOTP;
