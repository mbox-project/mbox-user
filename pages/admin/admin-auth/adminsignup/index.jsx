import React from "react";
import Signupbg from "../../../../public/images/loginbg.png";
import Image from "next/image";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Link from "next/link";

const AdminSignup = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden w-1/2 backlogin lg:block">
        <div>
          <Image
            src={Signupbg}
            alt="Background Image"
            width={1000}
            height={1100}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4  bg-grayColor">
        <div>
          <div className="text-center firstdiv">
            <h1 className="text-lg md:text-3xl font-bold mt-20 lg:mt-28 font-poppins text-[#491546] ">
              Sign up to MBOX
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
                name="email"
                type="email"
                /* value={email} */
                placeHolder="email"
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                onChange={""}
                required
              />
            </div>
            <div className="p-1">
              <select className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm text-neutral-400 bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none">
                <option value="sort-by" selected>
                  Job Level
                </option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="saless">Sales</option>
                <option value="management">Management</option>
              </select>
            </div>
            <div className="p-1">
              <select className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm text-neutral-400 bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none">
                <option value="sort-by" selected>
                  Admin Role
                </option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="saless">Sales</option>
                <option value="management">Management</option>
              </select>
            </div>
            <Button
              className="w-full bg-[#491546] h-12 poppins rounded-md text-white text-lg  lg:text-2xl mt-5 font-medium"
              onClick={""}
            >
              Create Admin
            </Button>
            <div className=" flex p-2 md:flex justify-center">
              <span className="text-gray-600 poppins font-semibold  justify-center text-sm lg:leading-0">
                Already have an account?
              </span>
              <Link href="/">
                <a className="text-orange-600 poppins font-semibold text-sm underline pl-2 justify-center">
                  Login
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
