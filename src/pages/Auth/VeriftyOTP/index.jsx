import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Footer from "../../../components/Footer";
function VerifyOTP() {
  return (
    <div className="flex ">
      <div className=" hidden  min-h-screen w-1/2  mx-auto  lg:block bg-verify-img bg-cover ">
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
      <div className="w-full lg:w-1/2  lg:mx-auto generalbg ">
        <div className="w-full  font-poppins text-center mt-12 ">
          <h1 className="lg:text-3xl text-orange-600 text-4xl md:text-5xl mt-48 lg:mt-44 lg:pt-0 font-poppins font-extrabold ">
            OTP Verification
          </h1>
          <p className=" hidden lg:block text-base lg:text-xs pt-3 px-12 lg:px-38 leading-20 ">
            Enter the 6-digit number sent to taylormason@gmail.com
          </p>
        </div>
        <form className="px-10 pt-4 lg:pt-0">
          <div className="mb-6 flex justify-center ">
            <div className="m-6 ">
              <div className="relative">
                <Input
                  name="number"
                  type="number"
                  className=" w-4 py-2 px-6 inputcolor mr-2 mt-2 text-base  border-[#444444] border-2 rounded-md shadow-sm"
                  required={true}
                  autoFocus={false}
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <Input
                  name="number"
                  type="number"
                  className=" w-4 py-2 px-6 inputcolor mr-2 mt-2 text-base  border-[#444444] border-2 rounded-md shadow-sm"
                  required={true}
                  autoFocus={false}
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <Input
                  name="number"
                  type="number"
                  className=" w-4 py-2 px-6 inputcolor mr-2 mt-2 text-base  border-[#444444] border-2 rounded-md shadow-sm"
                  required={true}
                  autoFocus={false}
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <Input
                  name="number"
                  type="number"
                  className=" w-4 py-2 px-6 inputcolor mr-2 mt-2 text-base  border-[#444444] border-2 rounded-md shadow-sm"
                  required={true}
                  autoFocus={false}
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <Input
                  name="number"
                  type="number"
                  className=" w-4 py-2 px-6 inputcolor mr-2 mt-2 text-base  border-[#444444] border-2 rounded-md shadow-sm"
                  required={true}
                  autoFocus={false}
                />
              </div>
            </div>
            <div className="m-6">
              <div className="relative">
                <Input
                  name="number"
                  type="number"
                  className=" w-4 py-2 px-6 inputcolor mr-2 mt-2 text-base  border-[#444444] border-2 rounded-md shadow-sm"
                  required={true}
                  autoFocus={false}
                />
              </div>
            </div>
          </div>

          <Button className="w-full bg-orange-600 p-2 mb-4 rounded-md shadow-md text-white text-lg font-semibold">
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
