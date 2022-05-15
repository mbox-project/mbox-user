import React from "react";
import Heroimg from "../../images/recoverpasswordimg.png";
import InputForm from "../../components/InputForm";

const ForgotPassword = () => {
  return (
    <section className="forgotpasswordbg h-screen  block lg:grid grid-cols-2">
      <div className="hidden lg:block">
        <img src={Heroimg} className="h-full " />
      </div>
      <div className=" pt-28 lg:pt-44">
        <h2 className="text-orange-500  font-poppins font-extrabold text-2xl flex justify-center">
          Recover Password
        </h2>
        <p className="flex font-poppins font-200 justify-center text-xs pt-2">
          Please enter a recovery email
        </p>

        <InputForm />
        <p className="flex font-poppins font-light justify-center text-xs pt-4">
          Check the email input for a recovery link
        </p>
        <p className=" flex justify-center font-poppins lg:block lg:max-w-md lg:m-auto pt-2 text-sm">
          Existing user? <a className="text-orange-600">Back to login</a>
        </p>
      </div>
    </section>
  );
};
export default ForgotPassword;
