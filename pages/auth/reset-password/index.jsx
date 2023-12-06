import { useEffect, useState } from "react";
import resetpasswordimg from "../../../public/images/loginbg.png";

import Button from "../../../components/Button";
// import Footer from "../../../components/Footer";
import Label from "../../../components/Label";
import Image from "next/image";
import Input from "../../../components/Input";
import Spinner from "../../../components/Spinner";
import { resetpassword, forgotpassword } from "../../../store/auth/authSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toastify } from "../../../helpers";

function ResetPassword() {
  const { query } = useRouter();
  const [value, setValue] = useState({
    email: query?.email,
    token: query?.token,
  });
  useEffect(() => {
    setValue((prev) => {
      return {
        ...prev,
        token: query?.token,
        email: query?.email,
      };
    });
  }, [JSON.stringify(query)]);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const onChangeInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(resetpassword(value))
      .unwrap()
      .then((action) => {
        setValue({});
        toastify.alertSuccess("Password Reset", 3000);
        router.push("/auth/login");
      })
      .catch((error) => {
        toastify.alertError(error?.message || "something went wrong", 3000);
      });
  };

  const resendLink = () => {
    dispatch(forgotpassword({ email: value?.email }))
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
      <div className=" hidden w-1/2 min-h-screen mx-auto lg:block bg-reset bg-cover">
        <Image src={resetpasswordimg} height={830} />
      </div>
      <div className=" lg:w-1/2 mx-auto w-full inputcolor  ">
        <div className="w-full bg-grayColor">
          <div className="text-center">
            <h1 className="text-xl lg:text-3xl poppins  font-bold pt-20 lg:pt-44 text-orange-600 mb-3">
              Reset Password
            </h1>
            <p className="hidden md:flex justify-center  poppins text-lg lg:text-sm text-gray-700">
              Enter a new password
            </p>
          </div>
          <form
            onSubmit={onSubmitHandler}
            className=" px-4 mt-10 lg:mt-4 lg:px-10"
          >
            <div className="mb-4">
              <Label
                className="w-full text-lg lg:text-base poppins text-[#9A9A9A]"
                htmlFor="password"
                title=" New Password"
              />

              <div className="relative">
                <Input
                  name="password"
                  type="password"
                  className="w-full p-1 md:p-2  lg:py-2.5 poppins bg-grayColor focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  autoFocus={true}
                  required={true}
                  onChange={onChangeInput}
                  value={value?.password}
                />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-4 mt-10 lg:mt-0">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title=" Confirm New Password"
              />

              <div className="relative">
                <Input
                  name="confirmPassword"
                  type="password"
                  className="w-full p-1 md:p-2 lg:py-2.5 poppins bg-grayColor  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  autoFocus={true}
                  required={true}
                  onChange={onChangeInput}
                  value={value?.confirmPassword}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <Button
              className="w-full bg-orange-600 h-12  mt-8  mb-0 lg:mb-4 rounded-lg text-white text-lg  lg:text-base  font-semibold"
              type="submit"
            >
              Reset my password
            </Button>
            {/* <Footer /> */}
          </form>
          <div className="flex justify-center">
            <button
              onClick={resendLink}
              className="underline text-orange-600 lg:text-lightGray text-lg lg:text-sm poppins"
            >
              resend link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
