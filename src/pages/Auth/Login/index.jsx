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
        <img src={logo} className="w-32 m-6" />
        <div className=" mt-60 pt-96  text-white">
          <p className="flex justify-center font-poppins font-extrabold text-4xl ">
            Hello, Friend!
          </p>
          <p className="flex justify-center pt-3 pb-10 font-poppins text-base  ">
            Welcome back! Please login to your account
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:mx-auto  md:my-auto generalbg p-6 lg:p-12">
        <div className="w-full">
          <div className="text-center ">
            <h1 className="text-3xl lg:text-4xl font-bold mt-24 lg:mt-32 text-orange-600 mb-2">
              Login
            </h1>
            <p className=" lg:text-base text-base text-gray-700">
              Please enter your details.
            </p>
          </div>
          <form className=" mt-6 px-0 lg:px-10">
            <div className="mb-4">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />
              <Input
                name="email"
                type="email"
                className="w-full  p-2 inputcolor focus:outline-none pr-0 lg:pr-12 mt-2 text-2xl lg:text-base border-[#444444] border-2 rounded-md shadow-sm"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-4">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title="Password"
              />

              <div className="relative">
                <input
                  type="password"
                  className="w-full  p-2 inputcolor focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-2 rounded-md shadow-sm"
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
                  className="mr-2 inputcolor"
                  required={false}
                  onChange={onChangeInput}
                />
                <span className="text-base">keep me Log in</span>
              </div>
              <div>
                <Link
                  className="underline  text-base"
                  to={`/auth/forgot-password`}
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-orange-600 p-2 mb-0 lg:mb-2 rounded-md text-white text-lg shadow-lg font-semibold"
              onClick={onSubmitHandler}
            >
              Login
            </Button>
            <div className="flex justify-center mb-1">
              <span className="text-gray-600 text-xs  leading-relaxed   lg:leading-0  lg:text-sm mt-1">
                By Login, you’ve already agreed to our{" "}
                <Link to="/" className="text-gray-900 pt-3  lg:pt-0 font-bold">
                  Terms & Condition
                </Link>
              </span>
            </div>
            <div className="flex mt-4 lg:pt-0 ">
              <p className="mr-3 text-gray-600  flex justify-center lg:block text-lg lg:text-base">
                New User?
              </p>
              <Link
                to="/auth/register"
                className="text-orange-600 text-lg  lg:text-base underline"
              >
                Sign Up
              </Link>
            </div>
            <Footer className="flex font-poppins  md:text-2xl   font-light justify-center mt-15 text-base lg:text-xs  ">
              <p className="font-bold text-3xl ">&copy;</p>
              <p className="px-1 pt-3"> 2021</p>
              <p className="pt-3"> All copyright Reserved</p>
            </Footer>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
