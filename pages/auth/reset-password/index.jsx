import React from "react";
import resetpasswordimg from "../../../public/images/loginbg.png";

import Button from "../../../components/Button";
// import Footer from "../../../components/Footer";
import Label from "../../../components/Label";
import Image from "next/image";
import Input from "../../../components/Input";

function ResetPassword() {
  const [value, setValue] = React.useState({});

  const onChangeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div className=" hidden w-1/2 min-h-screen mx-auto lg:block bg-reset bg-cover">
        <Image src={resetpasswordimg} />
      </div>
      <div className=" lg:w-1/2 mx-auto w-full inputcolor  ">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-xl font-bold mt-20 text-orange-600 mb-3">
              Reset Password
            </h1>
            <p className="hidden md:flex justify-center  text-lg text-gray-700">
              Enter a new password
            </p>
          </div>
          <form className=" px-4 mt-10 lg:px-10">
            <div className="mb-4">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title=" New Password"
              />

              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  autoFocus={true}
                  required={true}
                  onChange={onChangeInput}
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

            <div className="mb-4 mt-10">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title=" Confirm New Password"
              />

              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  autoFocus={true}
                  required={true}
                  onChange={onChangeInput}
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

            <Button
              className="w-full bg-orange-600 h-12  mt-8  mb-0 lg:mb-4 rounded-lg text-white text-lg  lg:text-2xl font-semibold"
              onClick={onSubmitHandler}
            >
              Reset my password
            </Button>
            {/* <Footer /> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
