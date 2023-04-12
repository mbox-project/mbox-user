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
import { toastify } from "../../../helpers";

const Login = () => {
  // Add rememberMe property to it later..
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoading, isError, isSuccess, user, message } = useSelector(
    (state) => state.auth
  );
  // destructure the loginData object
  const { email, password, rememberMe } = loginData;
  const onChangeInput = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  //check for error messages   typeof window !== "undefined" ?

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // simple validation
    console.log(loginData);
    if (loginData.email == "" || loginData.password == "") {
      toastify.alertWarning("Email or password cannot be empty", 3000);
    } else {
      dispatch(login(loginData))
        .unwrap()
        .then((action) => {
          console.log(action);
          console.log("running");
          sessionStorage.setItem("token", action.data.token);
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
          toastify.alertError(error, 3000);
        });
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
          <div className="text-center firstdiv">
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
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeHolder="enter your password"
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
            <div className="py-3 flex justify-between text-gray-600">
              <div>
                <Input
                  type="checkbox"
                  className="mr-2"
                  name="rememberMe"
                  required={false}
                  value={rememberMe}
                  onChange={onChangeInput}
                />
                {/* <input type="checkbox" value= /> */}
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
      </div>
    </div>
  );
};

export default Login;
