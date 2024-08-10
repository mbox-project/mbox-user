import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/auth/authSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../../helpers/validationSchema/signupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import authbg from "../../../public/images/authbg.png";
import registerbg from "../../../public/images/registerbg.png";
import { toastify } from "../../../helpers";
import Spinner from "../../../components/Spinner";
import { message } from "antd";
import TermsAndConditionsModal from "../../../components/TermsAndConditionsModal";
import CustomAlertModal from "../../../Utils/CustomAlertModal";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register: initiate,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
    reValidateMode: "onChange",
  });

  //extract the values we need from auth slicer;
  const { isLoading } = useSelector((state) => state.auth);

  const onSubmitForm = (data) => {
    console.log(data);
    dispatch(register(data))
      .unwrap()
      .then((action) => {
        reset();
        CustomAlertModal.show(
          "success",
          "A verification mail has been sent to your email for account verification"
        );
        toastify.alertSuccess(
          "A verification mail has been sent to your email for account verification",
          3000,
          () => {
            router.push("/auth/login");
          }
        );
      })
      .catch((error) => {
        CustomAlertModal.show("error", "Registration Failed", error.toString());
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%]">
      <div className="hidden md:block bg-[url('../public/images/preregisterbg.png')] bg-center bg-no-repeat bg-cover h-full max-h-screen w-full"></div>
      {isLoading && <Spinner />}
      <div className="bg-grayColor w-full px-4 lg:px-8 h-full lg:max-h-screen lg:overflow-y-scroll">
        <div className="w-full max-w-screen-sm lg:max-w-screen-md mx-auto h-full">
          <div className="w-full h-full flex flex-col py-8">
            <div className="text-center">
              <h1 className="lg:text-4xl poppins text-orange-600 text-xl md:text-2xl lg:pt-4  font-bold lg:font-extrabold tracking-wide">
                Create Account
              </h1>
              <div className="flex justify-center">
                <p className="hidden md:flex font-extralight text-md poppins lg:md:max-w-sm lg:text-sm mt-4 lg:mt-2 text-lightGray pl-16 md:pl-0  leading-8 ">
                  Let&apos;s get you all set up. Provide us with the following
                  information to get started
                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmitForm)}
              className=" mt-10 lg:mt-4"
            >
              <div className="mb-4">
                <Label
                  className="w-full pb-1 text-base poppins text-[#9A9A9A]"
                  htmlFor="text"
                  title="Full Name *"
                />
                <input
                  type="text"
                  {...initiate("fullname")}
                  placeHolder="Enter your full name e.g Wahab Samuel"
                  className=" w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 font-poppins border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  required
                />
                <p className="text-sm text-orange-600 pt-2">
                  {errors.fullname?.message}
                </p>
              </div>
              <div className="mb-4">
                <Label
                  className="w-full poppins text-base  text-[#9A9A9A]"
                  htmlFor="email"
                  title="Email *"
                />

                <div className="relative">
                  <input
                    type="email"
                    {...initiate("email")}
                    placeHolder="Enter your email"
                    className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 font-poppins border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                    required
                  />
                  <p className="text-sm text-orange-600 pt-2">
                    {errors.email?.message}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <Label
                  className="w-full  pb-1 text-base text-[#9A9A9A]"
                  htmlFor="number"
                  title="WhatsApp No *"
                />

                <div className="relative">
                  <input
                    type="number"
                    {...initiate("phoneNumber")}
                    className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                    placeHolder="Enter your phone number"
                    required
                  />
                  <p className="text-sm text-orange-600 pt-2">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <Label
                  className="w-full font-poppins text-base text-[#9A9A9A]"
                  htmlFor="text"
                  placeHolder="Male"
                  title="Sex"
                />
                <select
                  {...initiate("gender")}
                  className="w-full p-1 text-[#9A9A9A]  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  required
                >
                  <option value="" disable selected>
                    Select your Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p className="text-sm text-orange-600 pt-2">
                  {errors.gender?.message}
                </p>
              </div>
              <div className="mb-4">
                <Label
                  className="w-full text-base poppins text-[#9A9A9A]"
                  htmlFor="Password"
                  title="Password"
                />
                <div className="relative">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...initiate("password")}
                      placeHolder="Enter your password"
                      className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
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
                  <p className="text-sm text-orange-600 pt-2">
                    {errors.password?.message}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <Label
                  className="w-full text-base poppins text-[#9A9A9A]"
                  htmlFor="confirmPassword"
                  title="Re-Type Password *"
                />
                <div>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...initiate("confirmPassword")}
                      placeHolder="Confirm your password"
                      className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm poppins  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                      required
                    />
                    <div className="absolute translate-y-[-50%] text-[#899A9A] top-[55%] my-auto right-[3%]">
                      {showConfirmPassword ? (
                        <AiOutlineEyeInvisible
                          className="block cursor-pointer text-[1.2rem]"
                          onClick={() => {
                            setShowConfirmPassword((prev) => !prev);
                            console.log(errors);
                          }}
                        />
                      ) : (
                        <AiOutlineEye
                          className="block cursor-pointer text-[1.2rem]"
                          onClick={() =>
                            setShowConfirmPassword((prev) => !prev)
                          }
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-orange-600 pt-2">
                    {errors.confirmPassword?.message}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 p-2 mt-3 lg:mt-6 lg:p-2 font-poppins  shadow-lg rounded-md text-white text-lg font-semibold"
              >
                Sign Up
              </button>

              <div className="flex justify-center mb-3">
                <span className="text-gray-600 poppins text-sm mt-2 lg:mt-1 flex gap-1">
                  By Sign Up, you’ve already agreed to our{" "}
                  <TermsAndConditionsModal />
                </span>
              </div>
              <div className="flex items-center gap-1 pb-8">
                <p className="mt-3 text-lightGray text-md block">
                  Existing User?
                </p>
                <Link href="/auth/login">
                  <a className="text-orange-600 mt-3 text-md underline">
                    Login
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <CustomAlertModal />
    </div>
  );
};

export default Register;
