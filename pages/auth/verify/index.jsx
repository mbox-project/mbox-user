import React from "react";
import verify from "../../../public/images/loginbg.png";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
// import Footer from "../../../components/Footer";
import Image from "next/image";

function VerifyOTP() {
  const [otp, setOtp] = React.useState(new Array(6).fill(""));

  const onChangeInput = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((item, id) => (id === index ? element.value : item))]);

    // // focus next input
    // if (element.nextSibling) {
    //   alert(element.nextSibling);
    //   console.log(element.nextSibling);
    //   element.nextSibling.focus();
    // }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert(otp.join(""));
  };

  return (
    <div className="flex ">
      <div className=" hidden  min-h-screen w-1/2  mx-auto  lg:block bg-verify-img bg-cover ">
        <Image src={verify} width={1000} height={1100} />
      </div>

      <div className="w-full lg:w-1/2 lg:mx-auto  px-4">
        <div className="w-full  font-poppins text-center">
          <h1 className="lg:text-3xl text-orange-600 text-xl lg:pt-0 mt-20 font-poppins font-extrabold ">
            OTP Verification
          </h1>
          <p className="block pb-3 pt-4 text-base lg:text-xs md:pt-6  lg:pt-3 px-12 lg:px-52 leading-relaxed ">
            Enter the 6-digit number sent to taylormason@gmail.com
          </p>
        </div>

        <form className="px-10 pt-4  md:mt-4 lg:mt-6">
          <div className="mb-4 flex justify-center ">
            {otp.map((data, index) => {
              return (
                <div className="mx-0 md:mx-2 lg:mx-4" key={index}>
                  <div className="relative">
                    <Input
                      name="otp"
                      type="text"
                      className="w-12 h-12 px-4 mr-1 text-base border-[#444444] border-2 rounded-md shadow-sm"
                      required={true}
                      autoFocus={false}
                      maxLength={1}
                      value={data}
                      onChange={(e) => onChangeInput(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mb-3">
            <Button className="text-gray-900  underline font-bold pl-2">
              Request new code
            </Button>
          </div>

          <Button
            className="w-full bg-orange-600 p-2 mb-4 mt-10 md:mt-12 lg:mt-7 rounded-md shadow-md text-white text-lg font-semibold"
            onClick={onSubmitHandler}
          >
            Verify and Proceed
          </Button>
        </form>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default VerifyOTP;
