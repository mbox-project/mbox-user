import React from "react";
import logo from "../../../assets/images/logo.png";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Label from "../../../components/Label";

function ResetPassword() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen flex">
      <div className=" hidden lg:flex w-1/2 mx-auto p-12 bg-[url]">
        <img src={logo} />
      </div>
      <div className="w-full lg:w-1/2 lg:mx-auto  md:my-auto bg-white p-12">
        <div className="w-full">
          <div className="text-center pb-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-orange-600 mb-5">
              Reset Password
            </h1>
            <p className=" lg:text-base text-lg text-gray-700">
              Enter a new password
            </p>
          </div>
          <form className=" px-0 lg:px-10">
            <div className="mb-6">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title=" New Password"
              />

              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-base lg:text-sm mt-2 border-[#444444] border-2 rounded-lg shadow-sm"
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

            <div className="mb-6">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title=" Confirm New Password"
              />

              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-base lg:text-sm mt-2 border-[#444444] border-2 rounded-lg shadow-sm"
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
              className="w-full bg-orange-600 h-16 mb-4 rounded-lg text-white text-2xl font-semibold"
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
