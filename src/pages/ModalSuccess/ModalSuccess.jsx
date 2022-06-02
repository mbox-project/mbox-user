import React from "react";
import emailsuccess from "../../assets/images/emailsuccess.png";
import Button from "../../components/Button";
const ModalSuccess = () => {
  return (
    <div className="  p-4  m-4 rounded lg:w-1/2 lg:m-auto  mt-12 lg:mt-20 shadow font-poppins  lg:p-2  ">
      <div className=" ">
        <img src={emailsuccess} className="w-10 h-15 block m-auto" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
        </svg>
      </div>

      <h5 className="flex text-lg md:text-2xl justify-center font-extrabold lg:text-lg">
        Email Verified Successfully
      </h5>
      <p className=" text-lg md:text-xl lg:text-sm pt-2 text-center  text-gray-400 lg:px-52">
        You’ve have successfully verified your email
      </p>

      <div className="  pt-4 md:pt-0 block md:flex justify-center ">
        <Button className="w-full btn p-2  rounded-md text-white m-6 text-base font-semibold">
          {" "}
          Continue
        </Button>
      </div>
    </div>
  );
};
export default ModalSuccess;
