import React from "react";
const GenerateInvoice = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div>
            <span className="block w-32 h-10 bg-gray-700 rounded-lg"></span>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Get the latest news!
                </h2>

                <p className="mt-6 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                  non cupiditate quae nam molestias.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full text-white">
                <label htmlFor="email" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="p-2 border sm:flex sm:items-center border-white/10">
                  <input
                    className="w-full h-12 p-3 text-sm font-medium tracking-widest placeholder-gray-400 uppercase bg-transparent border-none"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />

                  <button
                    className="w-full h-12 px-6 py-3 mt-1 text-sm font-bold tracking-wide uppercase bg-red-700 sm:ml-4 sm:flex-shrink-0 sm:w-auto sm:mt-0"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GenerateInvoice;
