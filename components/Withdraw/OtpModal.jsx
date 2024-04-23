import React, { useState } from "react";
import Button from "../../components/Button";
import { Input, Modal } from "antd";
import OtpInput from "react18-input-otp";
import Link from "next/link";

const OtpModal = ({ open, setOpen }) => {
  const [otp, setOtp] = useState("");
  const [contactMethod, setContactMethod] = useState(null); // To track the selected method

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  // Function to handle radio change
  const handleRadioChange = (e) => {
    setContactMethod(e.target.value);
  };

  // reset state and close the modal
  const handleClose = () => {
    // Reset states
    setOtp("");
    setContactMethod(null);
    // Close the modal
    setOpen(false);
  };

  return (
    <Modal open={open} onCancel={handleClose} footer={null}>
      <div className="flex flex-col gap-4">
        {contactMethod === null && (
          <>
            {/* Original content asking for selection */}
            <div className="flex flex-col gap-1 text-center">
              <h2 className=" text-[#EF5612] font-poppins font-bold text-[24px] md:text-[36px]">
                OTP Verification
              </h2>
              <p className=" font-poppins text-[13px] md:text-base text-[#ADAAA9]">
                For additional security to complete this, We would like to send
                a 6-digit number, please select your preferred option:
              </p>
            </div>
            <div className="bg-white font-medium text-[14px] md:text-[18px]">
              <div className="flex justify-center">
                <ul className="mt-3 space-y-3">
                  <li className="flex items-center gap-x-2.5">
                    <input
                      type="radio"
                      name="contactMethod"
                      id="phone"
                      value="phone"
                      onChange={handleRadioChange}
                      className="form-radio border-gray-400 text-[#EF5612] focus:ring-[#EF5612] duration-150"
                    />
                    <label htmlFor="phone" className="">
                      Phone number (
                      <span className="text-[#26A17B]">*********896</span>)
                    </label>
                  </li>
                  <li className="flex items-center gap-x-2.5">
                    <input
                      type="radio"
                      name="contactMethod"
                      id="email"
                      value="email"
                      onChange={handleRadioChange}
                      className="form-radio border-gray-400 text-[#EF5612] focus:ring-[#EF5612] duration-150"
                    />
                    <label htmlFor="email" className="">
                      Email (
                      <span className="text-[#26A17B]">
                        tayl*******@gmail.com
                      </span>
                      )
                    </label>
                  </li>
                </ul>
              </div>

              <div className=" flex px-12 pt-2">
                <Button className=" w-full mx-auto my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">
                  Send OTP
                </Button>
              </div>
            </div>
          </>
        )}

        {contactMethod === "phone" && (
          // Phone content
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-center">
              <h2 className=" text-[#EF5612] font-poppins font-bold text-[24px] md:text-[36px]">
                OTP Verification
              </h2>
              <p className=" font-poppins text-[13px] md:text-base text-[#ADAAA9]">
                For additional security, please enter the 6-digit number sent to
                a phone number that ends with{" "}
                <span className="text-[#26A17B]">896</span>
              </p>
            </div>
            <div className="bg-white font-medium text-[14px] md:text-[18px]">
              <div className="flex flex-col gap-6 items-center">
                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  separator={<span>&nbsp; </span>}
                  shouldAutoFocus
                  className="text-[40px]"
                />

                <Link
                  href=""
                  className="text-[#491546] underline text-sm font-semibold"
                >
                  Didn’t receive the OTP?
                </Link>
              </div>

              <div className=" flex px-12 pt-2">
                <Button className=" w-full mx-auto my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">
                  Withdraw Now ($4,000.00)
                </Button>
              </div>
            </div>
          </div>
        )}

        {contactMethod === "email" && (
          // Email content
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 text-center">
              <h2 className=" text-[#EF5612] font-poppins font-bold text-[24px] md:text-[36px]">
                OTP Verification
              </h2>
              <p className=" font-poppins text-[13px] md:text-base text-[#ADAAA9]">
                For additional security, please enter the 6-digit number sent to
                this email{" "}
                <span className="text-[#26A17B]">tayl*******@gmail.com</span>
              </p>
            </div>
            <div className="bg-white font-medium text-[14px] md:text-[18px]">
              <div className="flex flex-col gap-6 items-center">
                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  separator={<span>&nbsp; </span>}
                  shouldAutoFocus
                  className="text-[40px]"
                />

                <Link
                  href=""
                  className="text-[#491546] underline text-sm font-semibold"
                >
                  Didn’t receive the OTP?
                </Link>
              </div>

              <div className=" flex px-12 pt-2">
                <Button className=" w-full mx-auto my-4 rounded-md shadow-lg bg-brightRed  py-2  text-white flex justify-center text-base poppins">
                  Withdraw Now ($4,000.00)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default OtpModal;
