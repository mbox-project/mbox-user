import React from "react";
import Resetbg from "../../../../public/images/loginbg.png";
import Image from "next/image";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Link from "next/link";

const AdminResetPassword = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden w-1/2 backlogin lg:block">
        <div>
          <Image
            src={Resetbg}
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
              Reset Password
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
                name="Account Email"
                type="email"
                /* value={email} */
                placeHolder="Account Email"
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                onChange={""}
                required
              />
            </div>
            <div className="p-1">
              <Input
                name="Recovery email"
                type="email"
                /* value={email} */
                placeHolder="Recovery Email"
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                onChange={""}
                required
              />
            </div>
            <div className="p-1">
              <select className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm text-neutral-400 bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none">
                <option value="sort-by" selected>
                  Department
                </option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="saless">Sales</option>
                <option value="management">Management</option>
              </select>
            </div>
            <div className="p-1">
              <textarea
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border  md:rounded-md shadow-sm rounded-none"
                rows="4"
                placeholder="Reason"
              ></textarea>
            </div>
            <Button
              className="w-full bg-[#491546] h-12 poppins rounded-md text-white text-lg  lg:text-2xl mt-5 font-medium"
              onClick={""}
            >
              Reset Password
            </Button>
            <div className="p-2 md:flex justify-center text-center">
              <span className="w-2/3 text-gray-600 poppins font-semibold  justify-center text-sm lg:leading-0">
                Check the Recovery Email you entered above for your new Password
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminResetPassword;
