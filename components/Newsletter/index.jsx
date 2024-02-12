import Link from "next/link";
import React from "react";
import Button from "../Button";
const Newsletter = () => {
  return (
    <div className="newsletterbg py-10 font-poppins">
      <div className="flex flex-col justify-center text-center px-2">
        <div className="w-full">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-lightGray md:flex justify-center py-5">
              <span className="text-orange-600 lg:pr-4">Newsletter </span>
              Sign Up
            </h2>

            <p className="flex justify-center text-base p-2 text-lightGray">
              Be the first to receive update on our services and special stores
              offers
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <form className="w-full md:w-7/12">
            <div className="flex md:flex-row flex-col items-center py-5 gap-2">
              <input
                className="w-full h-12 px-3 text-sm placeholder-gray-500 border rounded-md border-gray-300"
                type="email"
                id="email"
                placeholder="Type your email address here ..."
                required
              />

              <Button
                className="w-auto h-12 px-5 rounded-md text-white bg-orange-600"
                type="submit"
              >
                <Link href={""}>Subscribe</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
