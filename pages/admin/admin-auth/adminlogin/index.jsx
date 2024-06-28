import React from "react";
import Image from "next/image";
import Loginbg from "../../../../public/images/loginbg.png";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Link from "next/link";

const AdminLogin = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden w-1/2 backlogin lg:block">
        <div className="">
          <Image
            src={Loginbg}
            alt="Background Image"
            width={1000}
            height={1100}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4  bg-grayColor">
        <div>
          <div className="text-center firstdiv">
            <h1 className="text-lg md:text-3xl font-bold mt-20 lg:mt-28 font-poppins text-[#491546]">
              Log in to Marketbox
            </h1>
            <p className=" hidden md:flex justify-center md:text-sm pt-2 font-poppins text-gray-400">
              Please enter your details appropriately
            </p>
          </div>

          <form className=" my-6  px-0 lg:px-10">
            <div className="p-1">
              <Input
                name="name"
                type="text"
                /* value={name} */
                placeHolder="Name"
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                onChange={""}
                required
              />
            </div>
            <div className="p-1">
              <Input
                name="Username"
                type="text"
                /* value={username} */
                placeHolder="Username"
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                onChange={""}
                required
              />
            </div>
            <div className="p-1">
              <Input
                name="Dept."
                type="text"
                /* value={dept} */
                placeHolder="Dept."
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                onChange={""}
                required
              />
            </div>
            <div className="p-1">
              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  value={""}
                  placeHolder="enter your password"
                  className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor  poppins mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                  onChange={""}
                  required
                />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="p-1 flex justify-between text-gray-400">
              <div>
                <Input
                  type="checkbox"
                  className="mr-2"
                  required={false}
                  onChange={""}
                />
                <span className="text-lg lg:text-sm poppins">
                  keep me Log in
                </span>
              </div>
              <div>
                <Link href={`/auth/forgot-password`}>
                  <a className="underline text-lg lg:text-sm poppins">
                    Forgot password?
                  </a>
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-[#491546] h-12 poppins rounded-md text-white text-lg  lg:text-2xl mt-5 font-medium"
              onClick={""}
            >
              Login
            </Button>
            <div className=" flex p-2 md:flex justify-center">
              <span className="text-gray-600 poppins font-semibold  justify-center text-sm lg:leading-0">
                Don’t have an account?
              </span>
              <Link href="/">
                <a className="text-orange-600 poppins font-semibold text-sm underline pl-2 justify-center">
                  Sign up
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
