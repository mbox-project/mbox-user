import React from "react";
import Heroimg from "../../images/Recoverypasswordimg.png";
import InputForm from "../../components/InputForm";
const ForgotPassword = () => {
  return (
    <section className=" grid grid-cols-2">
      <div className="hidden lg:block">
        <img
          src={Heroimg}
          className="  object-cover bg-gradient-to-b from-orange-600 to-orange-700"
        />
      </div>
      <div className=" pt-20 lg:pt-48">
        <h2 className="text-orange-500  font-extrabold text-2xl flex justify-center">
          Recover Password
        </h2>
        <p className="flex justify-center text-sm pt-2">
          Please enter a recovery email
        </p>

        <InputForm />
        <p className="flex justify-center text-sm pt-2">
          Check the email input for a recovery link
        </p>
        <p className="pl-24 pt-2 text-sm">
          Existing user? <a className="text-orange-600">Back to login</a>
        </p>
      </div>
    </section>
  );
};
export default ForgotPassword;
