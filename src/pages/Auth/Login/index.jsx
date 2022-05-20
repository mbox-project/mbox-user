import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import Label from "../../../components/Label";

function Login() {
  const [value, setValue] = React.useState({});
  const onChangeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" flex">
      <div className="  hidden lg:w-1/2  lg:mx-auto  lg:block bg-register-img ">
        <img src={logo} className="w- m-6" />
        <div className=" mt-60 pt-96  text-white">
          <p className="flex justify-center font-poppins font-extrabold text-4xl ">
            Hello, Friend!
          </p>
          <p className="flex justify-center pt-3 font-poppins text-base  ">
            Welcome back! Please login to your account
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:mx-auto  md:my-auto bg-white p-12">
        <div className="w-full">
          <div className="text-center pb-10">
            <h1 className="text-3xl lg:text-5xl font-bold lg:pt-20 text-orange-600 mb-5">
              Login
            </h1>
            <p className=" lg:text-base text-lg text-gray-700">
              Please enter your details.
            </p>
          </div>
          <form className=" px-0 lg:px-10">
            <div className="mb-6">
              <Label
                className="w-full  text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />
              <Input
                name="email"
                type="email"
                className="w-full  p-4 pr-12 mt-2 text-2xl lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-6">
              <Label
                className="w-full text-xl lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title="Password"
              />
              {/* <Input
                name="password"
                type="password"
                className="w-full mt-2 p-4 text-sm border-gray-400 rounded-lg shadow-sm border-2"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              /> */}
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-2 rounded-lg shadow-sm"
                  placeholder="Enter password"
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
            <div className="mb-6 flex justify-between text-gray-600">
              <div>
                <Input
                  type="checkbox"
                  className="mr-2"
                  required={false}
                  onChange={onChangeInput}
                />
                <span className="text-lg">keep me Log in</span>
              </div>
              <div>
                <Link
                  className="underline text-orange-600 text-lg"
                  to={`/auth/forgot-password`}
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-orange-600 h-16  mb-0 lg:mb-4 rounded-lg text-white text-2xl font-semibold"
              onClick={onSubmitHandler}
            >
              Login
            </Button>
            <div className="flex justify-center mb-3">
              <span className="text-gray-600 text-lg leading-12  lg:leading-0  lg:text-sm pt-3">
                By Login, you’ve already agreed to our{" "}
                <Link to="/" className="text-gray-900 pt-3  lg:pt-0 font-bold">
                  Terms & Condition
                </Link>
              </span>
            </div>
            <div className="flex pt-4 lg:pt-0">
              <p className="mr-3 text-gray-600 text-lg lg:text-xl">New User?</p>
              <Link
                to="/auth/register"
                className="text-orange-600 text-lg lg:text-xl underline"
              >
                Sign Up
              </Link>
            </div>
            <Footer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
