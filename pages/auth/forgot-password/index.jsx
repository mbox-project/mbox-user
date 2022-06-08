import React from "react";
import logo from "../../../public/images/logo.png";
import icon from "../../../public/images/icon.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";

function ForgotPassword() {
  const [value, setValue] = React.useState({});

  const onChangeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex">
      <div className=" hidden w-1/2  mx-auto min-h-screen lg:block bg-recover-img bg-cover bg-red-500">
        <Image src={logo} className=" w-32 m-6" />
        <div className="pt-96 mt-52 mb-20  text-white">
          <Image src={icon} className=" w-32  mx-auto " />
          <p className="flex justify-center font-poppins font-extrabold text-4xl -mt-20 ">
            Hello, Friend!
          </p>
          <p className="flex justify-center pt-3 font-poppins text-base  ">
            Welcome back! Please login to your account
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2  lg:mx-auto generalbg my-auto">
        <div className="w-full  font-poppins text-center">
          <h1 className="lg:text-3xl text-orange-600 text-3xl md:text-5xl lg:pt-0 font-poppins font-extrabold ">
            Recover Password
          </h1>
          <p className=" flex  text-base  lg:text-sm mt-4 lg:mt-3  md:pl-0 justify-center lg:px-44 leading-relaxed ">
            Please enter your recovery email.
          </p>
        </div>
        <form className=" px-5 lg:px-10 mt-5 lg:mt-4 lg:pt-0 ">
          <div className="mb-4">
            <Label
              className="w-full pb-1 text-base text-[#9A9A9A]"
              htmlFor="email"
              title="Email"
            />
            <Input
              name="email"
              type="email"
              className=" w-full mt-1 p-2 inputcolor focus:outline-none lg:p-2 text-lg lg:text-base border-[#444444] rounded-md shadow-sm border-2 "
              required={true}
              autoFocus={false}
              onChange={onChangeInput}
            />
          </div>

          <Button
            className="w-full bg-orange-600 p-2 mt-3 lg:p-2  shadow-lg rounded-md text-white text-lg font-semibold"
            onClick={onSubmitHandler}
          >
            Proceed
          </Button>

          <div className="flex ">
            <p className="mr-3 mt-3 text-gray-600 text-lg md:text-xl">
              Existing User?
            </p>
            <Link href="/auth/login">
              <a className="text-orange-600 mt-3 text-lg md:text-xl underline">
                Back to Login
              </a>
            </Link>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPassword;
