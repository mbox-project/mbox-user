import React from "react";
import loginbg from "../../../public/images/loginbg.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { forgotpassword } from "../../../store/auth/authSlice";
import { toastify } from "../../../helpers";
import Spinner from "../../../components/Spinner";
const ForgotPassword = () => {
  const [value, setValue] = React.useState({});
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const onChangeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotpassword(value))
      .unwrap()
      .then((action) => {
        setValue({});
        toastify.alertSuccess(
          "A password reset mail has been sent to your email for account verification",
          3000
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex">
      {isLoading && <Spinner />}
      <div className=" hidden w-1/2  mx-auto min-h-screen lg:block ">
        <Image src={loginbg} />
      </div>
      <div className="w-full lg:w-1/2  lg:mx-auto  mt-20 lg:mt-44">
        <div className="w-full  font-poppins text-center">
          <h1 className="lg:text-3xl text-orange-600 text-3xl md:text-5xl lg:pt-0 font-poppins font-extrabold ">
            Recover Password
          </h1>
          <p className=" flex  text-base  lg:text-sm mt-4 lg:mt-3  md:pl-0 justify-center lg:px-44 leading-relaxed ">
            Please enter your recovery email.
          </p>
        </div>
        <form
          onSubmit={onSubmitHandler}
          className=" px-5 lg:px-10 mt-5 lg:mt-4 lg:pt-0 "
        >
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
              autoFocus={true}
              onChange={onChangeInput}
              value={value?.email}
            />
          </div>

          <Button
            className="w-full bg-orange-600 p-2 mt-3 lg:p-2  shadow-lg rounded-md text-white text-lg font-semibold"
            type="submit"
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
      </div>
    </div>
  );
};

export default ForgotPassword;
