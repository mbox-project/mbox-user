import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/auth/authSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../../helpers/validationSchema/signupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../../../components/Label";
import { useRouter } from "next/router";
import { toastify } from "../../../helpers";
import Spinner from "../../../components/Spinner";

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
        toastify.alertSuccess(
          "A verification mail has been sent to your email for account verification",
          3000,
          () => {
            router.push("/auth/login");
          }
        );
      })
      .catch((error) => {
        toastify.alertError(error, 3000);
      });
  };

  return (
    <div className="flex h-auto w-full items-center justify-between">
      <div className="hidden md:block bg-[url('../public/images/preregisterbg.png')] bg-center bg-no-repeat bg-cover h-[1000px] w-5/12"></div>

      {isLoading && <Spinner />}

      <div className="h-auto w-full md:w-7/12 font-poppins">
        <div className="w-full h-full flex flex-col items-center justify-center py-10">
          <div className="text-center">
            <h1 className="lg:text-3xl text-[#EF5612] text-xl md:text-2xl lg:pt-0 font-bold lg:font-extrabold">
              Create Account
            </h1>
            <div className="flex justify-center">
              <p className="hidden md:flex font-extralight text-md lg:md:max-w-sm lg:text-sm mt-4 lg:mt-2 text-lightGray pl-16 md:pl-0  leading-8 ">
                Let’s get you all set up for pre-registration Provide us with
                following information to get started.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="w-[90%] mt-10 lg:mt-4"
          >
            <div className="mb-1">
              <Label
                className="w-full pb-1 text-base text-[#9A9A9A]"
                htmlFor="text"
                title="Full Name *"
              />
              <input
                type="text"
                {...initiate("fullname")}
                placeholder="enter your full name e.g Taylor Mason"
                className=" w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required
              />
              <p className="text-sm text-[#EF5612] pt-2">
                {errors.fullname?.message}
              </p>
            </div>

            <div className="mb-1">
              <Label
                className="w-full text-base  text-[#9A9A9A]"
                htmlFor="email"
                title="Email *"
              />

              <div className="relative">
                <input
                  type="email"
                  {...initiate("email")}
                  placeHolder="taylormayson@gmail.com"
                  className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  required
                />
                <p className="text-sm text-[#EF5612] pt-2">
                  {errors.email?.message}
                </p>
              </div>
            </div>

            <div className="mb-1">
              <Label
                className="w-full  pb-1 text-base text-[#9A9A9A]"
                htmlFor="number"
                title="Whatapp No *"
              />

              <div className="relative">
                <input
                  type="number"
                  {...initiate("phoneNumber")}
                  className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  placeHolder="(+234) 81 5657 8901"
                  required
                />
                <p className="text-sm text-[#EF5612] pt-2">
                  {errors.phoneNumber?.message}
                </p>
              </div>
            </div>

            <div className="mb-1">
              <Label
                className="w-full text-base text-[#9A9A9A]"
                htmlFor="text"
                placeHolder="male"
                title="Sex"
              />
              <select
                {...initiate("gender")}
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required
              >
                <option value="" disable selected>
                  Select your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="text-sm text-[#EF5612] pt-2">
                {errors.gender?.message}
              </p>
            </div>

            <div className="mb-1">
              <Label
                className="w-full text-base text-[#9A9A9A]"
                htmlFor="text"
                title="Account Type"
              />
              <select
                {...initiate("account")}
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required
              >
                <option value="" disable selected>
                  Select Account Type
                </option>
                <option value="buyer">Buyer</option>
                <option value="merchant">Merchant</option>
              </select>
              <p className="text-sm text-[#EF5612] pt-2">
                {errors.account?.message}
              </p>
            </div>

            <div className="mb-1">
              <Label
                className="w-full pb-1 text-base text-[#9A9A9A]"
                htmlFor="text"
                title="Location *"
              />
              <input
                type="text"
                {...initiate("location")}
                placeHolder="Lagos"
                className=" w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required
              />
              <p className="text-sm text-[#EF5612] pt-2">
                {errors.location?.message}
              </p>
            </div>

            <div className="mb-1">
              <Label
                className="w-full text-base text-[#9A9A9A]"
                htmlFor="Password"
                title="Password"
              />
              <div className="relative">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...initiate("password")}
                    placeHolder="enter your password"
                    className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
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
                <p className="text-sm text-[#EF5612] pt-2">
                  {errors.password?.message}
                </p>
              </div>
            </div>
            
            <div className="mb-1">
              <Label
                className="w-full text-base text-[#9A9A9A]"
                htmlFor="confirmPassword"
                title="Re-Type Password *"
              />
              <div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...initiate("confirmPassword")}
                    placeHolder="Confirm your password"
                    className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
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
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      />
                    )}
                  </div>
                </div>
                <p className="text-sm text-[#EF5612] pt-2">
                  {errors.confirmPassword?.message}
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#EF5612] p-2 mt-3 lg:mt-6 lg:p-2  shadow-lg rounded-md text-white text-lg"
            >
              Pre-Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
