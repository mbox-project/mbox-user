import Link from "next/link";
import React from "react";
import Button from "../Button";

const Newsletter = () => {
  return (
    <div className="newsletterbg py-8 md:py-16 lg:py-24 font-poppins">
      <div className="flex flex-col gap-[32px] justify-center text-center px-4">
        <div className="w-full">
          <div>
            <h2 className="text-xl md:text-[32px] font-medium text-lightGray md:flex justify-center py-2">
              <span className="text-orange-600 lg:pr-3">Newsletter </span>
              Sign Up
            </h2>

            <p className="flex justify-center text-xs md:text-base p-2 text-lightGray">
              Be the first to receive update on our services and special stores
              offers
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <form
            action="https://formsubmit.co/Marketboxng27@gmail.com"
            method="POST"
            // onSubmit={(e) => e.preventDefault()}
            className="w-full md:w-7/12"
          >
            <div className="flex md:flex-row flex-col items-center py-2 gap-2">
              <input
                className="w-full p-3.5 text-sm md:text-[16px] placeholder-gray-500 border rounded-md border-gray-300"
                type="email"
                id="email"
                name="email"
                placeholder="Type your email address here..."
                required
              />

              <Button
                className="w-full md:w-auto p-3.5 px-6 text-sm md:text-[18px] rounded-md text-white bg-[#EF5612]"
                type="submit"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
