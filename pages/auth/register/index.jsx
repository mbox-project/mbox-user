import React from "react";
import logo from "../../../public/images/logo.png";
import icon from "../../../public/images/icon.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../../../components/Dropdown";

function Register() {
  const [value, setValue] = React.useState({});

  const onChangeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const sexOptions = [
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "Male",
    },
    {
      id: 3,
      value: "Female",
    },
    {
      id: 4,
      value: "Rather Not Say",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:w-1/2 lg:mx-auto min-h-screen bg-orange-600 lg:block bg-register-img bg-cover">
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
      </div>
      <div className="w-full lg:w-1/2 lg:mx-auto px-4">
        <div className="text-center ">
          <h1 className="lg:text-5xl text-orange-600 text-xl md:text-2xl mt-16 lg:mt-16 lg:pt-0  font-bold lg:font-extrabold ">
            Create Account
          </h1>
          <p className="  hidden md:flex text-md  md:max-w-none lg:text-lg mt-4 lg:mt-3 pl-16 md:pl-0 justify-center lg:px-44 leading-relaxed ">
            Lets get you all set up. Provide us with the following information
            to get started
          </p>
        </div>
        <form className="w-full px-0 lg:px-20 mt-10 lg:mt-4 lg:pt-0 ">
          <div className="mb-4">
            <Label
              className="w-full pb-1 text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Full Name"
            />
            <Input
              name="name"
              type="text"
              className=" w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none "
              required={true}
              autoFocus={false}
              onChange={onChangeInput}
            />
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base  text-[#9A9A9A]"
              htmlFor="email"
              title="Email"
            />

            <div className="relative">
              <Input
                name="email"
                type="email"
                className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full  pb-1 text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Whatapp No"
            />

            <div className="relative">
              <Input
                name="whatapp"
                type="text"
                className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
                maxLength={11}
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Sex"
            />

            <div className="relative">
              <Dropdown
                name="sex"
                className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
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
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base text-[#9A9A9A]"
              htmlFor="Password"
              title="Password"
            />
            <div className="relative">
              <Input
                type="password"
                name="password"
                className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
              <p className=" text-sm text-orange-600 pt-2">
                Password should contain at least 8 characters
              </p>
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full text-base text-[#9A9A9A]"
              htmlFor="confirmPassword"
              title="Confirm Password"
            />

            <div className="relative">
              <Input
                type="password"
                name="confirmPassword"
                className="w-full p-1 md:p-2  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>
          </div>

          <Button
            className="w-full bg-orange-600 p-2 mt-3 lg:p-2  shadow-lg rounded-md text-white text-lg font-semibold"
            onClick={onSubmitHandler}
          >
            Sign Up
          </Button>

          <div className="flex justify-center mb-3">
            <span className="text-gray-600 text-sm mt-2 lg:mt-1">
              By Sign Up, you’ve already agreed to our{" "}
              <Link href="/" className="text-gray-900 font-bold">
                <a>Terms & Condition</a>
              </Link>
            </span>
          </div>
          <div className="flex">
            <p className="mr-3 mt-3 text-gray-600 text-md">Existing User?</p>
            <Link href="/auth/login">
              <a className="text-orange-600 mt-3 text-md underline">Login</a>
            </Link>
          </div>
        </form>

        <Footer />
      </div>
    </div>
  );
}

export default Register;
