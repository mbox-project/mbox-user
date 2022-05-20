import React from "react";
import Heroimg from "../../images/recoverpasswordimg.png";
import InputForm from "../../components/InputForm";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const ForgotPassword = () => {
  return (
    <section className="forgotpasswordbg overflow-y-hidden block lg:grid grid-cols-2">
      <div className="hidden lg:block">
        <img src={Heroimg} className=" object-cover  overflow-hidden" />
        <p className="">Hello, Friend</p>
      </div>
      <div className=" pt-44">
        <h2 className="text-orange-500 text-3xl md:text-5xl  font-poppins font-extrabold lg:text-2xl flex justify-center">
          Recover Password
        </h2>
        <p className="flex font-poppins font-light text-lg md:text-xl md:pt-6 justify-center  pt-3 lg:text-xs lg:pt-2">
          Please enter a recovery email
        </p>

        <InputForm />
        <Button className="w-full bg-orange-600 h-16 mb-4 rounded-lg text-white text-2xl font-semibold">
          Proceed
        </Button>
        <p className="flex font-poppins font-light md:text-xl md:pt-12  justify-center text-base pt-10 lg:text-xs lg:pt-4">
          Check the email input for a recovery link
        </p>
        <p className=" flex justify-center font-poppins text-base md:text-lg md:pt-7 lg:block lg:max-w-md pt-5 lg:m-auto lg:pt-3 lg:text-xs">
          Existing user? <a className="text-orange-600 px-2">Back to login</a>
        </p>
        <Footer />
      </div>
    </section>
  );
};
export default ForgotPassword;
