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

        <form>
          <label className="max-w-xs">
            Email
            <input
              type="email"
              className=" border-2 border-solid border-gray-200 rounded-md w-full  visible"
            />
          </label>
          <button>Proceed</button>
        </form>
        <p>Check the email input for a recoverylink</p>
        <p>Existing user? Back to login</p>
      </div>
    </section>
  );
};
export default ForgotPassword;
