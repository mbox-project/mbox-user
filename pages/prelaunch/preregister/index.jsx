import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
// import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../../../components/Dropdown";
import authbg from "../../../public/images/authbg.png";

function preRegister() {
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

  const accountOptions = [
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "Buyer",
    },
    {
      id: 3,
      value: "Vendor",
    },
  ];

  return (
    <div className="flex">
      <div className="hidden lg:w-1/2  lg:block bg-register-img bg-cover">
        <Image src={authbg} height={1250} />
      </div>
      <div className=" bg-grayColor w-full lg:w-1/2  px-4 lg:px-0">
        <div className="text-center ">
          <h1 className="lg:text-4xl poppins text-orange-600 text-xl md:text-2xl mt-16 lg:mt-24 lg:pt-0  font-bold lg:font-extrabold tracking-wide ">
            Create Account
          </h1>
          <div className=" flex justify-center">
            <p className="hidden md:flex font-extralight text-md poppins lg:md:max-w-sm lg:text-base mt-4 lg:mt-2 text-lightGray pl-16 md:pl-0  leading-8 ">
              Let&apos;s get you all set up for pre-registration. Provide us
              with the following information to get started
            </p>
          </div>
        </div>
        <form className="w-full px-0 lg:px-10 mt-10 lg:mt-4  ">
          <div className="mb-4">
            <Label
              className="w-full pb-1 text-base poppins text-[#9A9A9A]"
              htmlFor="text"
              title="Full Name"
            />
            <Input
              name="name"
              type="text"
              placeHolder="Taylor Mason"
              className=" w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 font-poppins border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none "
              required={true}
              autoFocus={false}
              onChange={onChangeInput}
            />
          </div>
          <div className="mb-4">
            <Label
              className="w-full poppins text-base  text-[#9A9A9A]"
              htmlFor="email"
              title="Email"
            />

            <div className="relative">
              <Input
                name="email"
                type="email"
                placeHolder="Taylormason@gmail.com"
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 font-poppins border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full  pb-1 text-base text-[#9A9A9A]"
              htmlFor="number"
              title="Whatsapp No."
            />

            <div className="relative">
              <Input
                name="whatsapp"
                type="number"
                placeHolder="(+234) 81 5657 8901"
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
                maxLength={11}
              />
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full font-poppins text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Sex"
            />
            <div className="relative">
              <Dropdown
                name="sex"
                placeHolder="male"
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
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full font-poppins text-base text-[#9A9A9A]"
              htmlFor="text"
              title="Account Type"
            />

            <div className="relative">
              <Dropdown
                name="account"
                placeHolder="Buyer"
                className="w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  font-poppins mt-2 border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              >
                {accountOptions.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </Dropdown>
            </div>
          </div>
          <div className="mb-4">
            <Label
              className="w-full pb-1 text-base poppins text-[#9A9A9A]"
              htmlFor="text"
              title="Location"
            />
            <Input
              name="location"
              type="address"
              placeHolder="Lagos"
              className=" w-full p-1  md:p-2 lg:py-2.5  focus:outline-none pr-12 text-lg lg:text-sm  mt-2 font-poppins border-[#444444] border-b-2  bg-grayColor border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none "
              required={true}
              autoFocus={false}
              onChange={onChangeInput}
            />
          </div>

          <Button
            className="w-full bg-orange-600 p-2 mt-3 lg:mt-6 lg:p-2 font-poppins  shadow-lg rounded-md text-white text-lg font-semibold"
            onClick={onSubmitHandler}
          >
            Pre-Register
          </Button>
        </form>

        <div className=" flex justify-items-end" >
          <p>&copy; 2022 </p>
          <p> All Copyright Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default preRegister;
