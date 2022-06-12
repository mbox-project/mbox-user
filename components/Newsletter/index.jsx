import React from "react";
import Button from "../Button";
const Newsletter = () => {
  return (
    <div className="newsletterbg">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex justify-center ">
          <div className=" mt-8 lg:mt-0  lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold lg:flex justify-center  ">
                  <span className="text-orange-600 lg:pr-4">Newsletter </span>
                  Sign Up
                </h2>

                <p className="mt-6 ">
                  Be the first to receive update on our services and special
                  stores offers
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 ">
              <form className="w-full text-white">
                <label htmlFor="email" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="p-2 border sm:flex sm:items-center border-white/10">
                  <input
                    className="w-full h-12 p-3 text-sm font-medium tracking-widest placeholder-gray-400 uppercase lg:normal-case border-none rounded-md border-black lg:mt-8  border-2  bg-transparent lg:border-solid"
                    type="email"
                    id="email"
                    placeholder="Type your email address here ..."
                    required
                  />

                  <Button
                    className="w-full h-12 px-6 py-3 mt-1 uppercase lg:normal-case lg:rounded-md lg:-ml-2 lg:mt-8 text-sm font-bold tracking-wide  bg-orange-600 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0"
                    type="submit"
                  >
                    Subscribe
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
