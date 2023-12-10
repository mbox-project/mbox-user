import { useEffect, useState } from "react";
import resetpasswordimg from "../../../public/images/loginbg.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
  const [showPassword, setShowPassword] = useState(false);
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
                  type={showPassword ? "text" : "password"}
                  placeHolder="enter new password"
                  className="w-full p-1 md:p-2  lg:py-2.5 poppins bg-grayColor focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  autoFocus={true}
                  required={true}
                  onChange={onChangeInput}
                  value={value?.password}
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

            <div className="mb-4 mt-10 lg:mt-0">
              <Label
                className="w-full text-lg lg:text-base text-[#9A9A9A]"
                htmlFor="password"
                title=" Confirm Password"
              />

              <div className="relative">
                <Input
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeHolder="confirm new password"
                  className="w-full p-1 md:p-2 lg:py-2.5 poppins bg-grayColor  focus:outline-none pr-12 text-lg lg:text-base  mt-2 border-[#444444] border-b-2  border-t-0  border-x-0 md:border-2  md:rounded-lg shadow-sm rounded-none"
                  autoFocus={true}
                  required={true}
                  onChange={onChangeInput}
                  value={value?.confirmPassword}
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
