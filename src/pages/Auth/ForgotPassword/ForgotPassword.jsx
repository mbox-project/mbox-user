import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Input from "../../../components/Input";
import Label from "../../../components/Label";

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
      <div className="  hidden lg:w-1/2  lg:mx-auto  lg:block bg-register-img ">
        <img src={logo} className="w-32 m-6" />
        <div className=" mt-32 pt-96  text-white">
          <p className="flex justify-center font-poppins font-extrabold text-4xl ">
            Hello, Friend!
          </p>
          <p className="flex justify-center pt-3 font-poppins text-base  ">
            Welcome back! Please login to your account
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:mx-auto  md:my-auto generalbg p-12">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold lg:pt-20 text-orange-600 ">
              Recover Password
            </h1>
            <p className=" lg:text-base text-lg text-gray-700">
              Please enter your recovery email.
            </p>
          </div>
          <form className=" px-0 lg:px-10">
            <div className="mb-6">
              <Label
                className="w-full  text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />
              <Input
                name="email"
                type="email"
                className="w-full  p-4 pr-12 mt-2 text-2xl lg:text-base border-[#444444] border-2 rounded-lg shadow-sm"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>

            <Button
              className="w-full bg-orange-600 h-16  mb-0 lg:mb-4 rounded-lg text-white text-2xl font-semibold"
              onClick={onSubmitHandler}
            >
              Proceed
            </Button>
            <div className="flex justify-center mb-3">
              <span className="text-gray-600 text-lg leading-12  lg:leading-0  lg:text-sm pt-3">
                Check the Email input above for a recovery link
                <Link to="/" className="text-gray-900 pt-3  lg:pt-0 font-bold">
                  Terms & Condition
                </Link>
              </span>
            </div>
            <div className="flex pt-4 lg:pt-0">
              <p className="mr-3 text-gray-600 text-lg lg:text-xl">
                Existing User?
              </p>
              <Link
                to="/auth/register"
                className="text-orange-600 text-lg lg:text-xl underline"
              >
                Back to Login
              </Link>
            </div>
            <Footer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
