import React from "react";
import email from "../../assets/images/email.png";
const Modal = () => {
  return (
    <div className="w-full p-4 lg:w-1/2 m-auto border-2 mt-0 lg:mt-20  font-poppins ">
      <img src={email} className="" />
      <h5 className="flex  justify-center font-extrabold text-base">
        Email Confirmation
      </h5>
      <p className="text-base">
        We have sent an Email to Taylormason@gmail.com to continue this process,
        After receiving the Email follow the link provided to complete your
        registration{" "}
      </p>
    </div>
  );
};
export default Modal;
