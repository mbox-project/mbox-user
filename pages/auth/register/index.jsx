import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../../store/auth/authSlice";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//import Dropdown from "../../../components/Dropdown";
import authbg from "../../../public/images/authbg.png";
import { toastify } from "../../../helpers";
import Spinner from "../../../components/Spinner";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const { fullname, email, phoneNumber, gender, password, confirmPassword } =
    registerData;

  const onChangeInput = (e) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //extract the values we need from auth slicer;
  const { isError, isSuccess, isLoading, user, message } = useSelector(
    (state) => state.auth
  );
  // console.log("Error", isError, "isSuccess", isSuccess, "isLoading", isLoading);

  useEffect(() => {
    if (isError) {
      toastify.alertError(message, 3000);
    }
    if (isSuccess) {
      if (message == "User created succesfully") {
        const mssg =
          "A verification mail has been sent to your email for account verification";
        toastify.alertSuccess(mssg, 5000);
      }
      router.push("/auth/login");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, user, router, dispatch]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    //simple validation
    if (registerData.password != registerData.confirmPassword) {
      toastify.alertError("Password do not match", 3000);
    } else if (
      registerData.fullname == "" ||
      registerData.email == "" ||
      registerData.phoneNumber == "" ||
      registerData.gender == "" ||
      registerData.password == ""
    ) {
      toastify.alertError("Please enter ommitted fields ", 3000);
    } else {
      //dispatch an action and sends the data to the server..
      dispatch(register(registerData));
    }
  };

  return (
    <div className="flex">
      <div className="hidden lg:w-1/2  lg:block bg-register-img bg-cover">
        <Image src={authbg} height={1250} />
      </div>
      {isLoading && <Spinner />}
      <div className=" bg-grayColor w-full lg:w-1/2  px-4 lg:px-0">
        <div className="text-center ">
          <h1 className="lg:text-4xl poppins text-orange-600 text-xl md:text-2xl mt-16 lg:mt-24 lg:pt-0  font-bold lg:font-extrabold tracking-wide ">
            Create Account
          </h1>
          <div className=" flex justify-center">
            <p className="hidden md:flex font-extralight text-md poppins lg:md:max-w-sm lg:text-sm mt-4 lg:mt-2 text-lightGray pl-16 md:pl-0  leading-8 ">
              Let&apos;s get you all set up. Provide us with the following
              information to get started
            </p>
          </div>
        </div>
        <form
          onSubmit={onSubmitForm}
          className="w-full px-0 lg:px-10 mt-10 lg:mt-4"
        >
          <div className="mb-4">
            <Label
              className="w-full pb-1 text-base poppins text-[#9A9A9A]"
              htmlFor="text"
              title="Full Name *"
            />
            <Input
              name="fullname"
              type="text"
              value={fullname}
              placeHolder="enter your full name e.g Wahab Samuel"
              className=" w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 font-poppins border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="mb-4">
            <Label
              className="w-full poppins text-base  text-[#9A9A9A]"
              htmlFor="email"
              title="Email *"
            />

            <div className="relative">
              <Input
                name="email"
                type="email"
                value={email}
                placeHolder="Enter your email"
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 font-poppins border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                onChange={onChangeInput}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full  pb-1 text-base text-[#9A9A9A]"
              htmlFor="number"
              placeHolder="enter your phone number "
              title="Whatapp No *"
            />

            <div className="relative">
              <Input
                name="phoneNumber"
                type="number"
                value={phoneNumber}
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                onChange={onChangeInput}
                maxlength={11}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full font-poppins text-base text-[#9A9A9A]"
              htmlFor="text"
              placeHolder="male"
              title="Sex"
            />
            <select
              name="gender"
              value={gender}
              className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
              onChange={onChangeInput}
              required
            >
              <option value="" disable selected>
                Select your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {/* <div className="relative">
              <Dropdown
                name="sex"
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              >
                {sexOptions.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </Dropdown>
            </div> */}
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base poppins text-[#9A9A9A]"
              htmlFor="Password"
              title="Password"
            />
            <div className="relative">
              <Input
                type="password"
                name="password"
                value={password}
                placeHolder="enter your password"
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                onChange={onChangeInput}
                required
              />
              <p className=" text-sm text-orange-600 pt-2">
                Password should contain at least 8 characters
              </p>
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base poppins text-[#9A9A9A]"
              htmlFor="confirmPassword"
              title="Re-Type Password *"
            />

            <div className="relative">
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeHolder="Confirm your password"
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm poppins  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                onChange={onChangeInput}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 p-2 mt-3 lg:mt-6 lg:p-2 font-poppins  shadow-lg rounded-md text-white text-lg font-semibold"
          >
            Sign Up
          </button>

          <div className="flex justify-center mb-3">
            <span className="text-gray-600 poppins text-sm mt-2 lg:mt-1">
              By Sign Up, you’ve already agreed to our{" "}
              <Link href="/" className="text-gray-900 font-bold">
                <a>Terms & Condition</a>
              </Link>
            </span>
          </div>
          <div className="flex">
            <p className="mr-3 mt-3 text-lightGray text-md">Existing User?</p>
            <Link href="/auth/login">
              <a className="text-orange-600 mt-3 text-md underline">Login</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
