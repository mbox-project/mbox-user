import Link from "next/link";
import React from "react";
import Button from "../Button";
const Newsletter = () => {
  return (
    <div className="newsletterbg -mt-60 md:mt-0">
      <div className="max-w-screen-xl px-4 py-16 mx-auto  poppins sm:px-6 lg:px-8">
        <div className="md:flex justify-center ">
          <div className=" mt-2 lg:mt-0  lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-lightGray md:flex justify-center  poppins ">
                  <span className="text-orange-600 lg:pr-4">Newsletter </span>
                  Sign Up
                </h2>

                <p className="mt-6 lg:mt-2  flex justify-center leading-relaxed text-base font-light  poppins ">
                  Be the first to receive update on our services and special
                  stores offers
                </p>
              </div>
            </div>

            <div className="col-span-2  ">
              <form className="w-full text-white">
                <label htmlFor="email" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="p-2 border sm:flex sm:items-center border-white/10">
                  <input
                    className="w-full h-12 p-3 lg:px-96 text-sm font-medium tracking-widest placeholder-gray-400 uppercase lg:normal-case border-none rounded-md border-black lg:mt-8  border-2  bg-transparent lg:border-solid"
                    type="email"
                    id="email"
                    placeholder="Type your email address here ..."
                    required
                  />

                  <Button
                    className="w-full h-12 px-6 lg:px-10 py-3 mt-1 uppercase lg:normal-case lg:rounded-md lg:rounded-l-none lg:-ml-2 lg:mt-8 text-sm font-bold tracking-wide  bg-orange-600 md:mt-4   sm:flex-shrink-0 sm:w-auto sm:mt-0"
                    type="submit"
                  >
                    <Link href={""}>Subscribe</Link>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
