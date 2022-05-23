import React from "react";
import email from "../../assets/images/email.png";
const Modal = () => {
  return (
    <div className="  p-4  m-4 rounded lg:w-1/2 lg:m-auto  mt-12 lg:mt-20 shadow font-poppins ">
      <img src={email} className=" flex flex-col justify-center items-center" />
      <h5 className="flex text-lg md:text-2xl justify-center font-extrabold lg:text-base">
        Email Confirmation
      </h5>
      <p className=" leading-20  text-lg md:text-xl lg:text-base pt-5 text-center">
        We have sent an Email to Taylormason@gmail.com to continue this process,
        After receiving the Email follow the link provided to complete your
        registration{" "}
      </p>
    </div>
  );
};
export default Modal;
