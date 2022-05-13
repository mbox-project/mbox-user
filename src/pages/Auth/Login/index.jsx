import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import Button from "../../../components/Button";
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
    <div className="w-full h-screen flex">
      <div className="w-1/2 mx-auto p-12 bg-black">
        <img src={logo} />
      </div>
      <div className="w-1/2 mx-auto my-auto bg-white p-12">
        <div className="w-full">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-orange-600 mb-5">Login</h1>
            <p className="text-base text-gray-700">
              Please enter your details.
            </p>
          </div>
          <form className="px-10">
            <div className="mb-6">
              <Label
                className="w-full text-base text-gray-700"
                htmlFor="email"
                title="Email"
              />
              <Input
                name="email"
                type="email"
                className="w-full mt-2 p-4 text-sm border-gray-400 rounded-lg shadow-sm border-2"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              />
            </div>
            <div className="mb-6">
              <Label
                className="w-full text-base text-gray-700"
                htmlFor="password"
                title="Password"
              />
              {/* <Input
                name="password"
                type="password"
                className="w-full mt-2 p-4 text-sm border-gray-400 rounded-lg shadow-sm border-2"
                required={true}
                autoFocus={false}
                onChange={onChangeInput}
              /> */}
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
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
            <div className="mb-6 flex justify-between text-gray-600">
              <div>
                <Input
                  type="checkbox"
                  className="mr-2"
                  required={false}
                  onChange={onChangeInput}
                />
                <span>Remember me</span>
              </div>
              <div>
                <Link className="underline" to={`/auth/forgot-password`}>
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              className="w-full bg-orange-600 h-16 mb-4 rounded-lg text-white text-2xl font-semibold"
              onClick={onSubmitHandler}
            >
              Login
            </Button>
            <div className="flex justify-center mb-3">
              <span className="text-gray-600 text-sm">
                By Login, you’ve already agreed to our{" "}
                <Link to="/" className="text-gray-900 font-bold">
                  Terms & Condition
                </Link>
              </span>
            </div>
            <div className="flex">
              <p className="mr-3 text-gray-600 text-xl">New User?</p>
              <Link
                to="/auth/register"
                className="text-orange-600 text-xl underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
