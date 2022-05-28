import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Footer from "../../../components/Footer";

function Register() {
  return (
    <div className="flex ">
      <div className=" hidden lg:w-1/2  lg:mx-auto  lg:block bg-register-img  ">
        <img src={logo} className=" w-32 m-6" />
        <div className=" mt-96 pt-96  text-white">
          <p className="flex justify-center font-poppins font-extrabold text-4xl ">
            Welcome Back!
          </p>
          <p className="flex justify-center pt-3 font-poppins text-base  ">
            Lets get you all set up. Join the worlds largest pocket-sized
            marketplace.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2  lg:mx-auto bg-white ">
        <div className="w-full  font-poppins text-center mt-12 ">
          <h1 className="lg:text-5xl text-orange-600 text-4xl md:text-5xl  mt-20 lg:mt-24 lg:pt-0 font-poppins font-extrabold ">
            Create Account
          </h1>
          <p className=" hidden lg:flex text-sm pt-3 justify-center px-48 leading-relaxed ">
            Lets get you all set up. Provide us with the following information
            to get started
          </p>
        </div>
        <form className="px-10 mt-4 lg:pt-0">
          <div className="mb-4">
            <Label
              className="w-full pb-1 text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Full Name"
            />
            <Input
              name="text"
              type="text"
              className="lg:w-full  w-full mt-1 p-4  lg:p-2 text-lg lg:text-base border-[#444444] rounded-md shadow-sm border-2 "
              required={true}
              autoFocus={false}
            />
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base  text-[#9A9A9A]"
              htmlFor="email"
              title="Email"
            />

            <div className="relative">
              <input
                type="email"
                className="w-full p-4  lg:p-2  pr-12 mt-1  text-lg lg:text-base border-[#444444] border-2 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full  pb-1 text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Whatapp No"
            />

            <div className="relative">
              <input
                type="number"
                className="w-full p-4  lg:p-2  pr-12 mt-1  text-lg lg:text-base border-[#444444] border-2 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Sex"
            />

            <div className="relative">
              <input
                type="text"
                className="w-full p-4  lg:p-2  pr-12 mt-1  text-lg lg:text-base border-[#444444] border-2 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base text-[#9A9A9A]"
              htmlFor="Password"
              title="Password"
            />

            <div className="relative">
              <input
                type="password"
                className="w-full p-4  lg:p-2  pr-12 mt-1  text-lg lg:text-base border-[#444444] border-2 rounded-md shadow-sm"
              />
              <p className=" text-sm text-orange-600 pt-2">
                Password should contain at least 8 characters
              </p>
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base text-[#9A9A9A]"
              htmlFor="password"
              title="Retype Password"
            />

            <div className="relative">
              <input
                type="password"
                className="w-full p-4  lg:p-2  pr-12 mt-1 text-lg lg:text-base border-[#444444] border-2 rounded-md shadow-sm"
              />
            </div>
          </div>

          <Button className="w-full bg-orange-600 p-4  lg:p-2  mb-4 rounded-md text-white text-2xl font-semibold">
            Sign Up
          </Button>
          <div className="flex justify-center mb-3">
            <span className="text-gray-600 text-sm pt-2">
              By Sign Up, you’ve already agreed to our{" "}
              <Link to="/" className="text-gray-900 font-bold">
                Terms & Condition
              </Link>
            </span>
          </div>
          <div className="flex">
            <p className="mr-3 text-gray-600 text-xl">Existing User?</p>
            <Link
              to="/auth/login"
              className="text-orange-600 text-xl underline"
            >
              Login
            </Link>
          </div>
        </form>

        <Footer />
      </div>
    </div>
  );
}

export default Register;
