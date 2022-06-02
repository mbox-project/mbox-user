import React from "react";
import email from "../../assets/images/email.png";
import { Link } from "react-router-dom";
const Modal = () => {
  return (
    <div className="  p-4  m-4 rounded lg:w-1/2 lg:m-auto  mt-12 lg:mt-20 shadow font-poppins  ">
      <div className=" ">
        <img src={email} className="w-10 h-15 block m-auto" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
        </svg>
      </div>

      <h5 className="flex text-lg md:text-2xl justify-center font-extrabold lg:text-base">
        Email Confirmation
      </h5>
      <p className="leading-relaxed  text-lg md:text-xl lg:text-base pt-5 text-center">
        We have sent an Email to Taylormason@gmail.com to continue this process,
        After receiving the Email follow the link provided to complete your
        registration{" "}
      </p>

      <hr className=" mt-6" />

      <div className="  pt-4 md:pt-0 block md:flex justify-center ">
        <p className=" mr-0 mt-0 md:mr-3 md:mt-3 text-gray-600   text-center text-lg md:text-xl lg:text-base">
          I didnt get any e-mail?
        </p>
        <Link
          to="/auth/login"
          className="text-orange-600 mt-3 flex justify-center  text-lg md:text-xl lg:text-base "
        >
          Resend Confirmation Email
        </Link>
      </div>
    </div>
  );
};
export default Modal;
