import React from "react";
import Header from "../components/Header";
import MainFooter from "../components/MainFooter";
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Feature from "../components/Feature";
import GenerateInvoice from "../components/GenerateInvoice";
import BuyNow from "../components/BuyNow";
import Items from "../components/Items";
const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <section>
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Understand User Flow.
              <strong className="font-extrabold text-red-700 sm:block">
                Increase Conversion.
              </strong>
            </h1>

            <p className="mt-4 sm:leading-relaxed sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="featurebg ">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <h2 className="flex justify-center uppercase text-lg lg:text-xl">
            Our Special<span className="text-orange-600 px-1 "> Features</span>
          </h2>
          <div className=" block w-full  lg:flex">
            <Feature
              className="p-4 m-2 lg:m-4 border-2 block  shadow-md max-w-sm rounded-xl col-span-2 bg-white"
              header="Buying & Selling Safely"
              body="Dealer in various type of whatever as
              want randing from this to that to those
              and here!"
            />
            <Feature
              className="p-4 m-2 lg:m-4 border-2 block  shadow-md max-w-sm rounded-xl col-span-2 bg-white"
              header="100%  Secure"
              body="Dealer in various type of whatever as
              want randing from this to that to those
              and here!"
            />
            <Feature
              className="p-4 m-2  lg:m-4 border-2 block  shadow-md max-w-sm rounded-xl col-span-2 bg-white"
              header="24Hrs Warranty"
              body="Dealer in various type of whatever as
              want randing from this to that to those
              and here!"
            />
          </div>
        </div>
      </section>
      <GenerateInvoice />
      <BuyNow />
      <Items />
      <About />
      <Newsletter />
      <MainFooter />
    </div>
  );
};

export default LandingPage;
