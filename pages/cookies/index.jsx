import React from "react";
import Navbar from "../../components/PagesLayout/Navbar";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";

const Cookies = () => {
  return (
    <div className="">
      <Navbar />
      <section className=" w-full h-64 text-white aboutherobg block  ">
        <h1 className="flex justify-center text-xl md:text-4xl lg:text-6xl poppins font-extrabold pt-16">
          Cookies
        </h1>
        <p className="flex justify-center pt-2  text-grayColor poppins text-base tracking-wide md:pt-4">
          Learn more about our platform Mbox
        </p>
      </section>

      <section className="max-w-screen-xl px-4 py-10  md:py-8 lg:py-16 mx-auto sm:px-6 lg:px-8">
        Cookies
      </section>

      <section>
        <Newsletter />
      </section>
      <section>
        <MainFooter />
      </section>
    </div>
  );
};
export default Cookies;
