import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import loginbg from "../../../public/images/loginbg.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Link from "next/link";
import { useRouter } from "next/router";
import { login, reset } from "../../../store/auth/authSlice";
import Spinner from "../../../components/Spinner";
import { toastify } from "../../../helpers";

const Login = () => {
  // Add rememberMe property to it later..
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, isError, isSuccess, user, message } = useSelector(
    (state) => state.auth
  );
  // destructure the loginData object
  const { email, password } = loginData;
  const onChangeInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  //check for error messages
  useEffect(() => {
    if (isError) {
      toastify.alertError(message, 3000); // displays an error message from the server
    }
    if (isSuccess || user) {
      if (message == "Login Successful") {
        const mssg = "Welcome to your Dashboard";
        typeof window !== "undefined" ? toastify.alertSuccess(mssg, 3000) : " ";
      }
      router.push("/account");
    }
    dispatch(reset());
  }, [isError, message, isSuccess, user, dispatch, router]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // check for empty values ...then real validation will be applied later ..
    if (loginData.email == "" || loginData.password == "") {
      toastify.alertWarning("Email or password cannot be empty", 3000);
    } else {
      dispatch(login(loginData));
    }
  };

  return (
    <div className="flex">
      <div className="hidden w-1/2 backlogin lg:block">
        <Image src={loginbg} height={830} />
      </div>
      {isLoading && <Spinner />}
      <div className="w-full lg:w-1/2 px-4  bg-grayColor">
        <div>
          <div className="text-center">
            <h1 className="text-lg md:text-3xl font-bold mt-20 lg:mt-28 font-poppins text-orange-600 ">
              Login
            </h1>
            <p className=" hidden md:flex justify-center md:text-sm pt-2 font-poppins text-gray-700">
              Please enter your details.
            </p>
          </div>
          <form className=" mt-6  px-0 lg:px-10">
            <div className="mb-6 ">
              <Label
                className="w-full  text-lg lg:text-base font-poppins text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />
              <Input
                name="email"
                type="email"
                value={email}
                placeHolder="enter your email"
                className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor font-poppins  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                onChange={onChangeInput}
                required
              />
            </div>
            <div className="mb-0 mt-0 md:mt-4">
              <Label
                className="w-full text-lg font-poppins lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title="Password"
              />
              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  value={password}
                  placeHolder="enter your password"
                  className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor  poppins mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  onChange={onChangeInput}
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
            <div className="py-3 flex justify-between text-gray-600">
              <div>
                <Input
                  type="checkbox"
                  className="mr-2"
                  required={false}
                  onChange={onChangeInput}
                />
                <span className="text-lg lg:text-sm poppins">
                  keep me Log in
                </span>
              </div>
              <div>
                <Link href={`/auth/forgot-password`}>
                  <a className="underline text-orange-600 lg:text-lightGray text-lg lg:text-sm poppins">
                    Forgot password?
                  </a>
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-orange-600 h-12 poppins  mb-0 lg:mb-4 rounded-lg text-white text-lg  lg:text-2xl mt-5 font-semibold"
              onClick={onSubmitHandler}
            >
              Login
            </Button>
            <div className=" flex  pt-4 lg:pt-0 md:flex justify-center">
              <span className="text-gray-600 flex poppins  justify-center text-sm lg:leading-0  lg:text-xs pt-1 lg:pt-0">
                By Login, you’ve already agreed to our{" "}
              </span>
              <Link href="/">
                <a className="text-gray-900  poppins pt-1 flex text-sm  lg:text-xs pl-2 justify-center  md:pt-3 lg:pt-0 font-bold">
                  Terms & Condition
                </a>
              </Link>
            </div>
            <div className="flex pt-5 lg:pt-0">
              <p className=" text-gray-600 text-md poppins  pt-5 flex justify-center lg:text-base">
                New User?
              </p>
              <Link href="/auth/register">
                <a className="text-orange-600 poppins pl-3  flex justify-center pt-5 text-md lg:text-base underline">
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
};

export default Login;
