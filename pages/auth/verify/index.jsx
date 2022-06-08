import React from "react";
import icon from "../../../public/images/icon.png";
import logo from "../../../public/images/logo.png";
import Button from "../../../components/Button";
// import Input from "../../../components/Input";
import Footer from "../../../components/Footer";
import Image from "next/image";

function VerifyOTP() {
  return (
    <div className="flex ">
      <div className=" hidden  min-h-screen w-1/2  mx-auto  lg:block bg-verify-img bg-cover ">
        <Image src={logo} className=" w-32 m-6" />
        <div className=" mt-96 pt-20 text-white">
          <Image src={icon} className=" w-32  mx-auto " />
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
          <h1 className="lg:text-3xl text-orange-600 text-4xl  mt-32 lg:mt-44 lg:pt-0 font-poppins font-extrabold ">
            OTP Verification
          </h1>
          <p className="block pb-3 pt-4 text-base lg:text-xs md:pt-6  lg:pt-3 px-12 lg:px-52 leading-relaxed ">
            Enter the 6-digit number sent to taylormason@gmail.com
          </p>
        </div>
        <form className="px-10 pt-4  md:mt-4 lg:mt-6">
          <div className="flex justify-center mb-3">
            <Button className="text-gray-900  underline font-bold pl-2">
              Request new code
            </Button>
          </div>

          <Button className="w-full bg-orange-600 p-2 mb-4 mt-10 md:mt-12 lg:mt-7 rounded-md shadow-md text-white text-lg font-semibold">
            Verify and Proceed
          </Button>
        </form>

        <Footer>
          <div className="flex font-poppins  md:text-2xl md:mt-44  font-light justify-center pt-60 text-base lg:text-xs  lg:mt-32">
            <p className="font-bold text-3xl pt-2 md:pt-3 lg:pt-2 ">&copy;</p>
            <p className="px-1 pt-4"> 2021</p>
            <p className="pt-4"> All copyright Reserved</p>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default VerifyOTP;