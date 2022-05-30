import React from "react";
import icon from "../../../assets/images/icon.png";
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
          <img src={icon} className=" w-32  mx-auto " />
          <p className="flex justify-center  text-2xl font-bold font-poppins -mt-20">
            Hello, Friend!{" "}
          </p>
          <p className="flex justify-center text-lg ">
            Welcome back! Enter the OTP sent to your email to continue to enjoy
            MBOX
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2  lg:mx-auto generalbg bg-cover ">
        <div className="w-full  font-poppins text-center mt-12 ">
          <h1 className="lg:text-3xl text-orange-600 text-4xl md:text-5xl mt-48 lg:mt-44 lg:pt-0 font-poppins font-extrabold ">
            OTP Verification
          </h1>
          <p className=" hidden lg:block text-base lg:text-xs pt-3 px-12 lg:px-52 leading-relaxed ">
            Enter the 6-digit number sent to taylormason@gmail.com
          </p>
        </div>
        <form className="px-10 pt-4 lg:mt-6">
          <div className="mb-4 flex justify-center ">
            <div className="mx-6 ">
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
            <div className="mx-6">
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
            <div className="mx-6">
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
            <div className="mx-6">
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
            <div className="mx-6">
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
            <div className="mx-6">
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
          <div className="flex justify-center mb-3">
            <Link to="/" className="text-gray-900  underline font-bold pl-2">
              Request new code
            </Link>
          </div>

          <Button className="w-full bg-orange-600 p-2 mb-4 mt-7 rounded-md shadow-md text-white text-lg font-semibold">
            Verify and Proceed
          </Button>
        </form>

        <Footer>
          <div className="flex font-poppins  md:text-2xl md:pt-64  font-light justify-center pt-40 text-base lg:text-xs  lg:pt-32 ">
            <p className="font-bold text-3xl pt-2 ">&copy;</p>
            <p className="px-1 pt-3"> 2021</p>
            <p className="pt-3"> All copyright Reserved</p>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default VerifyOTP;
