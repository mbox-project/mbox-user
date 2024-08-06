import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";
import loginbg from "../../../public/images/loginbg.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Link from "next/link";
import { useRouter } from "next/router";
import { login } from "../../../store/auth/authSlice";
import Spinner from "../../../components/Spinner";
import TermsAndConditionsModal from "../../../components/TermsAndConditionsModal";

import CustomAlertModal from "../../../Utils/CustomAlertModal";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const { isLoading, isError, isSuccess, user } = useSelector(
    (state) => state.auth
  );

  const { email, password, rememberMe } = loginData;

  const onChangeInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      CustomAlertModal.show("warning", "Email or password cannot be empty");
    } else {
      dispatch(login(loginData))
        .unwrap()
        .then((action) => {
          console.log(action);
          sessionStorage.setItem("token", action.data.token);
          push("/account");
        })
        .catch((error) => {
          console.log(error);
          CustomAlertModal.show("error", "Login Failed", error.toString());
        });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center justify-between bg-grayColor">
      <div className="hidden h-screen w-full lg:flex items-center">
        <Image src={loginbg} className="w-full hfull my-auto" />
      </div>
      {isLoading && <Spinner />}
      <div className="w-full h-full flex items-center justify-center bg-grayColor py-8 px-4 lg:p-0">
        <div className="w-full h-full flex flex-col items-stretch justify-center my-auto">
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-bold mt20 lg:mt28 font-poppins text-orange-600 ">
              Login
            </h1>
            <p className=" hidden md:flex justify-center md:text-sm pt-2 font-poppins text-gray-700">
              Please enter your details.
            </p>
          </div>
          <form className=" mt-6 px-0 lg:px-10">
            <div className="mb-6">
              <Label
                className="w-full text-lg lg:text-base font-poppins text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />
              <Input
                name="email"
                type="email"
                value={email}
                placeHolder="Enter your email"
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
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeHolder="Enter your password"
                  className="w-full p-1 md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm bg-grayColor  poppins mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  onChange={onChangeInput}
                  required
                />
                <div className="absolute translate-y-[-50%] text-[#899A9A] top-[55%] my-auto right-[3%]">
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      className="block cursor-pointer text-[1.2rem]"
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  ) : (
                    <AiOutlineEye
                      className="block cursor-pointer text-[1.2rem]"
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="py-3 flex justify-between items-center text-gray-600">
              <div className="flex items-center justify-center gap-1">
                <Input
                  type="checkbox"
                  className="cursor-pointer"
                  name="rememberMe"
                  required={false}
                  value={rememberMe}
                  onChange={onChangeInput}
                />
                <span className="text-lg lg:text-sm poppins">
                  Keep me logged in
                </span>
              </div>
              <div>
                <Link
                  href={`/auth/forgot-password`}
                  className="underline text-orange-600 lg:text-lightGray text-lg lg:text-sm poppins"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-orange-600 h-12 poppins  mb-0 lg:mb-4 rounded-lg text-white text-lg  lg:text-2xl mt-5 font-semibold"
              onClick={onSubmitHandler}
            >
              Login
            </Button>
            <div className="flex pt-4 lg:pt-0 items-center gap-1 justify-center">
              <span className="text-gray-600 flex poppins  justify-center text-sm lg:leading-0  pt-1 lg:pt-0">
                By Login, you’ve already agreed to our{" "}
              </span>
              <TermsAndConditionsModal />
            </div>
            <div className="flex items-center gap-1 pt-5 lg:pt-0">
              <p className=" text-gray-600 text-md lg:text-base">New User?</p>
              <Link href="/auth/register">
                <a className="text-orange-600 text-md lg:text-base underline">
                  Sign Up
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <CustomAlertModal />
    </div>
  );
};

export default Login;
