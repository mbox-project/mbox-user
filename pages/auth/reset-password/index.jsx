import React from "react";
import logo from "../../../public/images/logo.png";
import icon from "../../../public/images/icon.png";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
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
        <Image src={logo} className=" w-32 m-6" />
        <div className=" mt-60 pt-96  text-white">
          <Image src={icon} className=" w-32  mx-auto " />
          <p className="flex justify-center font-poppins font-extrabold text-2xl -mt-20">
            Hello,Friend!
          </p>
          <p className="flex justify-center pt-3 font-poppins text-base  ">
            Welcome back! Enter a new password and continue to enjoy MBOX
          </p>
        </div>
      </div>
      <div className=" lg:w-1/2 mx-auto w-full inputcolor p-12 my-auto">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-orange-600 mb-3">
              Reset Password
            </h1>
            <p className=" lg:text-base text-lg text-gray-700">
              Enter a new password
            </p>
          </div>
          <form className=" px-0 lg:px-10">
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
                  className="w-full p-2 pr-12 text-base inputcolor lg:text-sm mt-2 border-[#444444] border-2 rounded-md shadow-sm"
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

            <div className="mb-4">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title=" Confirm New Password"
              />

              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  className="w-full p-2 pr-12 text-base inputcolor lg:text-sm mt-2 border-[#444444] border-2 rounded-md shadow-sm"
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
              className="w-full bg-orange-600 p-2  mt-3 mb-4 rounded-md shadow-lg  text-white text-lg font-semibold"
              onClick={onSubmitHandler}
            >
              Reset my password
            </Button>
            <Footer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;