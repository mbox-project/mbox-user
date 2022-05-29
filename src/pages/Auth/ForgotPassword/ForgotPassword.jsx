import React from "react";
import logo from "../../../assets/images/logo.png";
import icon from "../../../assets/images/icon.png";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Footer from "../../../components/Footer";

function ForgotPassword() {
  return (
    <div className="flex ">
      <div className=" hidden w-1/2  mx-auto min-h-screen  lg:block bg-recover-img bg-cover ">
        <img src={logo} className=" w-32 m-6" />
        <div className="pt-96 mt-52 mb-20  text-white">
          <img src={icon} className=" w-32  mx-auto " />
          <p className="flex justify-center font-poppins font-extrabold text-4xl -mt-20 ">
            Hello, Friend!
          </p>
          <p className="flex justify-center pt-3 font-poppins text-base  ">
            Welcome back! Please login to your account
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2  lg:mx-auto generalbg ">
        <div className="w-full  font-poppins text-center  mt-32 lg:mt-52 ">
          <h1 className="lg:text-3xl text-orange-600 text-3xl md:text-5xl  mt-44 lg:mt-24 lg:pt-0 font-poppins font-extrabold ">
            Recover Password
          </h1>
          <p className=" flex  text-base  lg:text-sm mt-4 lg:mt-3  md:pl-0 justify-center lg:px-44 leading-relaxed ">
            Please enter your recovery email.
          </p>
        </div>
        <form className=" px-5 lg:px-10 mt-5 lg:mt-4 lg:pt-0 ">
          <div className="mb-4">
            <Label
              className="w-full pb-1 text-base text-[#9A9A9A]"
              htmlFor="email"
              title="Email"
            />
            <Input
              name="email"
              type="email"
              className=" w-full mt-1 p-2 inputcolor focus:outline-none lg:p-2 text-lg lg:text-base border-[#444444] rounded-md shadow-sm border-2 "
              required={true}
              autoFocus={false}
            />
          </div>

          <Button className="w-full bg-orange-600 p-2 mt-3 lg:p-2  shadow-lg rounded-md text-white text-lg font-semibold">
            Proceed
          </Button>
          <div className="flex justify-center mb-3">
            <span className="text-gray-600 md:text-base text-sm lg:text-sm mt-2 lg:mt-1">
              Check the Email input above for a recovery link
            </span>
          </div>
          <div className="flex ">
            <p className="mr-3 mt-3 text-gray-600 text-lg md:text-xl">
              Existing User?
            </p>
            <Link
              to="/auth/login"
              className="text-orange-600 mt-3 text-lg md:text-xl underline"
            >
              Back to Login
            </Link>
          </div>
          <Footer className="flex justify-center mt-64 md:mt-96 lg:mt-80 mb-0">
            <p className="font-bold text-3xl ">&copy;</p>
            <p className="px-1 pt-3"> 2021</p>
            <p className="pt-3 "> All copyright Reserved</p>
          </Footer>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
