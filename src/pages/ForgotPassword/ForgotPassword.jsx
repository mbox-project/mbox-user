import React from "react";
import Heroimg from "../../images/Recoverypasswordimg.png";
const ForgotPassword = () => {
  return (
    <section className=" grid grid-cols-2">
      <div>
        <img
          src={Heroimg}
          className="  object-cover bg-gradient-to-b from-orange-600 to-orange-700"
        />
      </div>
      <div className="pt-48">
        <h2 className="text-orange-500  font-extrabold text-2xl flex justify-center">
          Recover Password
        </h2>
        <p className="flex justify-center text-sm pt-2">
          Please enter a recovery email
        </p>

        <form className="pl-24 max-w-xl">
          <label>
            Email
            <input
              type="email"
              className="  border-2 border-solid border-gray-200 rounded-md w-full  visible"
            />
          </label>
          <button className="mt-6 inline-block px-8 py-2 text-sm font-medium text-white transition bg-orange-600 rounded-md active:bg-orange-500 w-full focus:outline-none  focus:ring">
            Proceed
          </button>
        </form>
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
