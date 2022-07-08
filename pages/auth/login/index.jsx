import Image from "next/image";
import React from "react";
import loginbg from "../../../public/images/loginbg.png";
// import logo from "../../../public/images/logo.png";
import Button from "../../../components/Button";
// import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Link from "next/link";

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
      <div className="hidden w-1/2   backlogin lg:block">
        <Image src={loginbg} />
        {/* <div>
          <div className="p-5">
            <Image src={logo} />
          </div>
          <div className="text-white text-center">
            <Image src={icon} />
            <p className="flex justify-center font-extrabold text-4xl">
              Welcome Back!
            </p>
            <p className="flex justify-center pt-3 text-base  ">
              Lets get you all set up. Join the worlds largest pocket-sized
              marketplace.
            </p>
          </div>
        </div> */}
      </div>
      <div className="w-full lg:w-1/2 px-4  bg-white">
        <div>
          <div className="text-center">
            <h1 className="text-lg md:text-xl font-bold mt-20 text-orange-600 ">
              Login
            </h1>
            <p className=" hidden md:flex justify-center md:text-lg pt-2 text-gray-700">
              Please enter your details.
            </p>
          </div>
          <form className=" mt-10  px-0 lg:px-10">
            <div className="mb-6 ">
              <Label
                className="w-full  text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />
              <Input
                name="email"
                type="email"
                className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-0 mt-0 md:mt-4">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title="Password"
              />
              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  required={true}
                  autoFocus={false}
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
            <div className="py-8 flex justify-between text-gray-600">
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
                <Link href={`/auth/forgot-password`}>
                  <a className="underline text-orange-600 text-lg">
                    Forgot password?
                  </a>
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-orange-600 h-12  mb-0 lg:mb-4 rounded-lg text-white text-lg  lg:text-2xl font-semibold"
              onClick={onSubmitHandler}
            >
              Login
            </Button>
            <div className=" block  pt-4 md:flex justify-center">
              <span className="text-gray-600 flex  justify-center text-md lg:leading-0  lg:text-sm pt-3">
                By Login, you’ve already agreed to our{" "}
              </span>
              <Link href="/">
                <a className="text-gray-900 pt-5 flex  justify-center  md:pt-3 lg:pt-2 lg:pl-1 font-bold">
                  Terms & Condition
                </a>
              </Link>
            </div>
            <div className="block lg:flex pt-5 lg:pt-0">
              <p className=" text-gray-600 text-md lg:pt-5 flex justify-center lg:text-md">
                New User?
              </p>
              <Link href="/auth/register">
                <a className="text-orange-600 flex justify-center pt-5 text-md lg:text-md lg:pl-2 underline">
                  Sign Up
                </a>
              </Link>
            </div>
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Login;
